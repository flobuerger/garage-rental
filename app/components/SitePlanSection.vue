<script setup lang="ts">
const legend = [
  { color: 'bg-brand-500', label: 'frei / verfügbar' },
  { color: 'bg-sky-300', label: 'reserviert' },
  { color: 'bg-ink-700', label: 'vermietet' },
]

const rows = [
  { label: 'Reihe A', units: ['vermietet', 'vermietet', 'frei', 'vermietet', 'vermietet', 'reserviert', 'vermietet', 'frei'] },
  { label: 'Reihe B', units: ['vermietet', 'frei', 'vermietet', 'vermietet', 'reserviert', 'vermietet', 'vermietet', 'vermietet'] },
  { label: 'Reihe C', units: ['reserviert', 'vermietet', 'vermietet', 'frei', 'vermietet', 'vermietet', 'vermietet', 'vermietet'] },
]

const fillColor: Record<string, string> = {
  frei: '#f79009',
  reserviert: '#7dd3fc',
  vermietet: '#363b45',
}

// --- Geländeplan-Geometrie ---
const UNIT_W = 62
const UNIT_H = 56
const GAP = 6
const ROW_X = 32
const ROW_Y: Record<string, number> = { 'Reihe A': 46, 'Reihe B': 146, 'Reihe C': 246 }
const LANE_Y: Record<string, number> = { AB: 102, BC: 202 }
const LANE_H = 44
const ENTRANCE_Y = 302
const ENTRANCE_H = 66
const SPINE_X = 578
const SPINE_W = 42

const rowUnits = rows.map((row) => ({
  label: row.label,
  y: ROW_Y[row.label],
  units: row.units.map((status, i) => ({
    x: ROW_X + i * (UNIT_W + GAP),
    status,
    fill: fillColor[status],
    number: i + 1,
  })),
}))

const mapEmbedSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=14.2758%2C48.2989%2C14.2958%2C48.3149&layer=mapnik&marker=48.3069%2C14.2858'
const mapLinkHref = 'https://www.openstreetmap.org/?mlat=48.3069&mlon=14.2858#map=16/48.3069/14.2858'
</script>

