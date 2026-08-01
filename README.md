# Garagenpark Musterort — Website

Moderne Nuxt 4 + Tailwind CSS 4 Website für eine Garagenvermietung, mit Startseite, Preise-Seite, Foto-Galerie, Video-Rundgang und Geländeplan.

## Setup

Voraussetzung: Node.js **22.19+** (oder 24.11+/26+) — Nuxt 4.5 läuft nicht auf älteren Node-Versionen.

```bash
npm install
npm run dev
```

Öffne danach `http://localhost:3000`.

> Falls `npm install`/`npm run dev` mit einem Fehler wie "Cannot find native
> binding" abbricht: das liegt fast immer an einer zu alten Node-Version.
> Mit `node -v` prüfen und ggf. via `nvm install 22` bzw. `brew install node@22`
> aktualisieren, dann `node_modules` und `package-lock.json` löschen und neu
> installieren.

## Build

```bash
npm run build
npm run preview
```

## Struktur

- `app/pages/index.vue` — Startseite (Hero, Features, Galerie, Video, Lageplan, CTA)
- `app/pages/preise.vue` — Preise (reine Infodarstellung, nicht auswählbar), FAQ, Kontaktformular
- `app/pages/impressum.vue`, `app/pages/datenschutz.vue`, `app/pages/agb.vue` — Rechts-Platzhalterseiten
- `app/components/` — wiederverwendbare Sektionen
- `public/images/` — Platzhalter-SVGs (Galerie & Geländeplan)
- `public/videos/` — Platzhalter-Videos (Hero-Loop & Rundgang)

Design: helles Theme (weißer Hintergrund, dunkler Text, Amber-Akzent). Nur die
Hero-Sektion auf der Startseite bleibt bewusst dunkel, da sie über dem
Hintergrundvideo liegt.

## Vor dem Livegang ersetzen

1. **Firmenname & Kontaktdaten**: in `TheHeader.vue`, `TheFooter.vue`, `pages/impressum.vue`, `pages/agb.vue`, `nuxt.config.ts` (Meta-Tags).
2. **Fotos**: `public/images/garage-0*.svg` durch echte Fotos (jpg/webp) ersetzen, Pfade in `GallerySection.vue` anpassen.
3. **Videos**: `public/videos/hero-loop.mp4` & `rundgang.mp4` durch echtes Material ersetzen (gleicher Dateiname reicht, oder Pfade in `HeroSection.vue` / `VideoShowcase.vue` anpassen). Große Videos ggf. extern hosten (z. B. Cloudflare Stream, Bunny) statt selbst auszuliefern.
4. **Geländeplan**: `public/images/lageplan.svg` durch euren echten Lageplan ersetzen (SVG, PNG oder JPG möglich).
5. **Preise**: in `pages/preise.vue` (`plans`-Array) auf echte Preise/Größen anpassen. Die Karten sind bewusst nicht klickbar/auswählbar gestaltet (reine Information) — die Kontaktaufnahme läuft über das Formular weiter unten.
6. **Rechtstexte**: `impressum.vue`, `datenschutz.vue` und `agb.vue` sind Platzhalter — vor Livegang durch rechtsgültige, anwaltlich geprüfte Texte ersetzen (siehe Hinweise in den Dateien).
7. **Kontaktformular**: `handleSubmit` in `preise.vue` sendet aktuell nirgends hin — an ein Backend/E-Mail-Service (z. B. Formspree, eigene API-Route) anbinden.
