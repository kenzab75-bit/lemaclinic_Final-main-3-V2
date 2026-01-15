import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Scale, Shield, FileText, AlertTriangle, ChevronRight, Quote, ArrowUp, Lock, ShieldCheck, ChevronDown, Menu, Mail, Loader2, Heart, FileCheck, Sparkles, Globe, Users, Megaphone, Fingerprint, KeyRound, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import ContactForm from "@/components/ContactForm";
import TestimonialCard from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { timelineSteps, type TimelineStep } from "@/data/timelineSteps";
import MegaMenuSInformer from "@/components/MegaMenuSInformer";
import TimelineModalSimple from "@/components/TimelineModalSimple";
const Index = () => {
  const heroVideoRef = useRef<HTMLVideoElement | null>(null);

  const [scrolled, setScrolled] = useState(false);
  const [openStep, setOpenStep] = useState<TimelineStep | null>(null);
  const [activeFilter, setActiveFilter] = useState("Tous");
  const [testimony, setTestimony] = useState("");
  const [consentChecked, setConsentChecked] = useState(false);
  const [testimonySegment, setTestimonySegment] = useState("victime");
  const [testimonyChannel, setTestimonyChannel] = useState("texte");
  const [encryptionReceipt, setEncryptionReceipt] = useState<string | null>(null);
  const [isSubmittingTestimony, setIsSubmittingTestimony] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [displayedTestimonials, setDisplayedTestimonials] = useState(3);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [hasHeroVideoError, setHasHeroVideoError] = useState(false);
  const [isHeroPaused, setIsHeroPaused] = useState(false);
  const {
    toast
  } = useToast();
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false); // Close mobile menu on navigation
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const heroSegments = [
    {
      id: "victime",
      title: "Victime ou proche",
      description: "Je veux savoir comment témoigner et être protégée.",
      badge: "Parcours d'écoute",
      target: "temoignages",
      icon: Shield,
    },
    {
      id: "presse",
      title: "Journaliste",
      description: "Je cherche un dossier sourcé et des preuves vérifiées.",
      badge: "Brief vérifiable",
      target: "victimes",
      icon: Megaphone,
    },
    {
      id: "expert",
      title: "Médecin / avocat",
      description: "Je souhaite contribuer au collectif et sécuriser les patients.",
      badge: "Appel à expertise",
      target: "contact",
      icon: FileCheck,
    }
  ];

  const heroValueProps = [
    {
      icon: Sparkles,
      title: "Expérience guidée",
      description: "Parcours pas-à-pas adapté à votre situation.",
    },
    {
      icon: Users,
      title: "Collectif protégé",
      description: "Juristes, soignants et proches solidaires.",
    },
    {
      icon: Globe,
      title: "Diffusion maîtrisée",
      description: "Dossiers prêts à être transmis aux autorités.",
    }
  ];

  const storyMarkers = [
    {
      label: "Étape 1",
      title: "Qui suis-je ?",
    },
    {
      label: "Étape 2",
      title: "Pourquoi ce site ?",
    },
    {
      label: "Étape 3",
      title: "Mon expérience",
    }
  ];

  const heroVideoFallback = "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4";
  const [heroVideoSrc, setHeroVideoSrc] = useState<string | null>(heroVideoFallback);

  useEffect(() => {
    const baseHref = typeof document !== "undefined" ? document.baseURI : import.meta.env.BASE_URL;
    try {
      const resolved = new URL(
        "LEMA_Glitch.mp4",
        baseHref
      ).toString();
      setHeroVideoSrc(resolved);
    } catch (error) {
      console.warn("Hero video path resolution failed, using fallback", error);
      setHeroVideoSrc(heroVideoFallback);
    }
  }, [heroVideoFallback]);

  const testimonySegments = [
    {
      id: "victime",
      label: "Victime",
      description: "Je témoigne pour être protégée.",
    },
    {
      id: "pro",
      label: "Professionnel",
      description: "Je partage un signalement médical ou juridique.",
    },
    {
      id: "media",
      label: "Journaliste",
      description: "Je transmets une information vérifiée.",
    }
  ];

  const testimonyChannels = [
    {
      id: "texte",
      label: "Texte prioritaire",
      detail: "Dépôt immédiat avec reçu chiffré.",
    },
    {
      id: "memo",
      label: "Mémo vocal",
      detail: "Nous organisons l'envoi audio sécurisé après dépôt.",
    },
    {
      id: "dossier",
      label: "Dossier PDF",
      detail: "Orientation vers un espace de fichiers à la demande.",
    }
  ];
  const handleSubmitTestimony = async () => {
    // Vérification des champs obligatoires
    if (!testimony.trim() || !consentChecked) {
      toast({
        title: "Champs requis",
        description: "Veuillez remplir tous les champs et accepter le consentement",
        variant: "destructive"
      });
      return;
    }

    // On affiche l'état de chargement
    setIsSubmittingTestimony(true);
    setEncryptionReceipt(null);

    try {
      // Ici tu mettras plus tard la logique d'envoi réel du témoignage
      // Pour l'instant : confirmation locale
      toast({
        title: "Témoignage envoyé",
        description: "Votre témoignage a bien été pris en compte.",
      });

      // Réinitialisation du formulaire
      setTestimony("");
      setConsentChecked(false);

    } catch (error) {
      console.error("Erreur lors de l'envoi du témoignage :", error);

      toast({
        title: "Erreur",
        description: "Une erreur est survenue. Veuillez réessayer.",
        variant: "destructive",
      });

    } finally {
      // Toujours remettre l'état à false, même en cas d’erreur
      setIsSubmittingTestimony(false);
    }
  };

  useEffect(() => {
    if (!heroVideoRef.current) return;

    const attemptPlay = async () => {
      try {
        await heroVideoRef.current?.play();
      } catch (error) {
        console.warn("Hero video autoplay prevented:", error);
      }
    };

    attemptPlay();
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const video = heroVideoRef.current;

    if (!video) return;

    const handleChange = () => {
      if (mediaQuery.matches) {
        video.pause();
        setIsHeroPaused(true);
      } else if (!isHeroPaused) {
        video.play().catch(error => console.warn("Hero video autoplay prevented:", error));
      }
    };

    handleChange();
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, [isHeroPaused]);

  useEffect(() => {
    const video = heroVideoRef.current;
    if (!video) return;

    const handleError = () => {
      if (hasHeroVideoError) return;
      setHasHeroVideoError(true);
      setHeroVideoSrc(heroVideoFallback);
      video.src = heroVideoFallback;
      video.load();
      video.play().catch(error => console.warn("Hero fallback video play prevented:", error));
    };

    video.addEventListener("error", handleError);
    return () => video.removeEventListener("error", handleError);
  }, [hasHeroVideoError, heroVideoFallback]);

  const toggleHeroVideo = () => {
    const video = heroVideoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play().catch(error => console.warn("Hero video play prevented:", error));
      setIsHeroPaused(false);
    } else {
      video.pause();
      setIsHeroPaused(true);
    }
  };

  const handleLoadMore = () => {
    setIsLoadingMore(true);
    // Simulate loading delay for better UX
    setTimeout(() => {
      setDisplayedTestimonials(prev => Math.min(prev + 3, filteredTestimonials.length));
      setIsLoadingMore(false);
    }, 600);
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newsletterEmail) {
      toast({
        variant: "destructive",
        title: "Email requis",
        description: "Veuillez entrer votre adresse email.",
      });
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newsletterEmail)) {
      toast({
        variant: "destructive",
        title: "Email invalide",
        description: "Veuillez entrer une adresse email valide.",
      });
      return;
    }

    setIsSubscribing(true);

    // Newsletter logic disabled (no Supabase)
    toast({
      title: "Merci !",
      description: "Merci pour votre inscription à la newsletter.",
    });

    setNewsletterEmail("");
    setIsSubscribing(false);
  };

  const filteredTestimonials = activeFilter === "Tous"
    ? testimonials
    : testimonials.filter(t => t.category === activeFilter);

  const visibleTestimonials = filteredTestimonials.slice(0, displayedTestimonials);
  const hasMoreTestimonials = displayedTestimonials < filteredTestimonials.length;
  return <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
  
    {/* Premium Header */}
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "glass bg-black/80" : "glass"}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-4">

             {/* Logo carré */}
            <div className="relative">
              <div className="flex items-center gap-1">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 border border-white/10 shadow-lg shadow-black/30">
                  <Scale className="h-6 w-6 text-[#E02B2B] transition-transform duration-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 translate-y-[1.5px]">
                    <span className="text-2xl font-bold font-libre baskerville tracking-tight text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)">Truth</span>
                    <div className="h-[2px] w-12 bg-gradient-to-r from-[#E02B2B] to-[#ff6868] rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 translate-y-[4px]" aria-label="Navigation principale">
            <button
              onClick={() => scrollToSection('accueil')}
              className="relative text-[#E0E0E0] hover:text-[#E02B2B] font-medium transition-all duration-300 group"
              aria-label="Aller à l'accueil"
            >
              Accueil
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E02B2B] transition-all duration-300 group-hover:w-full" />
            </button>
            <button
              onClick={() => scrollToSection('histoire')}
              className="relative text-[#E0E0E0] hover:text-[#E02B2B] font-medium transition-all duration-300 group"
              aria-label="Découvrir l'histoire"
            >
              Mon histoire
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E02B2B] transition-all duration-300 group-hover:w-full" />
            </button>

            <MegaMenuSInformer scrollToSection={scrollToSection} />
            <button
              onClick={() => scrollToSection('contact')}
              className="relative text-[#E0E0E0] font-medium transition-all duration-300 group"
              aria-label="Aller à la section contact"
            >
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#E02B2B] transition-all duration-300 group-hover:w-full" />
            </button>
          </nav>

          {/* Mobile Navigation */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6 text-muted-foreground" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-black/95 border-border/20">
              <SheetHeader>
                <SheetTitle className="text-left">
                  <div className="flex items-center space-x-2">
                    <Scale className="h-6 w-6 text-primary-red" />
                    <span className="text-xl font-bold">
                      <span className="text-gradient">Lema Clinic </span>
                      <span className="text-red-gradient">Truth</span>
                    </span>
                  </div>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col space-y-4 mt-8">
                <button onClick={() => {
                  scrollToSection('accueil');
                  setMobileMenuOpen(false);
                }} className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-300 font-medium">
                  Accueil
                </button>

                <button onClick={() => {
                  scrollToSection('histoire');
                  setMobileMenuOpen(false);
                }} className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-300 font-medium">
                  Mon histoire
                </button>

                <div className="px-4 py-2">
                  <div className="text-sm font-semibold text-muted-foreground mb-2">S'informer</div>
                  <button onClick={() => {
                    scrollToSection('victimes');
                    setMobileMenuOpen(false);
                  }} className="w-full text-left px-4 py-3 text-muted-foreground hover:text-primary-red hover:bg-accent/50 rounded-md transition-all duration-300">
                    Leurs méthodes
                  </button>
                  <button onClick={() => {
                    scrollToSection('temoignages');
                    setMobileMenuOpen(false);
                  }} className="w-full text-left px-4 py-3 text-muted-foreground hover:text-primary-red hover:bg-accent/50 rounded-md transition-all duration-300">
                    Témoignages
                  </button>
                  <Link to="/informer/questions-victimes" onClick={() => setMobileMenuOpen(false)} className="block px-4 py-3 text-muted-foreground hover:text-primary-red hover:bg-accent/50 rounded-md transition-all duration-300">
                    Vos questions importantes
                  </Link>
                </div>

                <button onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }} className="text-left px-4 py-3 text-muted-foreground hover:text-foreground hover:bg-accent/50 rounded-md transition-all duration-300 font-medium">
                  Contact
                </button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>

    {/* Hero Section – Cinematic video-ready canvas */}
    <section id="accueil" className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      <div className="relative w-full overflow-hidden min-h-screen">
        {/* Video background with showcase framing */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute inset-0 bg-[rgba(57,80,102,0.35)] shadow-[0_30px_90px_-40px_rgba(2,8,19,0.35)]" />
          <div className="absolute inset-0 ring-1 ring-inset ring-[rgba(255,255,255,0.08)]" />
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            ref={heroVideoRef}
            src="/Hero_Web_30p_Export.mp4"
            className="absolute inset-0 w-full h-full object-cover z-[1]"
            aria-label="Vidéo de fond illustrant la page d'accueil"
          >
            <source src={heroVideoSrc ?? undefined} type="video/mp4" />
          </video>
          <div className="pointer-events-none absolute inset-0 z-[2] bg-[linear-gradient(to_bottom,rgba(2,8,19,0.35),transparent_35%),linear-gradient(to_top,rgba(2,8,19,0.35),transparent_35%)]" />
        </div>

        {/* Overlay pour assombrir la vidéo */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.45),transparent_70%)] z-10 pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-20">
          <div className="relative z-10 max-w-6xl mx-auto px-8 lg:px-12 pt-32 md:pt-40 pb-24">
            <div className="absolute right-6 top-6 flex items-center gap-3 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-lg shadow-ink-soft">
              <span className="text-xs uppercase tracking-[0.3em] text-white/70">Vidéo</span>
              <button
                type="button"
                onClick={toggleHeroVideo}
                className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm font-medium text-white hover:bg-white/20 transition"
              >
                {isHeroPaused ? (
                  <>
                    <Play className="h-4 w-4" aria-hidden="true" />
                    Relancer
                  </>
                ) : (
                  <>
                    <Pause className="h-4 w-4" aria-hidden="true" />
                    Pause
                  </>
                )}
              </button>
            </div>

            <div className="relative">
              <div className="pt-10 md:pt-14">
                <div className="relative inline-flex items-center gap-4 rounded-full border border-white/10 bg-gradient-to-r from-[#E02B2B]/80 via-[#c22222]/75 to-[#8e1a1a]/80 px-5 py-2.5 text-base text-white shadow-[0_8px_20px_-8px_rgba(224,43,43,0.35)] backdrop-blur-md ring-1 ring-inset ring-black/20 transition">

                  {/* Glow propre sans halo violet */}
                  <span
                    className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-r from-[#E02B2B]/20 to-transparent blur-lg opacity-60" aria-hidden />

                  {/* Icône */}
                  <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-inset ring-white/10 border border-white/10 shadow-inner shadow-black/20">
                    <AlertTriangle className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <div className="relative flex flex-col sm:flex-row sm:items-center sm:gap-3 text-left">
                    <span className="text-sm font-semibold tracking-[0.3em] text-white/90 sm:text-base">ALERTE</span>
                    <span className="text-white/90 leading-snug">Révélations documentées sur les pratiques de la Lema Dental Clinic à Istanbul.</span>
                  </div>
                </div>

                <div className="mt-8 text-left">
                  <div className="relative max-w-3xl rounded-3xl border border-white/5 backdrop-blur-2xl bg-gradient-to-b from-[#213245]/92 to-[#0f1b29]/96 p-8 md:p-10 backdrop-blur-xl shadow-ink-elevated overflow-hidden">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(224,43,43,0.08),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(61,94,115,0.12),transparent_45%)]" aria-hidden />
                    <div className="pointer-events-none absolute inset-0 bg-white/[0.10s]" aria-hidden></div>
                    <div className="pointer-events-none absolute inset-x-6 top-10 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" aria-hidden />
                    <div className="space-y-6 relative z-10 px-10 py-8">
                      <div className="space-y-3">
                        <div className="flex flex-col">
                          <div className="text-2xl uppercase tracking-[0.32em] text-[#E02B2B] font-semibold leading-[1.15] mb-0.5">Lema Clinic</div>
                          <div className="flex items-center gap-2">
                            <span className="text-4xl sm:text-5xl md:text-6xl font-bold font-libre baskerville tracking-tight text-white/95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)">Truth</span>
                            <div className="h-[2px] w-16 bg-gradient-to-r from-[#E02B2B] to-[#ff5454] rounded-full" />
                          </div>
                        </div>

                        <p className="text-xl sm:text-2xl text-red-300/90">La vérité éclaire toujours.</p>
                      </div>
                      <p className="text-lg text-white/85 leading-relaxed">
                        Je suis une victime de la Lema Dental Clinic à Istanbul. Ce site rassemble des témoignages vérifiés et des éléments documentés pour protéger les patients, alerter les autorités et éviter que d’autres ne subissent les mêmes dérives.
                      </p>
                      <div className="flex flex-wrap items-center gap-4">
                        <Button
                          onClick={() => scrollToSection("histoire")}
                          className="group rounded-full px-8 py-3 text-base font-semibold text-white bg-gradient-to-r from-[#E02B2B] to-[#b51f1f] border border-[#E02B2B]/60 shadow-lg shadow-[#E02B2B]/30 hover:shadow-[#E02B2B]/50 hover:-translate-y-0.5 transition-all"
                        >
                          <span className="flex items-center gap-2">
                            Découvrir la vérité
                            <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1 group-hover:rotate-6" />
                          </span>
                        </Button>
                        <Button
                          variant="ghost"
                          onClick={() => scrollToSection("contact")}
                          className="rounded-full px-8 py-3 text-base font-medium border border-white/20 bg-white/10 text-white hover:text-white hover:bg-white/15 hover:border-white/40 backdrop-blur-md transition-all shadow-lg shadow-black/20"
                        >
                          Soutenir les victimes
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Section 2 – Parcours dédiés */}
    <section className="relative bg-[#020813] border-t border-[#3D5E73]/50" aria-label="Segments prioritaires">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(61,94,115,0.05),rgba(61,94,115,0.02))]" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(224,43,43,0.05),transparent_60%)] opacity-90" aria-hidden />
      <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#E02B2B]">Parcours guidés</p>
          <h2 className="mt-4 text-3xl lg:text-4xl font-semibold text-[#E3EBF3]">Choisissez le cadre qui correspond à votre rôle</h2>
          <p className="mt-4 text-[#CEDEF2]/90">
            Le collectif consolide des signalements réels : diagnostics modifiés, devis opaques et pressions psychologiques. Nous ne publions que des éléments sourcés et disponibles dans notre dossier.
          </p>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {heroSegments.map(segment => {
            const Icon = segment.icon;
            return (
              <div
                key={segment.id}
                className="rounded-2xl border border-white/10 bg-[#3D5E73]/80 p-6 shadow-lg shadow-black/30 backdrop-blur-[1px] transition-all duration-300 ease-out hover:-translate-y-[2px] hover:shadow-xl hover:shadow-black/40 hover:ring-1 hover:ring-[#3D5E73]/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs uppercase tracking-widest text-[#E02B2B] font-semibold">{segment.badge}</span>
                  <Icon className="h-6 w-6 text-[#E02B2B]" aria-hidden="true" />
                </div>
                <h3 className="text-2xl font-semibold text-white/95 mb-2">{segment.title}</h3>
                <p className="text-white/60 mb-6 leading-relaxed">{segment.description}</p>
                <Button
                  onClick={() => scrollToSection(segment.target)}
                  variant="secondary"
                  className="w-full group rounded-xl bg-[#D8E4EF] text-[#020813] border border-black/10 shadow-[0_12px_30px_rgba(0,0,0,0.25)] hover:bg-[#C7D6E2] hover:border-black/20 hover:shadow-[0_14px_34px_rgba(0,0,0,0.3)]"
                  aria-label={`Accéder à l'espace ${segment.id}`}
                >
                  <span className="flex items-center justify-center gap-2">
                    J'accède
                    <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </div>
            );
          })}
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {heroValueProps.map(prop => {
            const Icon = prop.icon;
            return (
              <div key={prop.title} className="flex items-center gap-3 rounded-2xl border border-white/5 bg-[#395066]/80 px-4 py-3 shadow-[0_8px_30px_rgba(0,0,0,0.2)] backdrop-blur">
                <Icon className="h-5 w-5 text-[#E02B2B]" aria-hidden="true" />
                <div>
                  <p className="text-sm font-semibold text-[#CEDEF2]">{prop.title}</p>
                  <p className="text-xs text-[#CEDEF2]/80">{prop.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

    {/* Séparateur spécial juste après le header */}
    <section className="bg-[#FAF9FF] py-0.5">
      <div className="section-divider-header"></div>
    </section>

    {/* My Story Section - Introduction */}
    <section
      id="histoire"
      className="relative py-section bg-[#FAF9FF] overflow-hidden"
    >
      {/* Gradient premium */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#CEDEF2]/15 to-[#EEF1F7]/60" />

      {/* CONTENU */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F1C] tracking-tight text-center font-libre baskerville">
            Mon Histoire
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded-full mx-auto mt-4" />
        </div>

        {/* Qui suis-je & Pourquoi ce site */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16 mt-10">
          <div className="rounded-[20px] p-8 bg-[linear-gradient(180deg,#395066_0%,#132029_100%)] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-[1px]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-primary-red to-dark-red rounded-xl mr-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#F7F9FB]">
                Qui suis-je ?
              </h3>
            </div>
            <div className="space-y-4 text-[#DDE7EE] leading-relaxed text-lg">
              <p>
                Je suis une patiente qui a fait confiance à la clinique{" "}
                <span className="text-primary-red font-semibold">Lema Dental</span> à Istanbul.
              </p>
              <p>
                Comme beaucoup, j'ai cru aux promesses d'un sourire parfait, à des soins modernes et à une équipe qualifiée.
              </p>
              <p>
                Mais derrière cette façade séduisante, j'ai découvert une tout autre réalité : celle d'une expérience marquée par la douleur, les manquements et le mépris.
              </p>
              <p>
                Je suis aujourd'hui une <span className="text-primary-red font-semibold">victime</span>, mais aussi une <span className="text-primary-red font-semibold">voix</span> — celle de toutes les personnes qui ont été trompées ou réduites au silence.
              </p>
            </div>
          </div>

          <div className="rounded-[20px] p-8 bg-[linear-gradient(180deg,#395066_0%,#132029_100%)] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-[1px]">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-gradient-to-br from-primary-red to-dark-red rounded-xl mr-4">
                <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-[#F7F9FB]">
                Pourquoi ce site ?
              </h3>
            </div>
            <div className="space-y-4 text-[#DDE7EE] leading-relaxed text-lg">
              <p>
                J'ai créé ce site pour révéler la vérité et prévenir d'autres victimes.
              </p>
              <p>
                Ce site n'est pas une vengeance : c'est une alerte citoyenne.
              </p>
              <p>
                Un espace de témoignage, d'enquête et de partage d'informations, construit avec rigueur.
              </p>
              <p>
                Mon objectif est simple : que plus personne ne se laisse séduire par des promesses mensongères, et que chaque patient retrouve son{" "}
                <span className="text-primary-red font-semibold">droit fondamental</span> à la transparence, au respect et à la dignité.
              </p>
            </div>
          </div>
        </div>

        {/* Mon expérience */}
        <div className="max-w-6xl mx-auto">
          <div className="rounded-[20px] p-8 bg-[linear-gradient(180deg,#395066_0%,#132029_100%)] border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.25)] backdrop-blur-[1px]">
            <h3 className="text-2xl font-semibold text-[#F7F9FB] mb-6">
              Mon expérience
            </h3>

            <div className="space-y-4 text-[#DDE7EE] leading-relaxed text-lg">
              <p>
                Comme beaucoup d'autres, j'ai été attiré par les promesses alléchantes de Lema Dental Clinic à Istanbul.
                Des soins dentaires de qualité à des prix attractifs, une équipe professionnelle, des installations modernes...
                La réalité s'est révélée bien différente.
              <span className="ml-2 inline-flex items-center relative group -translate-y-[2px]">
    <a
      href="/docs/preuve-01-devis-soins-11-2024.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-1
        px-2 py-0.5
        text-[11px] font-medium
        text-primary-red
        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur-sm
        hover:bg-white/10 hover:text-red-200
        transition
      "
    >
      📄 document source
    </a>

    {/* Tooltip premium */}
    <span
      className="
        absolute left-1/2 -translate-x-1/2 bottom-full mb-2
        hidden group-hover:block
        w-72
        rounded-lg
       bg-[linear-gradient(180deg,#395066_0%,#132029_50%)]
        p-3
        text-xs text-white
        shadow-xl
        z-20
      "
    >
      <strong className="block text-sm mb-1">Devis initial</strong>
     Document sur la base duquel j’ai accepté de me faire soigner en Turquie auprès de Lema Clinic.
Le contenu et le montant de ce devis avait été déterminants dans ma décision.
      <br />
      Document certifié original transmis avant mon déplacement (PDF).
    </span>
  </span>
</p>      
            
              <p>
                Une fois sur place, le cauchemar a commencé. Les diagnostics ont changé, les prix ont explosé,
                et les complications sont apparues rapidement. Les promesses se sont évaporées, et je me suis retrouvé
                piégé dans un système bien rodé, conçu pour maximiser les profits au détriment de la santé des patients.
                    <span className="ml-2 inline-flex items-center relative group -translate-y-[2px]">
    <a
      href="/docs/preuve-02-facture-finale-07-06-2025.pdf"
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex items-center gap-1
        px-2 py-0.5
        text-[11px] font-medium
        text-primary-red
        rounded-full
        bg-white/5
        border border-white/10
        backdrop-blur-sm
        hover:bg-white/10 hover:text-red-200
        transition
      "
    >
      📄 document source
    </a>

    {/* Tooltip premium */}
    <span
      className="
        absolute left-1/2 -translate-x-1/2 bottom-full mb-2
        hidden group-hover:block
        w-72
        rounded-lg
       bg-[linear-gradient(180deg,#395066_0%,#132029_50%)]
        p-3
        text-xs text-white
        shadow-xl
        z-20
      "
    >
      <strong className="block text-sm mb-1">Devis initial</strong>
     📄 Facture finale transmise le jour de mon arriver à la clinique Lema, présentant une augmentation de +50 % sur le prix proposé au départ.
      <br />
      Document certifié original (PDF).
    </span>
  </span>
</p> 

              <p>
                Aujourd'hui, je me bats pour exposer ces pratiques et aider d'autres victimes.
                Ce site est ma voix, et j'espère qu'il deviendra aussi la vôtre.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Elegant Section Divider */}
    <section className="bg-[#FAF9FF] py-0.5">
      <div className="section-divider"></div>
    </section>

    {/* Timeline Section */}
    <section
      id="victimes"
      className="relative py-section bg-[#FAF9FF] overflow-hidden"
    >
      {/* Gradient premium */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#CEDEF2]/15 to-[#EEF1F7]/60" />

      {/* CONTENU */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="max-w-5xl mx-auto text-center mb-20 space-y-5">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500 font-semibold text-center">Parcours dévoilé</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0F1C] tracking-tight text-center font-libre baskerville">Un système bien ficelé</h2>
          <div className="h-1 w-16 bg-red-600 rounded-full mx-auto mt-3" />
          <p className="text-xl lg:text-2xl text-[#132330]/90 leading-relaxed max-w-4xl mx-auto">
            Découvrez comment un système bien rodé transforme la confiance des patients en instrument de profit.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-sm text-[#0A0F1C]/80">
            <span className="px-4 py-2 rounded-full bg-white/40 border border-white/50 shadow-sm shadow-white/30">Processus structuré et répétitif</span>
            <span className="px-4 py-2 rounded-full bg-white/40 border border-white/50 shadow-sm shadow-white/30">Méthodes commerciales agressives</span>
            <span className="px-4 py-2 rounded-full bg-white/40 border border-white/50 shadow-sm shadow-white/30">Manipulation de la confiance</span>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] bg-white/20" aria-hidden="true" />
          <div className="absolute left-1/2 -translate-x-1/2 top-10 h-24 w-24 bg-[radial-gradient(circle_at_center,rgba(224,43,43,0.12),transparent_60%)] blur-3xl" aria-hidden />

          <div className="space-y-16">
            {timelineSteps.map((step, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={step.id}
                  className={`relative flex flex-col lg:flex-row items-center gap-10 ${isEven ? "lg:flex-row-reverse" : ""}`}
                >
                  <div className="flex-1 w-full">
                    <div className="relative overflow-hidden bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl shadow-xl border border-white/10 p-8 lg:p-12 text-white backdrop-blur-xl">
                      <div className="relative space-y-4">
                        <div className="inline-flex items-center justify-center gap-2 text-xs font-semibold tracking-[0.3em] uppercase text-white bg-white/10 rounded-full px-4 py-2 border border-white/20">
                          <span className="h-2 w-2 rounded-full bg-red-500" />
                          <span>{step.stepNumber}</span>
                        </div>
                        <h3 className="text-3xl lg:text-4xl font-bold text-
                        white">{step.cardTitle}</h3>
                        <p className="text-lg text-white/80 leading-relaxed 
                        mb-4">{step.cardDescription}</p>
                        <Button
                          type="button"
                          className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full px-6 py-3 shadow-lg hover:shadow-red-700/50 hover:scale-[1.02] transition flex items-center"
                          onClick={() => {
                            setOpenStep(step);
                          }}
                         >
                          Cliquer pour voir les détails
                          <ChevronRight className="ml-2 h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>

                  <div className="relative flex flex-col items-center" aria-hidden="true">
                    <div className="relative flex items-center justify-center w-12 h-12 bg-gradient-to-b from-red-600 to-red-400 text-white rounded-full shadow-xl font-semibold">
                      {index + 1}
                    </div>
                    {index !== timelineSteps.length - 1 && (
                      <div className="hidden lg:block w-[2px] flex-1 bg-white/20 mt-6" />
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>

    {/* Elegant Section Divider */}
    <section className="bg-[#FAF9FF] py-0.5">
      <div className="section-divider"></div>
    </section>

    {/* Témoignages des Victimes Section */}
    <section
      id="temoignages"
     className="relative py-section bg-[#FAF9FF] overflow-hidden"
    >
      {/* Gradient premium */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#CEDEF2]/15 to-[#EEF1F7]/60" />

      {/* CONTENU */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-[#0A0F1C] mb-6 font-libre baskerville tracking-tight">
            Témoignages des Victimes
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded-full mx-auto mb-6" />
          <p className="text-xl text-[#4C5A66] max-w-3xl mx-auto leading-relaxed">
            Extraits anonymisés de personnes ayant alerté sur les pratiques décrites.
          </p>
        </div>

        {/* Filtres */}
        <div className="flex justify-center items-center gap-4 mb-8 flex-wrap">
          {["Tous", "Complications", "Facturation"].map(filter => (
            <button
              key={filter}
              onClick={() => {
                setActiveFilter(filter);
                setDisplayedTestimonials(3); // Reset displayed count on filter change
              }}
              className={`px-6 py-2.5 rounded-full font-semibold transition-all duration-300 border ${activeFilter === filter
                ? "bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg shadow-red-700/30 border-red-600"
                : "bg-white/80 text-[#0A0F1C] border-white/60 backdrop-blur hover:border-red-400/60 hover:shadow-md hover:shadow-red-200"
                }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Compteur */}
        <p className="text-center text-[#4C5A66]/80 mb-12">
          {filteredTestimonials.length} témoignage{filteredTestimonials.length > 1 ? 's' : ''} disponible{filteredTestimonials.length > 1 ? 's' : ''}.
        </p>

        {/* Cartes de témoignages */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {visibleTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>

        {/* Load More Button */}
        {hasMoreTestimonials && (
          <div className="flex justify-center mb-8">
            <Button
              onClick={handleLoadMore}
              disabled={isLoadingMore}
              className="bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-red-700/50 hover:scale-[1.02] transition group"
            >
              {isLoadingMore ? (
                <>
                  <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                  Chargement...
                </>
              ) : (
                <>
                  Charger plus de témoignages
                  <ChevronDown className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-1" />
                </>
              )}
            </Button>
          </div>
        )}

        {/* Footer note */}
        <div className="text-center">
          <p className="text-[#4C5A66]/80 italic mb-2">
            Tous les témoignages sont anonymisés et vérifiés avant publication
          </p>
          <p className="text-sm text-[#4C5A66]/70">
            {displayedTestimonials} sur {filteredTestimonials.length} témoignages affichés
          </p>
        </div>
      </div>
    </section>

    {/* Elegant Section Divider */}
    <section className="bg-[#FAF9FF] py-0.5">
      <div className="section-divider"></div>
    </section>

    {/* Section Témoignage Anonyme */}
    <section
      id="contact"
      className="relative py-section bg-[#FAF9FF] overflow-hidden"
    >
      {/* Gradient premium */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#CEDEF2]/15 to-[#EEF1F7]/60" />

      {/* CONTENU */}
      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.35em] text-red-500 font-semibold mb-4">Confidentiel</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#050C17] tracking-tight text-center font-libre baskerville">
            Témoignage Anonyme
          </h2>
          <div className="h-1 w-16 bg-red-600 rounded-full mx-auto mt-4" />
          <p className="text-lg md:text-xl text-[#1A2433]/80 leading-relaxed mt-6">
            Partagez votre expérience de manière anonyme et sécurisée. Votre identité est protégée.
          </p>
        </div>

        {/* Container principal */}
        <div className="bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-8 lg:p-12 border border-white/10 shadow-xl backdrop-blur text-white">
          <div className="bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-6 mb-8 border border-white/10 shadow-lg">
            <div className="flex items-start gap-4">
              <Shield className="h-6 w-6 text-red-500 flex-shrink-0 mt-1" />
              <p className="text-white/90 leading-relaxed">
                Tous les témoignages sont traités dans un espace isolé. Nous ne conservons pas les adresses IP dans nos exports et chaque dépôt génère un reçu chiffré.
              </p>
            </div>
          </div>

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Qui témoigne ?</p>
            <div className="grid gap-3 md:grid-cols-3">
              {testimonySegments.map(segment => (
                <button
                  key={segment.id}
                  onClick={() => setTestimonySegment(segment.id)}
                  className={`group text-left rounded-2xl border border-white/12 bg-gradient-to-b from-[#334E60]/95 via-[#2B4255]/95 to-[#1f2f3d]/95 p-5 md:p-6 backdrop-blur-[1px] shadow-lg shadow-black/30 transition-all duration-200 ease-out ${testimonySegment === segment.id ? "border-[#E02B2B]/80 ring-1 ring-[#E02B2B]/35 shadow-xl shadow-black/40" : "hover:-translate-y-[2px] hover:shadow-xl hover:shadow-black/40 hover:ring-1 hover:ring-[#E02B2B]/22 hover:border-white/20"}`}
                >
                  <p className="text-xl font-semibold text-[#F5F6F7] tracking-tight drop-shadow-sm">{segment.label}</p>
                  <p className="text-sm text-[#D8E4EF]/90 mt-2 leading-relaxed">{segment.description}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <label htmlFor="testimony" className="block text-white font-semibold mb-3 text-lg">
              Votre témoignage
            </label>
            <textarea
              id="testimony"
              value={testimony}
              onChange={e => setTestimony(e.target.value)}
              placeholder="Partagez votre histoire… (Tous les témoignages sont entièrement anonymes)"
              className="w-full min-h-[250px] bg-white/5 border border-white/15 rounded-2xl p-4 text-white placeholder:text-white/60 focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-500/30 transition-all duration-300 resize-y shadow-inner"
            />
          </div>

          <div className="mb-8">
            <p className="text-sm uppercase tracking-[0.3em] text-white/70 mb-4">Canal de dépôt</p>
            <div className="grid gap-3 md:grid-cols-3">
              {testimonyChannels.map(channel => (
                <button
                  key={channel.id}
                  onClick={() => setTestimonyChannel(channel.id)}
                  className={`group text-left rounded-2xl border border-white/12 bg-gradient-to-b from-[#334E60]/95 via-[#2B4255]/95 to-[#1f2f3d]/95 p-5 backdrop-blur-[1px] shadow-lg shadow-black/30 transition-all duration-200 ease-out ${testimonyChannel === channel.id ? "border-[#E02B2B]/80 ring-1 ring-[#E02B2B]/35 shadow-xl shadow-black/40" : "hover:-translate-y-[2px] hover:shadow-xl hover:shadow-black/40 hover:ring-1 hover:ring-[#E02B2B]/22 hover:border-white/20"}`}
                >
                  <p className="font-semibold text-[#F5F6F7]">{channel.label}</p>
                  <p className="text-xs text-[#D8E4EF]/90 mt-1">{channel.detail}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-6 mb-8 border border-white/10 shadow-lg">
            <div className="flex items-start gap-4">
              <button onClick={() => setConsentChecked(!consentChecked)} className="flex-shrink-0 mt-0.5">
                <div className={`w-6 h-6 rounded-md border-2 flex items-center justify-center transition-all duration-300 ${consentChecked ? "bg-red-600 border-red-600 shadow-red-700/40 shadow" : "border-white/40 hover:border-red-500"}`}>
                  {consentChecked && (
                    <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </div>
              </button>
              <div>
                <p className="text-white font-medium mb-2">
                  Je comprends que mon témoignage sera anonymisé et stocké de façon chiffrée.
                </p>
                <p className="text-white/80 text-sm leading-relaxed">
                  Nous supprimons tout identifiant technique (IP, agent utilisateur) et appliquons un hachage salé avant archivage.
                </p>
              </div>
            </div>
          </div>

          {encryptionReceipt && (
            <div className="mb-6 rounded-2xl border border-white/15 bg-white/5 backdrop-blur p-4 text-sm text-white shadow-inner">
              <p className="font-semibold text-white mb-1 flex items-center gap-2">
                <KeyRound className="h-4 w-4 text-red-500" />
                Accusé de réception sécurisé
              </p>
              <p>
                Code de suivi : <span className="font-mono text-white">{encryptionReceipt}</span>
              </p>
            </div>
          )}

          <button
            onClick={handleSubmitTestimony}
            disabled={!testimony.trim() || !consentChecked || isSubmittingTestimony}
            className="w-full bg-gradient-to-r from-red-600 to-red-700 text-white font-bold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-red-700/30 hover:shadow-red-700/50 hover:scale-[1.02]"
          >
            {isSubmittingTestimony ? <Loader2 className="h-5 w-5 animate-spin" /> : <Lock className="h-5 w-5" />}
            {isSubmittingTestimony ? "Chiffrement en cours..." : "Envoyer anonymement"}
          </button>

          <div className="mt-6 grid gap-4 md:grid-cols-2 text-sm text-white/85">
            <div className="flex items-start gap-3">
              <Fingerprint className="h-5 w-5 text-red-500 mt-0.5" />
              <p>Les métadonnées réseau sont supprimées de nos archives partagées. Nous conservons uniquement le contenu nécessaire au suivi.</p>
            </div>
            <div className="flex items-start gap-3">
              <KeyRound className="h-5 w-5 text-red-500 mt-0.5" />
              <p>Chaque dépôt génère un reçu chiffré que vous pouvez partager à votre avocat.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Elegant Section Divider */}
    <section className="bg-[#FAF9FF] py-0.5">
      <div className="section-divider"></div>
    </section>

    {/* Section RGPD + Contact alignée */}
    <section
      id="Témoignage Anonyme"
      className="relative py-section bg-[#FAF9FF] overflow-hidden"
    >
      {/* Gradient premium */}
      <div
        className="absolute inset-0 z-0 bg-gradient-to-b from-[#CEDEF2]/15 to-[#EEF1F7]/60" />

      {/* CONTENU */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-14 items-stretch h-full">
          {/* Bloc RGPD compact */}
          <div className="space-y-10 h-full flex flex-col">
            <div className="text-center lg:text-left max-w-3xl">
              <div className="flex items-center justify-center lg:justify-start gap-2 mb-4">
                <AlertTriangle className="h-4 w-4 text-primary-red" />
                <span className="text-primary-red font-semibold tracking-[0.35em] text-xs uppercase">Transparence RGPD</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#050C17] tracking-tight font-libre baskerville">Vos données, vos droits</h2>
              <div className="h-1 w-16 bg-red-600 rounded-full mt-4 mb-6 mx-auto lg:mx-0" />
              <p className="text-lg text-slate-700 leading-relaxed">
                Nous respectons le Règlement Général sur la Protection des Données (RGPD) et détaillons clairement la finalité de chaque collecte.
              </p>
            </div>

            <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-stretch">
              <div className="h-full flex flex-col bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur text-white">
                <ShieldCheck className="h-10 w-10 text-red-400 mb-6" />
                <h3 className="text-lg font-bold mb-3">Chiffrement de bout en bout</h3>
                <p className="text-white/80 leading-relaxed">
                  Les données envoyées via nos formulaires transitent par HTTPS et sont stockées dans un espace chiffré au sein de Supabase.
                </p>
              </div>
              <div className="h-full flex flex-col bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur text-white">
                <FileText className="h-10 w-10 text-red-400 mb-6" />
                <h3 className="text-lg font-bold mb-3">Consentement explicite</h3>
                <p className="text-white/80 leading-relaxed">
                  Nous recueillons uniquement les informations nécessaires à votre demande et vous pouvez retirer votre consentement à tout moment.
                </p>
              </div>
              <div className="h-full flex flex-col bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur text-white md:col-span-2 xl:col-span-1">
                <Lock className="h-10 w-10 text-red-400 mb-6" />
                <h3 className="text-lg font-bold mb-3">Conservation limitée</h3>
                <p className="text-white/80 leading-relaxed">
                  Les messages sont conservés uniquement le temps nécessaire à l'accompagnement, sauf obligation légale contraire.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-6 items-stretch">
              <div className="h-full flex flex-col bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur text-white">
                <h3 className="text-lg font-bold mb-6">Vos droits à tout moment</h3>
                <div className="space-y-5 text-white/85">
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Accéder à vos données :</span> écrivez-nous via le formulaire de contact en précisant l'email utilisé.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Rectifier ou supprimer :</span> nous traitons les demandes au plus vite, avec priorité donnée aux situations urgentes.
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="text-red-400 font-bold mt-1">•</span>
                    <p>
                      <span className="text-white font-semibold">Obtenir une copie :</span> les exports sont fournis dans un format ouvert (.json) signé pour garantir leur intégrité.
                    </p>
                  </div>
                </div>
              </div>

              <div className="h-full flex flex-col bg-gradient-to-b from-[#213245] to-[#0f1b29] rounded-2xl p-8 border border-white/10 shadow-xl backdrop-blur text-white">
                <h3 className="text-lg font-bold mb-4">Notre API sécurisée</h3>
                <p className="text-white/80 leading-relaxed mb-6">
                  Les formulaires utilisent une fonction Supabase Edge. Chaque témoignage est haché, consigné puis isolé dans un coffre-fort numérique, ce qui permet de tracer les dépôts sans exposer l'identité des témoins.
                </p>
                <div className="bg-white/5 rounded-xl p-4 border border-white/15">
                  <p className="text-sm text-white/80 font-mono">
                    Journalisation: hash SHA-256 + reçu public · Transmission: HTTPS Supabase.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bloc Contact aligné */}
          <div className="relative flex flex-col h-full self-stretch">
            <div className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,#FFFFFF0C,transparent_70%)]" />
            <div className="relative z-10">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Séparateur spécial juste après le header */}
    <section className="bg-[#FAF9FF] py-0.5">
      <div className="section-divider-header"></div>
    </section>

    {/* Footer Enrichi */}
    <footer className="relative overflow-hidden bg-gradient-to-b from-[#213245] to-[#0f1b29] text-white py-section border-t border-white/10">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-12">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 shadow-lg shadow-black/30">
              <Scale className="h-6 w-6 text-[#E02B2B] transition-transform duration-300" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.26em] text-[#E02B2B] font-semibold">Lema Clinic</div>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold font-libre baskerville tracking-tight">Truth</span>
                <div className="h-0.5 w-12 bg-gradient-to-r from-[#E02B2B] to-[#ff5454] rounded-full" />
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Grid */}
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-12 mb-14 items-start">
          {/* Brand Section */}
          <div className="space-y-6">
            <p className="text-slate-200/80 text-sm leading-relaxed">
              Un mouvement déterminé pour la vérité, la justice et la protection des patients face aux abus médicaux.
            </p>

            {/* Security Badges */}
            <div className="flex flex-wrap gap-3">
              <div className="rounded-xl px-3.5 py-1.5 border border-white/10 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 flex items-center gap-2 transition hover:bg-white/15">
                <Shield className="h-4 w-4 text-[#E02B2B] drop-shadow-[0_0_4px_rgba(224,43,43,0.4)]" />
                <span className="text-[11px] tracking-wide font-medium text-white/90">Données sécurisées</span>
              </div>
              <div className="rounded-xl px-3.5 py-1.5 border border-white/10 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 flex items-center gap-2 transition hover:bg-white/15">
                <Lock className="h-4 w-4 text-[#E02B2B] drop-shadow-[0_0_4px_rgba(224,43,43,0.4)]" />
                <span className="text-[11px] tracking-wide font-medium text-white/90">SSL Crypté</span>
              </div>
              <div className="rounded-xl px-3.5 py-1.5 border border-white/10 bg-white/10 backdrop-blur-md shadow-lg shadow-black/20 flex items-center gap-2 transition hover:bg-white/15">
                <FileCheck className="h-4 w-4 text-[#E02B2B] drop-shadow-[0_0_4px_rgba(224,43,43,0.4)]" />
                <span className="text-[11px] tracking-wide font-medium text-white/90">RGPD Conforme</span>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-center space-x-3">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-[1px]" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-[1px]" aria-label="Twitter">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.924 4.924 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-[1px]" aria-label="LinkedIn">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-200/80 hover:text-white hover:bg-white/10 transition-all duration-200 hover:-translate-y-[1px]" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#E02B2B] font-semibold mb-3">Navigation</h3>
            <div className="h-0.5 w-12 bg-white/20 mb-5 rounded-full" />
            <ul className="space-y-3 text-base text-slate-200/80">
              <li><button onClick={() => scrollToSection("histoire")} className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Mon histoire</button></li>
              <li><button onClick={() => scrollToSection("victimes")} className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Leurs méthodes</button></li>
              <li><button onClick={() => scrollToSection("temoignages")} className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Témoignages</button></li>
              <li><button onClick={() => scrollToSection("support")} className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Soutenir</button></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#E02B2B] font-semibold mb-3">Légal</h3>
            <div className="h-0.5 w-12 bg-white/20 mb-5 rounded-full" />
            <ul className="space-y-3 text-base text-slate-200/80">
              <li><Link to="/mentions-legales" className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Mentions légales</Link></li>
              <li><Link to="/politique-confidentialite" className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Confidentialité</Link></li>
              <li><Link to="/conditions-utilisation" className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Conditions</Link></li>
              <li><a href="#" className="inline-flex items-center gap-2 hover:text-white transition-all duration-200 hover:translate-x-1">Cookies</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm uppercase tracking-[0.16em] text-[#E02B2B] font-semibold mb-3">Newsletter</h3>
            <div className="h-0.5 w-12 bg-white/20 mb-5 rounded-full" />
            <p className="text-slate-200/80 mb-4 text-sm leading-relaxed">Restez informé des dernières actualités.</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input
                type="email"
                placeholder="Votre email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                disabled={isSubscribing}
                className="w-full px-4 py-3 bg-white/8 border border-white/15 rounded-lg text-white placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-[#E02B2B]/40 focus:border-[#E02B2B] backdrop-blur-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <Button
                type="submit"
                disabled={isSubscribing}
                className="w-full bg-gradient-to-r from-[#E02B2B] to-[#b51f1f] text-white rounded-full shadow-lg shadow-[#E02B2B]/30 hover:shadow-[#E02B2B]/50 hover:scale-[1.02] transition-transform duration-300"
              >
                {isSubscribing ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Inscription en cours...
                  </>
                ) : (
                  <>
                    S'inscrire<Mail className="ml-2 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
            <p className="text-xs text-slate-300 mt-3">Données protégées RGPD</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="relative mt-10 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="absolute -top-0.5 left-1/2 -translate-x-1/2 h-1 w-16 bg-gradient-to-r from-[#E02B2B] via-[#ff5b5b] to-[#E02B2B] rounded-full blur-[2px]" />
          <p className="text-slate-300 text-sm">&copy; 2024 Lema Clinic Truth. Tous droits réservés.</p>
          <div className="flex items-center gap-2 text-slate-300 text-sm">
            <Heart className="h-4 w-4 text-[#E02B2B]" />
            <span>Fait avec passion pour la vérité et la justice</span>
          </div>
        </div>
      </div>
    </footer>
    <TimelineModalSimple
      activeStep={openStep}
      onClose={() => setOpenStep(null)}
    />

  </div>;
};

export default Index;
