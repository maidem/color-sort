# Color Sort

Minimalistische Nuxt 4 App zum Verwalten von Marker-Farbpaletten (z. B. Ohuhu).

## Features

- **Projekte verwalten**: Projekte anlegen / umbenennen / löschen
- **Farbverwaltung**: Farben per Code (z. B. `Y02`, `RV05`) oder Hex (`#ff8800`) hinzufügen
- **Automatische Farbkennung**: Farbcode wird mit der Ohuhu-Palette (~220 Farben) automatisch erkannt
- **Sortierung**: Drag & Drop oder automatisch nach Helligkeit (Light-to-Dark / Dark-to-Light)
- **PDF-Export**: Gesamte Palette als PDF exportieren
- **Passwortschutz**: Eigener Login (SessionToken-basiert, 30 Tage TTL)
- **Persistenz**: SQLite-Datenbank (gerätesübergreifend, alle Änderungen live sichtbar)
- **SEO-geschützt**: `robots.txt` + `noindex`-Tags blockieren Crawler & KI-Bots

## Architektur

- **Frontend**: Vue 3 + Nuxt 4 (SPA), Tailwind CSS
- **Backend**: Nitro (Nuxt Server)
- **Datenbank**: SQLite via `better-sqlite3`
- **Auth**: HttpOnly Session-Cookies
- **Infrastruktur**: Docker, Tailscale, GitHub Actions

## Entwicklung

```bash
npm install
npm run dev
```

Server läuft auf `http://localhost:3000`, Datenbank im `.data/` Verzeichnis.

Umgebungsvariablen (optional):

- `AUTH_PASSWORD` – Passwort für Login (bei Deployment notwendig)
- `DB_PATH` – Pfad zur SQLite-DB (default: `.data/color-sort.db` oder `/data/color-sort.db` in Prod)

## Production

```bash
npm run build
npm start
```

## Docker

```bash
docker build -t color-sort .
docker run -p 3000:3000 \
  -e AUTH_PASSWORD=deinpasswort \
  -v color-data:/data \
  color-sort
```

Wichtig: Volume `/data` muss gemountet sein, damit die Datenbank persistent gespeichert wird.

## Deployment mit Coolify

1. **New Application** → "Docker Image"
2. **Image**: `ghcr.io/maidem/color-sort:latest`
3. **Port**: `3000`
4. **Environment Variables**:
   - `AUTH_PASSWORD` → dein Passwort
   - `NODE_ENV` → `production`
5. **Persistent Storage** → Volume mit Destination Path `/data` (für SQLite-Persistenz)
6. **GitHub Actions** Secrets:
   - `TAILSCALE_OAUTH_CLIENT_ID` – OAuth Client ID (Devices: Core Write, Auth Keys: Write, Tags: `tag:ci`)
   - `TAILSCALE_OAUTH_SECRET` – OAuth Client Secret
   - `COOLIFY_WEBHOOK` – Coolify Deploy-Webhook-URL
   - `COOLIFY_TOKEN` – Bearer Token (falls nötig)

## GitHub Actions Workflow

Bei jedem Push auf `main`:

1. **build-and-push**: Baut Docker Image → GHCR
2. **deploy**: Verbindung via Tailscale → triggert Coolify-Webhook

Unterstützt Node.js 24 (aktualisierte Actions).

## Ohuhu Palette

Die `palette.ts` enthält ~220 digitale Annäherungen der Ohuhu-Marker (alle Serien: Y, YR, R, RV, V, BV, B, BG, G, E, N, W, C).

**Achtung**: Das sind community-gemessene Annäherungen. Falls ein Marker nicht passt, einfach den Hex-Override im App verwenden.

## Änderungshistorie

- ✅ **SQLite-Datenbank** mit `better-sqlite3` (statt localStorage)
- ✅ **Passwort-basierte Authentifizierung** (HttpOnly Cookies)
- ✅ **SEO-Schutz** (robots.txt + noindex Meta-Tags)
- ✅ **Erweiterte Ohuhu-Palette** (220+ Farben statt 30)
- ✅ **GitHub Actions Node.js 24 Ready** (aktuelle Docker Actions)
- ✅ **Tailscale OAuth Integration** für CI/CD