<template>
  <section id="lageplan" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">08</span> Geländeplan</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        Finde deinen Stellplatz
      </h2>
      <p class="mt-4 text-ink-500">
        Der Übersichtsplan zeigt alle Garagenreihen, Zufahrtswege und den
        aktuellen Belegungsstatus auf einen Blick.
      </p>
    </div>

    <div class="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-5">
      <!-- Schematischer Geländeplan -->
      <div class="rounded-lg border border-ink-900/8 bg-white p-5 shadow-card sm:p-7 lg:col-span-3">
        <svg viewBox="0 0 640 400" class="w-full" role="img" aria-label="Geländeplan mit allen Garagenreihen und Zufahrten">
          <!-- Grundstück -->
          <rect x="16" y="16" width="608" height="368" rx="8" fill="#fafafa" stroke="#16181d" stroke-opacity="0.12" />

          <!-- Fahrwege -->
          <rect :x="ROW_X" :y="LANE_Y.AB" :width="SPINE_X + SPINE_W - ROW_X" :height="LANE_H" fill="#e5e7ea" />
          <rect :x="ROW_X" :y="LANE_Y.BC" :width="SPINE_X + SPINE_W - ROW_X" :height="LANE_H" fill="#e5e7ea" />
          <rect :x="ROW_X" :y="ENTRANCE_Y" :width="SPINE_X + SPINE_W - ROW_X" :height="ENTRANCE_H" fill="#e5e7ea" />
          <rect :x="SPINE_X" y="46" :width="SPINE_W" :height="ENTRANCE_Y + ENTRANCE_H - 46" fill="#e5e7ea" />

          <!-- Garagenreihen -->
          <g v-for="row in rowUnits" :key="row.label">
            <text :x="ROW_X" :y="row.y - 8" font-size="11" font-weight="700" fill="#575f6c" letter-spacing="0.06em">
              {{ row.label.toUpperCase() }}
            </text>
            <g v-for="unit in row.units" :key="unit.x">
              <rect
                :x="unit.x"
                :y="row.y"
                :width="UNIT_W"
                :height="UNIT_H"
                rx="2"
                :fill="unit.fill"
                stroke="#16181d"
                stroke-opacity="0.15"
              >
                <title>{{ row.label }}, Platz {{ unit.number }}: {{ unit.status }}</title>
              </rect>
              <line
                :x1="unit.x + 6"
                :x2="unit.x + UNIT_W - 6"
                :y1="row.y + UNIT_H - 3"
                :y2="row.y + UNIT_H - 3"
                stroke="#16181d"
                stroke-opacity="0.35"
                stroke-width="3"
              />
              <text
                :x="unit.x + UNIT_W / 2"
                :y="row.y + UNIT_H / 2 + 4"
                font-size="11"
                font-weight="600"
                text-anchor="middle"
                :fill="unit.status === 'vermietet' ? '#ffffff' : '#16181d'"
                fill-opacity="0.85"
              >
                {{ unit.number }}
              </text>
            </g>
          </g>

          <!-- Besucherparkplätze -->
          <g>
            <rect :x="ROW_X" :y="ENTRANCE_Y + 10" width="150" height="46" rx="3" fill="#ffffff" stroke="#16181d" stroke-opacity="0.15" />
            <line v-for="n in 4" :key="n" :x1="ROW_X + n * 30" :x2="ROW_X + n * 30" :y1="ENTRANCE_Y + 10" :y2="ENTRANCE_Y + 56" stroke="#16181d" stroke-opacity="0.15" />
            <text :x="ROW_X + 8" :y="ENTRANCE_Y + 30" font-size="9" font-weight="700" fill="#575f6c">P</text>
            <text :x="ROW_X + 8" :y="ENTRANCE_Y + 44" font-size="8" fill="#767e8c">Besucher</text>
          </g>

          <!-- Zufahrt -->
          <g>
            <path :d="`M ${SPINE_X + SPINE_W / 2 - 10} 396 L ${SPINE_X + SPINE_W / 2} 372 L ${SPINE_X + SPINE_W / 2 + 10} 396 Z`" fill="#f79009" />
            <text :x="SPINE_X + SPINE_W / 2" y="372" font-size="10" font-weight="700" text-anchor="middle" fill="#93370d">
              Zufahrt
            </text>
          </g>

          <!-- Kompass -->
          <g transform="translate(596, 40)">
            <circle r="16" fill="#ffffff" stroke="#16181d" stroke-opacity="0.15" />
            <path d="M 0 -11 L 4 4 L 0 0 L -4 4 Z" fill="#16181d" fill-opacity="0.6" />
            <text y="-18" font-size="9" font-weight="700" text-anchor="middle" fill="#575f6c">N</text>
          </g>
        </svg>

        <div class="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-ink-900/8 pt-5">
          <div v-for="item in legend" :key="item.label" class="flex items-center gap-2 text-xs text-ink-600">
            <span class="h-2.5 w-2.5 rounded-sm" :class="item.color" />
            {{ item.label }}
          </div>
        </div>
      </div>

      <!-- Standort -->
      <div class="flex flex-col gap-6 lg:col-span-2">
        <div class="relative overflow-hidden rounded-lg border border-ink-900/8 shadow-card">
          <iframe
            :src="mapEmbedSrc"
            title="Standort Garagenpark Musterort auf OpenStreetMap"
            class="h-[220px] w-full"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          />

          <div class="pointer-events-none absolute left-3 top-3 flex items-center gap-2 rounded-md bg-white px-2.5 py-1.5 shadow-card">
            <span class="flex h-5 w-5 items-center justify-center rounded bg-ink-900">
              <svg viewBox="0 0 24 24" class="h-3 w-3 text-brand-500" fill="currentColor">
                <path d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11.2Z" />
              </svg>
            </span>
            <span class="font-heading text-[11px] font-bold uppercase tracking-wide text-ink-900">
              Garagenpark Musterort
            </span>
          </div>
        </div>

        <div class="glass-panel p-5 sm:p-6">
          <h3 class="font-heading text-base font-bold text-ink-900">So findest du zu uns</h3>
          <p class="mt-2 text-sm leading-relaxed text-ink-500">
            Musterstraße 12, 4020 Musterort. Zufahrt über die Südseite des
            Grundstücks, Besucherparkplätze direkt am Eingang.
          </p>
          <a
            :href="mapLinkHref"
            target="_blank"
            rel="noopener"
            class="mt-4 inline-block text-sm font-semibold text-ink-900 underline hover:no-underline"
          >
            Größere Karte öffnen ↗
          </a>
        </div>
      </div>
    </div>

    <p class="mt-4 text-center text-xs text-ink-500">
      Plan und Standort beispielhaft, unverbindlich. Aktuelle Verfügbarkeit auf Anfrage.
    </p>
  </section>
</template>
