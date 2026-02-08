import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const allowedOrigins = [
  "http://localhost:5173",
  "http://localhost:4173",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:4173",
  // TODO: Add production domain(s).
];

function getCorsHeaders(origin: string | null) {
  const allowOrigin = origin && allowedOrigins.includes(origin) ? origin : allowedOrigins[0];

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
  };
}

interface ContactRequest {
  fullName: string;
  email: string;
  preferredChannel: "email" | "whatsapp";
  message: string;
}

const handler = async (req: Request): Promise<Response> => {
  const corsHeaders = getCorsHeaders(req.headers.get("origin"));

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(JSON.stringify({ ok: false, error: "Méthode non autorisée" }), {
        status: 405,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const body: ContactRequest = await req.json();
    const { fullName, email, preferredChannel, message } = body;

    if (!fullName?.trim() || !email?.trim() || !message?.trim()) {
      return new Response(JSON.stringify({ ok: false, error: "Nom, email et message sont requis." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ ok: false, error: "Adresse email invalide." }), {
        status: 400,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      });
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      throw new Error("RESEND_API_KEY not configured");
    }

    const contactRecipient = Deno.env.get("CONTACT_RECIPIENT_EMAIL") ?? "collectif@lemaclinictruth.fr";

    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "LemaClinic Truth <onboarding@resend.dev>",
        to: [contactRecipient],
        reply_to: email,
        subject: `Nouveau message contact - ${fullName}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 700px; margin: 0 auto;">
            <h2 style="color: #dc2626;">Nouveau message de contact</h2>
            <p><strong>Nom:</strong> ${fullName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Canal préféré:</strong> ${preferredChannel}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Resend contact email API error:", errorData);
      throw new Error("Failed to send contact message");
    }

    return new Response(JSON.stringify({ ok: true, message: "Message envoyé." }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error("Error in contact-submit function:", errorMessage);

    return new Response(
      JSON.stringify({ ok: false, error: "Impossible d'envoyer le message pour le moment." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
