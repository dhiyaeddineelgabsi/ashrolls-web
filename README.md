# ASHROLLS 🍦

> *Roll It Your Way!* — Site web de la gelaterie artisanale ASHROLLS à Houmet Souk, Djerba (Tunisie).

Site vitrine statique (HTML / CSS / JS natif) présentant la gelaterie, son menu et ses informations de contact. Aucun framework, aucun build, aucune dépendance — déployable en un clic.

🔗 **Lien Vercel (démo en ligne) :** https://ashrolls-web.vercel.app

---

## 🌐 Pages

| Page            | Fichier         | Contenu                                              |
|-----------------|-----------------|------------------------------------------------------|
| Accueil         | `index.html`    | Hero, spécialités, points forts                      |
| Menu            | `menu.html`     | Menu complet avec filtres par catégorie              |
| Contact         | `contact.html`  | Adresse, horaires, carte, modal d'appel / WhatsApp   |

---

## ✨ Fonctionnalités

- 🟢 Badge **Ouvert / Fermé** calculé en temps réel (heure de Tunisie, 13h00 – 00h00)
- 📱 **Responsive** mobile-first avec menu hamburger
- 🍦 **Menu filtrable** par catégorie (Ice Roll, Jwajem, Cheesecakes, Pastries, Smoothies, Refreshing Drinks)
- 💬 **Bouton flottant WhatsApp** + modal de choix entre deux numéros
- 📍 **Google Maps** intégré pour la localisation
- 🎨 Design system turquoise / navy / orange (Google Fonts : Baloo 2 + Poppins)
- ⚡ Animations au scroll (IntersectionObserver), 100% statique

---

## 🚀 Démarrage

Le site est statique : ouvre simplement `index.html` dans un navigateur, ou lance un serveur local :

```bash
# Python
python -m http.server 8000

# Node
npx serve
```

Puis ouvre http://localhost:8000.

---

## 📦 Déploiement

Aucun build nécessaire. Importer le dépôt sur **Vercel** (framework « Other ») ou **Netlify**.

---

## 📁 Structure

```
ashrolls web/
├── index.html
├── menu.html
├── contact.html
├── style.css
├── main.js
├── favicon.svg
├── og-image.png
├── robots.txt
├── sitemap.xml
├── DOCUMENTATION.md   → Description détaillée du projet
└── README.md
```

👉 Voir `DOCUMENTATION.md` pour la description complète du projet (pages, design system, scripts, coordonnées).

---

## 📞 Contact

- **Adresse** : Ashrolls, Houmet Souk, Djerba, Tunisie
- **Téléphones** : +216 20 229 964 / +216 92 950 656
- **Instagram** : [@_ashrolls_](https://www.instagram.com/_ashrolls_/?hl=fr)
- **Horaires** : tous les jours, 13h00 – 00h00

---

© 2026 ASHROLLS. Tous droits réservés.
