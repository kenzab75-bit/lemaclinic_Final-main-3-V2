import { Link } from "react-router-dom";
import { Scale, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const MentionsLegales = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-black to-background">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
          <Link to="/" className="flex items-center gap-1 group w-fit">

            {/* Logo carré comme dans le footer */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/5 border border-white/10 shadow-lg shadow-black/30">
              <Scale className="h-6 w-6 text-[#E02B2B] transition-transform duration-300 group-hover:scale-110" />
            </div>

            {/* Nom de la marque identique au footer */}
            <div className="flex items-center gap-2 translate-y-[1.5px]">
              <span className="text-2xl font-bold font-libre baskerville tracking-tight text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]">
                Truth
              </span>

              {/* Trait rouge premium (optionnel mais cohérent) */}
              <div className="h-[2px] w-10 bg-gradient-to-r from-[#E02B2B] to-[#ff6868] rounded-full" />
            </div>

          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-24 pb-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/">
            <Button variant="ghost" className="mb-8 group">
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-3" />
              Retour à l'accueil
            </Button>
          </Link>

          {/* Page Title */}
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-bold font-libre bakerville mb-4 bg-gradient-to-r from-white via-white to-primary-red bg-clip-text text-transparent">
              Mentions Légales
            </h1>
            <p className="text-primary-red/90 text-lg">
              Informations légales relatives au site Lema Clinic Truth
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Éditeur du site */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">1. Éditeur du site</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
                <p className="text-white/90">
                  <span className="font-semibold text-white/90">Nom du site :</span> Lema Clinic Truth
                </p>
                <p className="text-foreground">
                  <span className="font-semibold text-white/90">Responsable de publication :</span> [À compléter]
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-white/90">Adresse :</span> [À compléter]
                </p>
                <p className="text-white/90">
                  <span className="font-semibold text-white/90">Email :</span> contact@lemaclinic-truth.com
                </p>
              </div>
            </section>

            {/* Hébergement */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">2. Hébergement</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
                <p className="text-white/90">
                  <span className="font-semibold text-white/90">Hébergeur :</span> OVH
                </p>
                <p className="text-foreground">
                  Le site est hébergé sur la plateforme OVH, qui assure la disponibilité et la sécurité de l'infrastructure technique.
                </p>
              </div>
            </section>

            {/* Propriété intellectuelle */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">3. Propriété intellectuelle</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  L'ensemble du contenu présent sur ce site (textes, images, logos, graphismes, vidéos) est protégé par les lois en vigueur sur la propriété intellectuelle.
                </p>
                <p className="text-white/90">
                  Toute reproduction, distribution, modification ou exploitation, totale ou partielle, du contenu du site est strictement interdite sans l'autorisation préalable écrite de LemaClinic Truth.
                </p>
                <p className="text-white/90">
                  Les marques, logos et signes distinctifs reproduits sur ce site sont la propriété de leurs titulaires respectifs.
                </p>
              </div>
            </section>

            {/* Protection des données personnelles */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">4. Protection des données personnelles</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés, vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.
                </p>
                <p className="text-white/90">
                  Les données collectées via les formulaires de contact ou de témoignage sont traitées avec la plus stricte confidentialité et ne sont utilisées que dans le cadre de la mission de LemaClinic Truth.
                </p>
                <p className="text-white/90">
                  Pour exercer vos droits, vous pouvez nous contacter à l'adresse : contact@lemaclinic-truth.com
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">5. Cookies</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Ce site peut utiliser des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent pas de données personnelles identifiables.
                </p>
                <p className="text-white/90">
                  Vous pouvez à tout moment désactiver les cookies via les paramètres de votre navigateur. Cependant, cela peut affecter certaines fonctionnalités du site.
                </p>
              </div>
            </section>

            {/* Responsabilité */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">6. Limitation de responsabilité</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  LemaClinic Truth s'efforce d'assurer l'exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, nous ne pouvons garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition.
                </p>
                <p className="text-white/90">
                  LemaClinic Truth ne saurait être tenu responsable des dommages directs ou indirects résultant de l'utilisation du site ou de l'impossibilité d'y accéder.
                </p>
                <p className="text-white/90">
                  Les liens hypertextes présents sur ce site peuvent renvoyer vers des sites externes. Lema Clinic Truth n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.
                </p>
              </div>
            </section>

            {/* Droit applicable */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">7. Droit applicable</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Les présentes mentions légales sont régies par le droit français. Tout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français.
                </p>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">8. Contact</h2>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Pour toute question concernant ces mentions légales ou le site en général, vous pouvez nous contacter :
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                  <li>Par email : contact@lemaclinic-truth.com</li>
                  <li>Via le formulaire de contact disponible sur le site</li>
                </ul>
              </div>
            </section>

            {/* Date de mise à jour */}
            <section>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6">
                <p className="text-white/90 text-sm italic">
                  Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
              </div>
            </section>
          </div>

          {/* Back to Top Button */}
          <div className="mt-12 text-center">
            <Link to="/">
              <Button className="btn-premium px-8 py-3 rounded-lg font-bold text-white">
                Retour à l'accueil
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-white/90 text-sm">
            &copy; 2024 Lema Clinic Truth. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default MentionsLegales;
