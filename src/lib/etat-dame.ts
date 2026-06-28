import brunchImg from "@/assets/brunch.jpg";
import cocktailImg from "@/assets/cocktail.jpg";
import heroImg from "@/assets/hero-brunch.jpg";
import insta1 from "@/assets/instagram/insta1.jpg";
import insta2 from "@/assets/instagram/insta2.jpg";
import insta3 from "@/assets/instagram/insta3.jpg";
import insta4 from "@/assets/instagram/insta4.jpg";
import insta5 from "@/assets/instagram/insta5.jpg";
import insta6 from "@/assets/instagram/insta6.jpg";
import interiorImg from "@/assets/interior.jpg";
import tapasImg from "@/assets/tapas.jpg";

export const PHONE = "+33666339242";
export const PHONE_DISPLAY = "06 66 33 92 42";
export const EMAIL = "etatdame.contact@gmail.com";
export const ADDRESS = "12 Rue Littré, 30000 Nîmes";
export const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=12+Rue+Littr%C3%A9+30000+N%C3%AEmes";
export const INSTAGRAM_HANDLE = "@Etatdame_Brunch";
export const INSTAGRAM_URL = "https://www.instagram.com/Etatdame_Brunch/";
export const SITE_URL = "https://etatdame.fr";
export const TRIPADVISOR_URL =
  "https://www.tripadvisor.fr/Restaurant_Review-g187154-d33066471-Reviews-Etat_Dame-Nimes_Gard_Occitanie.html";
export const TRIPADVISOR_RATING = 5.0;
export const TRIPADVISOR_REVIEW_COUNT = 22;

export const images = {
  brunch: brunchImg,
  cocktail: cocktailImg,
  hero: heroImg,
  interior: interiorImg,
  tapas: tapasImg,
};

export const instagramPhotos = [insta1, insta2, insta3, insta4, insta5, insta6];

export type BaseItem = {
  id: string;
  name: string;
  price: number;
  description: string;
  detail: string;
  image: string;
  mood: string;
};

export type ExtraItem = {
  id: string;
  name: string;
  price: number;
  note?: string;
};

export type MenuItem = {
  name: string;
  price: string;
  description?: string;
};

export type DigitalMenuItem = {
  name: string;
  price: string;
  note?: string;
  vegetarian?: boolean;
};

export type DigitalMenuGroup = {
  title: string;
  items: DigitalMenuItem[];
  composition?: string;
  choiceLabel?: string;
  image?: string;
  imageAlt?: string;
  note?: string;
  compact?: boolean;
};

export type RestaurantTable = {
  id: string;
  label: string;
  seats: number;
  area: "Salle" | "Terrasse" | "Comptoir";
};

export const tables: RestaurantTable[] = [
  { id: "1", label: "Table 1", seats: 2, area: "Salle" },
  { id: "2", label: "Table 2", seats: 2, area: "Salle" },
  { id: "3", label: "Table 3", seats: 4, area: "Salle" },
  { id: "4", label: "Table 4", seats: 4, area: "Salle" },
  { id: "5", label: "Table 5", seats: 2, area: "Terrasse" },
  { id: "6", label: "Table 6", seats: 4, area: "Terrasse" },
  { id: "7", label: "Table 7", seats: 6, area: "Terrasse" },
  { id: "8", label: "Comptoir", seats: 3, area: "Comptoir" },
];

export const bases: BaseItem[] = [
  {
    id: "egg-deluxe",
    name: "Egg'n Deluxe",
    price: 1500,
    description:
      "Pain burger au levain, guacamole maison, cream cheese maison, oeuf au plat, micro-pousses de poireaux et salade de roquette.",
    detail: "La base la plus généreuse pour un brunch salé complet.",
    image: brunchImg,
    mood: "crémeux, brioché, très brunch",
  },
  {
    id: "pancake-sale",
    name: "Pancake salé",
    price: 1500,
    description:
      "Pancakes moelleux, oeufs brouillés, sauce fromagère maison, mélange de sirop d'érable.",
    detail: "Le choix doux-salé qui donne une vraie personnalité à l'assiette.",
    image: heroImg,
    mood: "moelleux, généreux, réconfortant",
  },
  {
    id: "avocado-toast",
    name: "Avocado Toast",
    price: 1400,
    description: "Pain toasté, guacamole maison, oeuf, micro-pousses et salade de roquette.",
    detail: "Frais, généreux, facile à twister avec une garniture.",
    image: tapasImg,
    mood: "frais, vert, acidulé",
  },
];

