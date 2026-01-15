export interface Testimonial {
  id: number;
  category: "Complications" | "Autre" | "Facturation";
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    category: "Complications",
    quote: "Après mon intervention, j'ai souffert de complications que la clinique n'a jamais voulu prendre en charge.",
    author: "Patient Anonyme",
    location: "France"
  },
  {
    id: 2,
    category: "Autre",
    quote: "La clinique a menti sur mon diagnostic pour justifier des procédures inutiles qui m'ont laissé dans un état pire.",
    author: "Marie S.",
    location: "Suisse"
  },
  {
    id: 3,
    category: "Facturation",
    quote: "Facturations abusives, frais cachés non mentionnés. Le montant final était le double du devis initial.",
    author: "Sophie M.",
    location: "Luxembourg"
  },
  {
    id: 4,
    category: "Complications",
    quote: "Suite à mon traitement dentaire, j'ai développé une infection sévère qui a nécessité plusieurs hospitalisations d'urgence.",
    author: "Jean-Pierre D.",
    location: "Belgique"
  },
  {
    id: 9,
    category: "Facturation",
    quote: "Ils ont facturé des actes qui n'ont jamais été réalisés. J'ai les preuves de cette surfacturation scandaleuse.",
    author: "Isabelle P.",
    location: "France"
  },
  {
    id: 10,
    category: "Complications",
    quote: "Douleurs chroniques depuis mon intervention il y a 8 mois. Aucun suivi post-opératoire digne de ce nom.",
    author: "David M.",
    location: "Canada"
  }
];
