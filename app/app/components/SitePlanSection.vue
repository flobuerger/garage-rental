<script setup lang="ts">
const mapEmbedSrc =
  'https://www.openstreetmap.org/export/embed.html?bbox=14.1116%2C48.1894%2C14.1316%2C48.2054&layer=mapnik&marker=48.1974%2C14.1216'
const mapLinkHref = 'https://www.openstreetmap.org/?mlat=48.1974&mlon=14.1216#map=16/48.1974/14.1216'
</script>

<template>
  <section id="lageplan" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">04</span> Lageplan</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
        So findest du zu uns
      </h2>
      <p class="mt-4 text-ink-500">
        Roseggerstraße, 4614 Marchtrenk.
      </p>
    </div>

    <div class="mt-12 mx-auto max-w-3xl">
      <div class="relative overflow-hidden rounded-lg border border-ink-900/8 shadow-card">
        <iframe
          :src="mapEmbedSrc"
          title="Standort Garagenpark Marchtrenk auf OpenStreetMap"
          class="h-[380px] w-full sm:h-[440px]"
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
            Garagenpark Marchtrenk
          </span>
        </div>
      </div>

      <div class="mt-4 text-center">
        <a
          :href="mapLinkHref"
          target="_blank"
          rel="noopener"
          class="text-sm font-semibold text-ink-900 underline hover:no-underline"
        >
          Größere Karte öffnen ↗
        </a>
      </div>
    </div>
  </section>
</template>
