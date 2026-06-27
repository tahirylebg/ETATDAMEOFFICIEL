# ÉTAT DAME Restaurant OS

Site vitrine et menu digital du restaurant **ÉTAT DAME** à Nîmes, avec formulaire de réservation, page menu pour QR code et pages légales.

## Aperçu

Le projet propose :

- une page d'accueil marketing avec présentation du lieu ;
- une page `/menu` pensée pour consultation rapide sur mobile ;
- une page `/qr` pour afficher des QR codes par table ;
- un formulaire de réservation relié à un webhook ou à l'envoi d'email ;
- des pages légales et de confidentialité.

## Stack technique

- **Frontend** : React 19
- **Build tool** : Vite
- **Routing / server functions** : TanStack Start + TanStack Router
- **UI** : Tailwind CSS 4 + composants Radix UI
- **Validation** : Zod
- **Qualité** : ESLint + Prettier

## Structure du projet

```text
src/
  assets/                  Images du restaurant
  components/ui/           Composants UI réutilisables
  hooks/                   Hooks React
  lib/                     Données métier, config serveur, helpers
  lib/api/                 Fonctions serveur (réservations)
  routes/                  Pages de l'application
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

```bash
cp .env.example .env
```

Variables principales :

```env
RESERVATION_WEBHOOK_URL=
RESERVATION_WEBHOOK_SECRET=

RESEND_API_KEY=
RESERVATION_EMAIL_TO=etatdame.contact@gmail.com
RESERVATION_EMAIL_FROM=

VITE_PUBLIC_SITE_URL=https://etatdame.fr
```

## Réservations

Le formulaire de réservation nécessite **au moins un mode d'envoi configuré en production** :

### Option 1 — Webhook

Configurer :

- `RESERVATION_WEBHOOK_URL`
- `RESERVATION_WEBHOOK_SECRET` *(optionnel selon votre backend)*

### Option 2 — Email via Resend

Configurer :

- `RESEND_API_KEY`
- `RESERVATION_EMAIL_TO`
- `RESERVATION_EMAIL_FROM`

Si aucun mode n'est configuré, le formulaire bloque proprement l'envoi et invite l'utilisateur à appeler le restaurant.

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
- ajuster `public/robots.txt` si le domaine public change.

## Identité du restaurant

Les principales informations métier (coordonnées, horaires, menu, liens, tables) sont centralisées dans :

- `src/lib/etat-dame.ts`

La configuration serveur liée aux réservations est gérée dans :

- `src/lib/config.server.ts`
- `src/lib/api/reservations.functions.ts`

## Notes

- Le dépôt contient déjà un dossier `dist/` et `node_modules/`, mais ils ne sont pas nécessaires pour comprendre ou maintenir le projet.
- Le projet semble avoir été généré puis personnalisé à partir d'une base TanStack Start / Lovable.
