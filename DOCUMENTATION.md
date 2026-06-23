# ASHROLLS Web — Documentation du projet

> Site web statique de la gelaterie artisanale **ASHROLLS**, située à Houmet Souk, Djerba (Tunisie).
> Slogan : *« Roll It Your Way! »*

---

## 1. Présentation générale

ASHROLLS Web est un site vitrine **statique** (HTML / CSS / JavaScript natif, sans framework ni build) destiné à présenter la gelaterie, son menu et ses informations de contact. Il a été conçu pour être léger, rapide, responsive et déployable gratuitement sur des plateformes comme Vercel, Netlify ou GitHub Pages.

- **Cible** : clients et prospects de la gelaterie à Djerba.
- **Langue** : français.
- **Type** : site statique multi-pages.
- **Hébergement recommandé** : Vercel.

---

## 2. Arborescence du projet

```
ashrolls web/
├── index.html        → Page d'accueil (hero, spécialités, points forts)
├── menu.html         → Menu complet avec filtres par catégorie
├── contact.html      → Coordonnées, horaires, carte Google Maps, modal d'appel
├── style.css         → Feuille de style unique (design system + responsive)
├── favicon.svg        → Favicon SVG (logo "AR" sur fond turquoise)
├── DOCUMENTATION.md  → Ce fichier (description complète du projet)
└── README.md         → README du dépôt
```

Aucun dossier `assets/`, `js/` ou `images/` n'existe pour le moment : les scripts sont inline dans chaque page HTML, et les visuels produits utilisent un placeholder (`🍦 Photo à venir`) en attendant les photos finales.

---

## 3. Pages et fonctionnalités

### 3.1 `index.html` — Accueil

- **Header sticky** avec logo, navigation (Accueil / Menu / Contact), bouton hamburger (mobile) et **badge de statut** (Ouvert / Fermé) calculé dynamiquement.
- **Hero** « Roll It Your Way! » avec dégradé turquoise et emojis flottants animés.
- Section **« Pourquoi ASHROLLS ? »** : 4 cartes (Fait maison, Ingrédients frais, 100% personnalisable, Livraison).
- Section **« Nos Spécialités »** : 3 cartes produits (Ice Roll Large Cup 8DT, Jwajem Spéciale Ash 18DT, Cheesecake San Sebastien 10DT).
- **Bouton flottant WhatsApp** (`wa.me/21620229964`).
- Footer avec adresse, réseaux sociaux et copyright 2026.

### 3.2 `menu.html` — Menu

- **Barre de filtres** par catégorie :
  - Ice Roll
  - Jwajem
  - Cheesecakes
  - Pastries
  - Smoothies & Drinks
  - Refreshing Drinks
- Grille de **cartes produits** avec nom, description, prix en DT et badge « Supplément +2DT » le cas échéant.
- Filtrage JavaScript natif (`data-category` + toggle `display`).
- Animations d'apparition au scroll (IntersectionObserver → classe `.visible`).

> Exemples de prix : Mini Cup 5DT, Large Cup 8DT, Spéciale Ash 18DT, San Sebastien 10DT, Milkshake 8DT, Virgin Mojito 5DT, etc.

### 3.3 `contact.html` — Contact

- **Infos pratiques** : adresse (Houmet Souk, Djerba), horaires (13h00 – 00h00, tous les jours).
- Bouton **« Nous appeler »** ouvrant un **modal** permettant de choisir entre deux numéros :
  - +216 20 229 964
  - +216 92 950 656
- Boutons **Appeler** (`tel:`) et **WhatsApp** (`wa.me`) dynamiques selon le numéro sélectionné.
- Lien **Google Maps** (`maps.app.goo.gl/...`) + **iframe** de localisation (33.875436, 10.8674224).
- Liens réseaux sociaux (Instagram officiel, Facebook, TikTok).

---

## 4. Design system & styles (`style.css`)

### Palette de couleurs

| Variable CSS    | Couleur     | Usage                      |
|-----------------|-------------|----------------------------|
| `--turquoise`   | `#3EC8D4`   | Couleur principale         |
| `--navy`        | `#1A3A5C`   | Texte / footer / boutons   |
| `--accent`      | `#F5A623`   | Prix / accents             |
| `--offwhite`    | `#f8fcfd`   | Fond global                |
| `--text`        | `#243447`   | Texte courant              |
| `--white`       | `#fff`      | Cartes / header            |

### Typographies (Google Fonts)

- **Baloo 2** (700/800, italique) → titres `h1`, `h2`, `h3`, logo.
- **Poppins** (300–700) → texte courant.

### Composants clés

- `.container` (largeur `min(1100px, 92%)`)
- `.card`, `.special-card`, `.product-card`, `.contact-card`
- `.btn-primary` / `.btn-secondary` (pill, hover translateY)
- `.filter-bar` + `.filter-btn` (filtres du menu)
- `.whatsapp-float` (bouton fixe, animation `pulse`)
- `.modal-overlay` / `.modal` / `.phone-chooser` (modal de contact)
- `.status-badge.open` / `.closed` (badge d'ouverture)
- `.reveal` + `.visible` (animation au scroll via IntersectionObserver)
- `.decorative-bg` (radial-gradients décoratifs turquoise/orange)

### Responsive

- Breakpoint principal : `max-width: 860px` → affichage du hamburger, menu vertical flottant, badge réduit.
- Grilles CSS auto-fit / auto-fill (`minmax`) pour s'adapter à toutes les tailles d'écran.

---

## 5. Fonctionnalités JavaScript (inline)

Chaque page contient un bloc `<script>` natif (aucune dépendance externe) :

1. **`updateStatusBadge()`** : calcule l'heure en Tunisie (`Africa/Tunis`) et affiche 🟢 Ouvert (13h00 – 00h00) / 🔴 Fermé. Rafraîchi toutes les 60 s.
2. **Menu hamburger** : toggle de la classe `.show` sur la nav.
3. **Filtres menu** (`menu.html`) : filtrage des cartes par `data-category`.
4. **Modal d'appel** (`contact.html`) : ouverture/fermeture, choix du numéro, mise à jour dynamique des liens `tel:` et `wa.me`.
5. **IntersectionObserver** : révèle les éléments `.reveal` au scroll.

---

## 6. Coordonnées de la gelaterie

- **Adresse** : Ashrolls, Houmet Souk, Djerba, Tunisie
- **GPS** : 33.875436, 10.8674224
- **Téléphones** : +216 20 229 964 / +216 92 950 656
- **WhatsApp** : https://wa.me/21620229964
- **Instagram** : https://www.instagram.com/_ashrolls_/?hl=fr
- **Horaires** : tous les jours, 13h00 – 00h00

---

## 7. Déploiement

Le site étant purement statique, il peut être déployé en un clic :

1. **Vercel** : importer le dépôt GitHub, framework « Other », aucun build nécessaire.
2. **Netlify** : drag-and-drop du dossier ou connexion GitHub.
3. **GitHub Pages** : branche `master` / dossier racine.

Aucune variable d'environnement, aucun backend.

---

## 8. Évolutions possibles

- Ajout d'un dossier `assets/images/` pour remplacer les placeholders par les vraies photos produits.
- Mode commande en ligne (panier, checkout).
- Version anglaise / arabe (i18n).
- SEO avancé : `og-image.jpg` manquante, `sitemap.xml`, `robots.txt`.
- Formulaire de contact (actuellement uniquement WhatsApp/téléphone).
- Google Analytics ou Plausible.
