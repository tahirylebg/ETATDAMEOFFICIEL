# ÉTAT DAME, checklist sortie officielle

## Parcours public

- `/` : présentation restaurant, accès menu, avis TripAdvisor, aperçu Instagram, infos pratiques.
- `/menu` : carte digitale complète pour QR code.
- `/qr` : planche imprimable de QR codes par table, non indexée par les moteurs.

## Réservation

Pas de formulaire en ligne : tous les boutons "Réserver" renvoient vers un appel téléphonique direct (`tel:`) ou vers Instagram.

## À compléter avant domaine public

- Renseigner l'hébergeur exact dans `/mentions-legales`.
- Ajouter les informations société complètes si disponibles : forme juridique, SIRET, responsable de publication.
- Vérifier l'URL finale dans `VITE_PUBLIC_SITE_URL` et `public/robots.txt` si le domaine n'est pas `etatdame.fr`.
- Côté hébergeur : forcer HTTPS, TLS strict, configurer les variables d'environnement sur la plateforme (pas dans le dépôt).
- Remplacer les photos Instagram placeholders par les vraies photos si ce n'est pas déjà fait (`src/assets/instagram/`).

## Validation

Avant mise en ligne :

```bash
npm run build
npm run lint
```
