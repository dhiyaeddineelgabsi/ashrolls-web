// Source de vérité : F:\work\projet ilyes\menu_ash_v4.csv
// Prix en DT (format français, virgule décimale)
const menuData = [
  {
    category: "pates",
    label: "Pâtes",
    emoji: "🥞",
    theme: "pink",
    subSections: [
      {
        title: "Mini Pancakes",
        items: [
          { name: "Saghroun box", price: "5" },
          { name: "Médium box", price: "8" },
          { name: "Large box", price: "10" },
          { name: "Spécial (20 pièces)", price: "19" },
        ],
      },
      {
        title: "ASH Cup",
        items: [
          { name: "Classique", price: "9" },
          { name: "Fruits ASH cup", price: "11" },
          { name: "Chocolat ASH cup", price: "12" },
        ],
      },
      {
        title: "Boule Bastique",
        items: [
          { name: "Mini (7 boules)", price: "7" },
          { name: "Medium (14 boules)", price: "13" },
          { name: "Large (21 boules)", price: "17,5" },
        ],
      },
      {
        title: "Toppings",
        note: "inclus avec la commande",
        options: [
          "Nutella", "Lotus", "Morjen", "Choco.blanc", "Choco.noir",
          "Pistache", "Oreo", "Café", "Caramel", "Fruits secs",
        ],
      },
    ],
  },
  {
    category: "glace",
    label: "Glace",
    emoji: "🍦",
    theme: "purple",
    subSections: [
      {
        title: "Tailles",
        items: [
          { name: "Mini", price: "5" },
          { name: "Medium", price: "6" },
          { name: "Large", price: "8" },
        ],
      },
      {
        title: "Supplément",
        items: [
          { name: "Supplément", price: "3" },
        ],
      },
      {
        title: "Barre de chocolat",
        note: "inclus avec la glace",
        options: [
          "KitKat", "Nutella", "Snickers", "Morjen", "Raffaello",
          "Lotus", "Twix", "Ferrero", "M&M's", "Mars",
        ],
      },
      {
        title: "Naturel — Fruits de saison",
        note: "inclus avec la glace",
        options: ["Fraise", "Kiwi", "Banane", "Dattes", "Citron menthe"],
      },
      {
        title: "Naturel — Fruits secs",
        note: "inclus avec la glace",
        options: ["Amande", "Noisette", "Noix de cajou", "Pistache", "Mixte"],
      },
    ],
  },
  {
    category: "jwajem",
    label: "Jwajem",
    emoji: "🍯",
    theme: "cyan",
    subSections: [
      {
        title: "Jwajem",
        items: [
          { name: "Classic", price: "8" },
          { name: "Nutella", price: "8" },
          { name: "Lotus", price: "11" },
          { name: "Morjen", price: "11" },
          { name: "Overdose", price: "12,5" },
          { name: "Danette", price: "10" },
          { name: "Ferrero", price: "12" },
          { name: "Kinder", price: "12" },
          { name: "Chocolat blanc caramel", price: "12" },
          { name: "Pistache", price: "14" },
          { name: "Spécial ASH", price: "19" },
        ],
      },
    ],
  },
  {
    category: "gourmand",
    label: "Gourmand",
    emoji: "🍰",
    theme: "amber",
    subSections: [
      {
        title: "Gourmand",
        items: [
          { name: "Saint-Sébastien", price: "11" },
          { name: "Supplément pistache", price: "3" },
          { name: "Cheese Doubai", price: "10" },
          { name: "Tiramisu (pistache / Nutella / fraise / spéculoos)", price: "10" },
          { name: "Classique ASH Dubai", price: "10" },
          { name: "Spécial ASH Dubai", price: "13" },
        ],
      },
    ],
  },
  {
    category: "boissons",
    label: "Boissons",
    emoji: "🥤",
    theme: "blue",
    subSections: [
      {
        title: "Smoothies",
        items: [
          { name: "Smoothie fruits", price: "7" },
          { name: "Smoothie fruits secs", price: "8,5" },
        ],
      },
      {
        title: "Boissons",
        items: [
          { name: "Nespresso", price: "3,5" },
          { name: "Café crème", price: "4" },
          { name: "Eau (0,5 L)", price: "1" },
          { name: "Jus de fraise", price: "6" },
          { name: "Citronnade", price: "3" },
          { name: "Virgin mojito", price: "5" },
          { name: "Blu mojito", price: "6" },
          { name: "Red mojito", price: "7" },
          { name: "Frappuccino classique", price: "5" },
          { name: "Supplément Frappuccino", price: "7,5" },
          { name: "Lait de poule", price: "6" },
          { name: "Milk-shake", price: "8,5" },
          { name: "Milk-shake (Nutella / pistache / lotus)", price: "10" },
        ],
      },
    ],
  },
];

export default menuData;
