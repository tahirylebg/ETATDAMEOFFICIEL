# ÉTAT DAME Restaurant OS

Site vitrine et menu digital du restaurant **ÉTAT DAME** à Nîmes : page d'accueil, carte digitale pour QR code, avis TripAdvisor, aperçu Instagram et pages légales.

## Aperçu

Le projet propose :

- une page d'accueil marketing avec présentation du lieu, aperçu de la carte, avis clients et aperçu Instagram ;
- une page `/menu` pensée pour consultation rapide sur mobile après scan QR code ;
- une page `/qr` pour afficher et imprimer des QR codes par table ;
- des pages légales et de confidentialité.

Il n'y a pas de réservation en ligne : les demandes se font par téléphone ou via Instagram (boutons "Appeler" disposés sur tout le site).

## Stack technique

- **Frontend** : React 19
- **Build tool** : Vite
- **Routing** : TanStack Start + TanStack Router
- **UI** : Tailwind CSS 4 + composants Radix UI
- **Animations** : Motion (`whileInView` + ressorts physiques, composant `Reveal`)
- **Polices** : Fraunces (titres) + Nunito Sans (texte courant)
- **Qualité** : ESLint + Prettier

## Structure du projet

```text
src/
  assets/                  Images du restaurant + dossier instagram/
  components/
    ui/                    Composants UI réutilisables
    reveal.tsx             Wrapper d'animation scroll-reveal (Motion)
  lib/                     Données métier, helpers (etat-dame.ts)
  routes/                  Pages de l'application
  server.ts                Entrée serveur SSR + headers de sécurité
public/                    Assets publics
```

## Installation

### Prérequis

- Node.js 20+ recommandé
- `npm` ou `bun`

### Lancer en local

```bash
npm install
npm run dev
```

Ou avec Bun :

```bash
bun install
bun run dev
```

L'application est ensuite accessible sur l'URL locale affichée par Vite (le port par défaut peut varier si déjà occupé).

## Scripts disponibles

```bash
npm run dev
npm run build
npm run preview
npm run lint
npm run format
```

## Variables d'environnement

Créer un fichier `.env` à partir de `.env.example`.

Sous macOS / Linux :

```bash
cp .env.example .env
```

Sous Windows PowerShell :

```powershell
Copy-Item .env.example .env
```

Seule variable utilisée :

```env
VITE_PUBLIC_SITE_URL=https://etatdame.fr
```

## Sécurité

- Headers de sécurité (CSP, X-Frame-Options, HSTS, nosniff, Referrer-Policy) appliqués à toutes les réponses dans `src/server.ts`.
- Aucun secret ni clé API dans le code : le site ne fait aucune écriture de données (pas de formulaire, pas de base de données).
- `.env` exclu du dépôt via `.gitignore`.

## Fonctionnement du projet

### Menu digital

- la page `/menu` affiche la carte complète ;
- le paramètre `?table=1` permet d'identifier la table ayant scanné le QR code ;
- les données du menu, des horaires et des coordonnées viennent principalement de `src/lib/etat-dame.ts`.

### QR codes

- la page `/qr` génère un support imprimable pour chaque table ;
- chaque QR code redirige vers `/menu?table={id}`.

### Avis et réseaux sociaux

- la note et le nombre d'avis TripAdvisor sont affichés via un lien vers la page officielle (pas de citation de texte tiers, pour rester dans les conditions d'utilisation de TripAdvisor) ;
- un aperçu Instagram (mosaïque de photos) renvoie vers le compte `@Etatdame_Brunch`.

## Pages principales

- `/` : landing page du restaurant
- `/menu` : carte digitale complète
- `/qr` : support QR par table
- `/mentions-legales` : mentions légales
- `/confidentialite` : politique de confidentialité

## Mise en production

Avant publication :

```bash
npm run build
npm run lint
```

Points à vérifier :

- renseigner l'hébergeur exact dans la page des mentions légales ;
- compléter les informations société si nécessaire ;
- vérifier que `VITE_PUBLIC_SITE_URL` correspond au domaine final ;
- ajuster `public/robots.txt` si le domaine public change ;
- côté hébergeur (Cloudflare ou autre) : activer HTTPS forcé, TLS strict, et configurer les variables d'environnement sur la plateforme plutôt que dans le dépôt.

## Personnalisation rapide

Les zones à modifier le plus souvent sont :

- `src/lib/etat-dame.ts` pour le menu, les prix, les horaires, les tables, les coordonnées et les photos Instagram ;
- `src/routes/index.tsx` pour la page d'accueil ;
- `src/routes/menu.tsx` pour la présentation de la carte ;
- `src/routes/qr.tsx` pour les supports QR imprimables ;
- `src/routes/mentions-legales.tsx` et `src/routes/confidentialite.tsx` pour les contenus juridiques.

## Notes

- Le projet a été généré puis personnalisé à partir d'une base TanStack Start / Lovable.
- La fonctionnalité de réservation en ligne (formulaire, webhook, email) a été retirée intentionnellement : les réservations se font par téléphone ou Instagram.
