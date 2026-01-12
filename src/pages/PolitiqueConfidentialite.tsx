import { Link } from "react-router-dom";
import { Scale, ArrowLeft, Shield, Lock, Eye, Database, UserX, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const PolitiqueConfidentialite = () => {
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
              <ArrowLeft className="mr-2 h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Retour à l'accueil
            </Button>
          </Link>

          {/* Page Title */}
          <div className="mb-12">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="h-12 w-12 text-white" />
              <h1 className="text-4xl md:text-5xl font-bold font-libre bakerville text-white/90 bg-clip-text text-transparent">
                Politique de Confidentialité
              </h1>
            </div>
            <p className="text-primary-red/90 text-lg">
              Protection et traitement de vos données personnelles
            </p>
          </div>

          {/* Introduction */}
          <div className="mb-12 bg-primary-red/10 border border-primary-red/30 rounded-lg p-6">
            <p className="text-foreground leading-relaxed">
              Lema Clinic Truth s'engage à protéger votre vie privée et vos données personnelles. Cette politique de confidentialité vous informe sur la manière dont nous collectons, utilisons, stockons et protégeons vos informations conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi Informatique et Libertés.
            </p>
          </div>

          {/* Content Sections */}
          <div className="space-y-12">
            {/* Responsable du traitement */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">1. Responsable du traitement des données</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-3">
                <p className="text-white/90">
                  Le responsable du traitement des données personnelles collectées sur ce site est :
                </p>
                <div className="ml-4 space-y-2 text-white/90">
                  <p><span className="font-semibold text-foreground">Organisme :</span> Lema Clinic Truth</p>
                  <p><span className="font-semibold text-foreground">Email :</span> contact@lemaclinic-truth.com</p>
                  <p><span className="font-semibold text-foreground">Adresse :</span> [À compléter]</p>
                </div>
              </div>
            </section>

            {/* Données collectées */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">2. Données personnelles collectées</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Nous collectons uniquement les données nécessaires au fonctionnement de notre mission. Les informations collectées peuvent inclure :
                </p>

                <div className="space-y-4 ml-4">
                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Données d'identification :</h3>
                    <ul className="list-disc list-inside text-white/90 space-y-1 ml-4">
                      <li>Nom et prénom</li>
                      <li>Adresse email</li>
                      <li>Numéro de téléphone (optionnel)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Données de témoignage :</h3>
                    <ul className="list-disc list-inside text-white/90 space-y-1 ml-4">
                      <li>Contenu du témoignage</li>
                      <li>Informations relatives à votre expérience</li>
                      <li>Documents justificatifs (si fournis volontairement)</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-semibold text-foreground mb-2">Données techniques :</h3>
                    <ul className="list-disc list-inside text-white/90 space-y-1 ml-4">
                      <li>Adresse IP</li>
                      <li>Type de navigateur</li>
                      <li>Pages visitées et durée de visite</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Finalités du traitement */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">3. Finalités du traitement</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Vos données personnelles sont collectées et traitées pour les finalités suivantes :
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                  <li>Recueillir et traiter les témoignages de victimes avec confidentialité</li>
                  <li>Répondre à vos demandes de contact</li>
                  <li>Vous tenir informé de l'avancement de notre mission (avec votre consentement)</li>
                  <li>Améliorer l'expérience utilisateur sur notre site</li>
                  <li>Respecter nos obligations légales</li>
                  <li>Constituer des dossiers dans le cadre de démarches juridiques</li>
                </ul>
              </div>
            </section>

            {/* Base légale */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">4. Base légale du traitement</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Le traitement de vos données repose sur les bases légales suivantes :
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                  <li><span className="font-semibold text-foreground">Consentement :</span> Pour l'envoi de communications et le traitement des témoignages</li>
                  <li><span className="font-semibold text-foreground">Intérêt légitime :</span> Pour la défense des droits des patients et la recherche de vérité</li>
                  <li><span className="font-semibold text-foreground">Obligation légale :</span> Pour la conservation de certaines données dans le cadre de procédures judiciaires</li>
                </ul>
              </div>
            </section>

            {/* Conservation des données */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Database className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">5. Durée de conservation</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Vos données personnelles sont conservées pendant la durée nécessaire aux finalités pour lesquelles elles ont été collectées :
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                  <li>Témoignages : conservés jusqu'à résolution complète des affaires concernées ou sur demande de suppression</li>
                  <li>Données de contact : 3 ans à compter du dernier contact</li>
                  <li>Données techniques : 13 mois maximum</li>
                  <li>Documents juridiques : durée prescrite par la loi (généralement 5 à 10 ans selon les cas)</li>
                </ul>
              </div>
            </section>

            {/* Partage des données */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">6. Partage et destinataires des données</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Vos données personnelles sont traitées avec la plus stricte confidentialité. Elles peuvent être partagées uniquement avec :
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                  <li>Les avocats et conseils juridiques dans le cadre de procédures légales</li>
                  <li>Les autorités compétentes sur réquisition judiciaire</li>
                  <li>Les prestataires techniques assurant l'hébergement sécurisé (sous contrat de confidentialité)</li>
                </ul>
                <div className="bg-primary-red/10 border border-primary-red/30 rounded p-4 mt-4">
                  <p className="text-foreground font-semibold">
                    Nous ne vendons jamais vos données personnelles à des tiers.
                  </p>
                </div>
              </div>
            </section>

            {/* Vos droits */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <UserX className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">7. Vos droits</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Conformément au RGPD, vous disposez des droits suivants concernant vos données personnelles :
                </p>
                <div className="space-y-3 ml-4">
                  <div>
                    <h3 className="font-semibold text-foreground">Droit d'accès</h3>
                    <p className="text-white/90">Vous pouvez demander une copie de toutes vos données personnelles que nous détenons.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Droit de rectification</h3>
                    <p className="text-white/90">Vous pouvez demander la correction de données inexactes ou incomplètes.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Droit à l'effacement</h3>
                    <p className="text-white/90">Vous pouvez demander la suppression de vos données dans certaines conditions.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Droit à la limitation du traitement</h3>
                    <p className="text-white/90">Vous pouvez demander la suspension du traitement de vos données.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Droit à la portabilité</h3>
                    <p className="text-white/90">Vous pouvez recevoir vos données dans un format structuré et lisible.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Droit d'opposition</h3>
                    <p className="text-white/90">Vous pouvez vous opposer au traitement de vos données pour des raisons légitimes.</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Droit de retirer votre consentement</h3>
                    <p className="text-white/90">Vous pouvez retirer votre consentement à tout moment.</p>
                  </div>
                </div>
                <div className="bg-card/30 border border-border rounded p-4 mt-4">
                  <p className="text-foreground">
                    <span className="font-semibold">Pour exercer vos droits :</span> Contactez-nous à <span className="text-primary-red">contact@lemaclinic-truth.com</span> avec une preuve d'identité. Nous vous répondrons dans un délai d'un mois maximum.
                  </p>
                </div>
              </div>
            </section>

            {/* Sécurité */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Lock className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">8. Sécurité des données</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Nous mettons en œuvre des mesures techniques et organisationnelles appropriées pour protéger vos données personnelles contre :
                </p>
                <ul className="list-disc list-inside text-white/90 space-y-2 ml-4">
                  <li>L'accès non autorisé</li>
                  <li>La divulgation, la modification ou la destruction</li>
                  <li>La perte accidentelle</li>
                </ul>
                <p className="text-white/90">
                  Nos mesures incluent le chiffrement des données sensibles, des accès sécurisés, des sauvegardes régulières et une formation de notre équipe aux bonnes pratiques de sécurité.
                </p>
              </div>
            </section>

            {/* Cookies */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">9. Cookies et technologies similaires</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Notre site utilise des cookies techniques nécessaires à son bon fonctionnement. Ces cookies ne collectent pas de données personnelles identifiables et ne sont pas utilisés à des fins publicitaires.
                </p>
                <p className="text-white/90">
                  Vous pouvez gérer vos préférences en matière de cookies via les paramètres de votre navigateur.
                </p>
              </div>
            </section>

            {/* Modifications */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <FileCheck className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">10. Modifications de la politique</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                </p>
                <p className="text-white/90">
                  Nous vous encourageons à consulter régulièrement cette page pour rester informé de nos pratiques en matière de protection des données.
                </p>
              </div>
            </section>

            {/* Contact et réclamation */}
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Shield className="h-6 w-6 text-primary-red" />
                <h2 className="text-2xl font-bold text-foreground">11. Contact et réclamation</h2>
              </div>
              <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-6 space-y-4">
                <p className="text-white/90">
                  Pour toute question concernant cette politique de confidentialité ou le traitement de vos données personnelles :
                </p>
                <div className="ml-4 space-y-2 text-white/90">
                  <p><span className="font-semibold text-foreground">Email :</span> contact@lemaclinic-truth.com</p>
                  <p><span className="font-semibold text-foreground">Courrier :</span> [Adresse à compléter]</p>
                </div>
                <div className="bg-primary-red/10 border border-primary-red/30 rounded p-4 mt-4">
                  <p className="text-White">
                    <span className="font-semibold">Droit de réclamation :</span> Si vous estimez que vos droits ne sont pas respectés, vous pouvez introduire une réclamation auprès de la CNIL (Commission Nationale de l'Informatique et des Libertés) à l'adresse <span className="text-primary-red">www.cnil.fr</span>
                  </p>
                </div>
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
            &copy; 2024 LemaClinic Truth. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default PolitiqueConfidentialite;