export const garnitures: ExtraItem[] = [
  { id: "aubergine", name: "Aubergine confite", price: 0, note: "sans viande" },
  { id: "saucisse", name: "Saucisse fumée", price: 0 },
  { id: "falafels", name: "Falafels", price: 100, note: "sans viande" },
  { id: "bacon", name: "Bacon", price: 100 },
  { id: "saumon", name: "Saumon gravlax", price: 200 },
  { id: "poulet", name: "Poulet mariné", price: 300 },
  { id: "boeuf", name: "Effiloché de boeuf", price: 300 },
  { id: "stracciatella", name: "Stracciatella", price: 300 },
];

export const gourmandises: MenuItem[] = [
  {
    name: "Shawarma",
    price: "19€",
    description:
      "Pain maison, légumes marinés, sauce maison. Viande au choix: poulet mariné ou effiloché de boeuf.",
  },
  {
    name: "Pancake sucré",
    price: "15€",
    description:
      "Sirop d'érable et beurre salé, mangue rôtie, crème Bueno, Nutella banane ou autres recettes de la carte.",
  },
  {
    name: "Yaourt bowl",
    price: "13€",
    description: "Fruits du moment, amandes, noix et miel, avec une version crème de Bueno.",
  },
  {
    name: "Cake perdu",
    price: "12€",
    description:
      "Marbré maison façon pain perdu, yaourt brassé, caramel beurre salé et amandes torréfiées.",
  },
  {
    name: "Cookie",
    price: "5€",
    description: "Big cookie garni de crème de pistache ou de caramel beurre salé.",
  },
];

export const supplements: MenuItem[] = [
  { name: "Oeuf supplémentaire", price: "2€" },
  { name: "Avocat", price: "2€" },
  { name: "Fromage", price: "1,50€" },
  { name: "Sirop d'érable", price: "1€" },
  { name: "Pain sans gluten", price: "1,50€" },
];

export const boissons: MenuItem[] = [
  { name: "Café / Allongé", price: "2,50€" },
  { name: "Cappuccino / Latte", price: "4€" },
  { name: "Thé / Infusion", price: "3,50€" },
  { name: "Jus pressé", price: "4,50€" },
  { name: "Matcha Latte", price: "5€" },
];

