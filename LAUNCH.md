# ÉTAT DAME, checklist sortie officielle

## Parcours public

- `/` : présentation restaurant, accès menu, réservation, infos pratiques.
- `/menu` : carte digitale complète pour QR code.
- `/qr` : planche imprimable de QR codes par table, non indexée par les moteurs.

## Réservation

Le formulaire nécessite au moins une méthode de livraison configurée en production :

- `RESERVATION_WEBHOOK_URL` pour envoyer la réservation vers un outil externe.
- ou `RESEND_API_KEY`, `RESERVATION_EMAIL_TO`, `RESERVATION_EMAIL_FROM` pour l'email.

Sans configuration, le formulaire refuse proprement l'envoi et invite à appeler le restaurant.

## À compléter avant domaine public

- Renseigner l'hébergeur exact dans `/mentions-legales`.
- Ajouter les informations société complètes si disponibles : forme juridique, SIRET, responsable de publication.
- Vérifier l'URL finale dans `SITE_URL` et `public/robots.txt` si le domaine n'est pas `etatdame.fr`.

## Validation

Avant mise en ligne :

```bash
bun run build
bun run lint
```
