# Color Sort

Minimalistische Nuxt 4 App zum Verwalten von Marker-Farbpaletten (z. B. Ohuhu).

## Features
- Projekte anlegen / löschen
- Farben per Code (z. B. `Y02`, `RV05`) oder Hex (`#ff8800`) hinzufügen
- Farbcode wird automatisch erkannt (Ohuhu-Palette aus dem Referenzfoto vorinstalliert)
- Sortieren per Drag & Drop oder automatisch nach Helligkeit
- Export der gesamten Palette als PDF
- Persistenz im Browser via `localStorage`

## Entwicklung
```bash
npm install
npm run dev
```

## Production
```bash
npm run build
npm start
```

## Docker
```bash
docker build -t color-sort .
docker run -p 3000:3000 color-sort
```

## Deployment
GitHub Actions baut bei jedem Push auf `main` ein Image nach GHCR (`ghcr.io/maidem/color-sort:latest`)
und triggert optional einen Coolify-Webhook.

Benötigte Secrets im Repository:
- `COOLIFY_WEBHOOK` – Deploy-Webhook-URL der Coolify Application
- `COOLIFY_TOKEN` – Bearer Token (falls die Coolify-Instanz Auth verlangt)

In Coolify als "Docker Image" Application konfigurieren mit Image
`ghcr.io/maidem/color-sort:latest` und Port `3000`.