export const foodMenu: DigitalMenuGroup[] = [
  {
    title: "Egg'n Deluxe",
    composition:
      "Pain burger au levain, guacamole maison, cream cheese maison, oeuf au plat, micro-pousses de poireaux et salade de roquette.",
    choiceLabel: "Garniture au choix",
    image: brunchImg,
    imageAlt: "Assiette brunch avec oeufs, sauce maison et garniture",
    items: [
      { name: "Aubergine confite", price: "15€", vegetarian: true },
      { name: "Saucisse fumée", price: "15€" },
      { name: "Falafels", price: "16€", vegetarian: true },
      { name: "Bacon", price: "16€" },
      { name: "Saumon gravlax", price: "17€" },
      { name: "Poulet mariné", price: "18€" },
    ],
  },
  {
    title: "Egg Roll",
    composition: "Roll aux oeufs, ciboulette, micro-pousses et salade.",
    choiceLabel: "Version au choix",
    image: heroImg,
    imageAlt: "Table brunch ÉTAT DAME avec assiettes salées",
    items: [
      { name: "Nature", price: "12€", vegetarian: true },
      { name: "Saucisse", price: "15€" },
      { name: "Bacon", price: "16€" },
      { name: "Effiloché de boeuf", price: "18€" },
    ],
  },
  {
    title: "Yaourt Bowl",
    composition: "Yaourt bowl accompagné de fruits du moment, d'amandes et de noix.",
    choiceLabel: "Topping au choix",
    items: [
      {
        name: "Classic",
        price: "12€",
        note: "Fruits du moment, amandes, noix et miel.",
      },
      {
        name: "Crème de Bueno",
        price: "13€",
        note: "Fruits du moment, crème de Bueno, Kinder Bueno, amandes et noix.",
      },
      { name: "Crème de pistache", price: "16€" },
    ],
  },
  {
    title: "Pancake salé",
    composition:
      "Pancakes moelleux, oeufs brouillés, sauce fromagère maison, mélange de sirop d'érable.",
    choiceLabel: "Garniture au choix",
    image: heroImg,
    imageAlt: "Pancake salé servi avec garniture brunch",
    items: [
      { name: "Saucisse fumée", price: "16€" },
      { name: "Saumon gravlax", price: "17€" },
      { name: "Bacon fumé", price: "17€" },
      { name: "Effiloché de boeuf", price: "19€" },
    ],
  },
  {
    title: "Pancake sucré",
    composition: "Pancakes moelleux, garniture sucrée au choix.",
    choiceLabel: "Garniture au choix",
    image: brunchImg,
    imageAlt: "Pancakes et brunch sucré ÉTAT DAME",
    items: [
      {
        name: "Caramel beurre salé",
        price: "15€",
        note: "Sirop d'érable et beurre salé.",
      },
      {
        name: "Nutella banane",
        price: "15€",
        note: "Nutella, amandes torréfiées et banane.",
      },
      { name: "Fruits rouges", price: "15€" },
      {
        name: "Mangue rôtie",
        price: "16€",
        note: "Yaourt, mangue rôtie à la cannelle, amandes torréfiées et coulis de mangue 100 %.",
      },
      {
        name: "Crème Bueno",
        price: "16€",
        note: "Crème de Bueno, amandes, fraises, coulis de mûre et morceaux de Kinder Bueno.",
      },
      { name: "Crème pistache", price: "17€" },
    ],
  },
  {
    title: "Cookie",
    composition: "Big cookie maison garni au choix.",
    choiceLabel: "Garniture au choix",
    items: [
      {
        name: "Caramel beurre salé",
        price: "5€",
        note: "Généreusement garni de caramel beurre salé.",
      },
      {
        name: "Crème de pistache",
        price: "5€",
        note: "Généreusement garni de crème de pistache.",
      },
    ],
  },
  {
    title: "Avocado Toast",
    composition: "Pain toasté, guacamole maison, oeuf, micro-pousses et salade de roquette.",
    choiceLabel: "Garniture au choix",
    image: tapasImg,
    imageAlt: "Avocado toast avec sauce maison et graines",
    items: [
      { name: "Aubergine confite", price: "14€", vegetarian: true },
      { name: "Saucisse fumée", price: "15€" },
      { name: "Falafels", price: "15€", vegetarian: true },
      { name: "Bacon", price: "16€" },
      { name: "Saumon gravlax", price: "17€" },
      { name: "Poulet mariné", price: "17€" },
      { name: "Effiloché de boeuf", price: "18€" },
      { name: "Straciatella", price: "19€", vegetarian: true },
    ],
  },
  {
    title: "Shawarma",
    composition: "Pain maison, légumes marinés, sauce maison.",
    choiceLabel: "Viande au choix",
    items: [
      { name: "Poulet mariné", price: "19€" },
      { name: "Effiloché de boeuf", price: "21€" },
    ],
  },
  {
    title: "Cake perdu",
    composition:
      "Marbré maison façon pain perdu, yaourt brassé, caramel beurre salé et amandes torréfiées.",
    items: [{ name: "Amandes et caramel", price: "12€" }],
  },
  {
    title: "Suppléments",
    compact: true,
    items: [
      { name: "Sirop d'érable", price: "3€" },
      { name: "Nutella", price: "3€" },
    ],
  },
];

export const drinkMenu: DigitalMenuGroup[] = [
  {
    title: "Limonade",
    items: [
      { name: "Citron vert", price: "5€" },
      { name: "Orange sanguine", price: "6€" },
      { name: "Maté citron", price: "7€" },
      { name: "Passion", price: "7€" },
      { name: "Gingembre", price: "5€" },
    ],
  },
  {
    title: "Café",
    items: [
      { name: "Court", price: "3€" },
      { name: "Long", price: "4€" },
    ],
  },
  {
    title: "Thé",
    items: [
      { name: "American Breakfast", price: "5€" },
      { name: "Thé à la menthe", price: "5€" },
      { name: "Chaï latte", price: "7€" },
    ],
  },
  {
    title: "Eau",
    items: [
      { name: "Orezza", price: "5€" },
      { name: "Eau de coco", price: "5€" },
    ],
  },
  {
    title: "Iced latte",
    items: [
      { name: "Iced coffee latte", price: "6€" },
      { name: "Iced mango latte", price: "7€" },
      { name: "Iced berry latte", price: "7€" },
      { name: "Iced passion latte", price: "8€" },
      { name: "Iced pistachio latte", price: "8€" },
      { name: "Iced nutella latte", price: "8€" },
      { name: "Iced chaï latte", price: "8€" },
    ],
  },
  {
    title: "Matcha latte",
    items: [
      { name: "Matcha latte", price: "6€" },
      { name: "Iced matcha latte", price: "6€" },
      { name: "Iced berry matcha", price: "7€" },
      { name: "Iced mango matcha", price: "8€" },
      { name: "Iced passion matcha", price: "8€" },
      { name: "Iced yuzu matcha", price: "8€" },
      { name: "Iced coco matcha foam", price: "8€" },
    ],
  },
  {
    title: "Jus",
    items: [
      { name: "Passion", price: "6€" },
      { name: "Fruit du dragon", price: "7€" },
      { name: "Goyave", price: "7€" },
    ],
  },
  {
    title: "Bière",
    items: [{ name: "Corona", price: "6€" }],
  },
  {
    title: "Extras boissons",
    items: [
      { name: "Lait d'avoine", price: "0,70€" },
      { name: "Sirop de vanille", price: "0,70€" },
    ],
  },
];

export const cocktailMenu: DigitalMenuGroup[] = [
  {
    title: "Cocktails signature",
    image: cocktailImg,
    imageAlt: "Cocktail signature servi chez ÉTAT DAME",
    items: [
      { name: "Mango Passion", price: "11€" },
      { name: "Espresso Martini", price: "15€" },
      { name: "Koso Dry", price: "13€" },
      { name: "Ginger'n Matcha", price: "15€" },
      { name: "Pitaya bliss", price: "13€" },
      { name: "Mexican Kick", price: "12€" },
      { name: "Tiramisu", price: "15€" },
      { name: "Miel & Tabac", price: "13€" },
      { name: "Fresh Gin", price: "15€" },
      { name: "Sakura Negroni", price: "15€" },
      { name: "Pink Panther", price: "15€" },
    ],
  },
];

export const hours = [
  ["Lundi", "11:00 - 15:00"],
  ["Mardi", "Fermé"],
  ["Mercredi", "Fermé"],
  ["Jeudi", "11:00 - 15:00  /  18:30 - 23:00"],
  ["Vendredi", "11:00 - 15:00  /  18:30 - 23:00"],
  ["Samedi", "11:00 - 15:00  /  18:30 - 23:00"],
  ["Dimanche", "11:00 - 15:00"],
];

export function euro(cents: number) {
  if (cents === 0) return "+0€";
  const value = cents / 100;
  return `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(2).replace(".", ",")}€`;
}
