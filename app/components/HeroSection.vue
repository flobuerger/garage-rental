<script setup lang="ts">
const videoEl = ref<HTMLVideoElement | null>(null)
const isMuted = ref(true)

function toggleMute() {
  if (!videoEl.value) return
  videoEl.value.muted = !videoEl.value.muted
  isMuted.value = videoEl.value.muted
}
</script>

<template>
  <section class="relative overflow-hidden bg-white">
    <div class="relative mx-auto max-w-7xl px-4 pb-20 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <span class="inline-flex items-center gap-2 rounded-full border border-ink-900/10 bg-ink-50 px-3.5 py-1.5">
            <svg viewBox="0 0 24 24" class="h-3.5 w-3.5 text-brand-500" fill="currentColor">
              <path d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11.2Z" />
            </svg>
            <span class="text-xs font-semibold text-ink-700">Neu in Marchtrenk</span>
          </span>

          <h1 class="mt-5 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl lg:text-[3.4rem] lg:leading-[1.05]">
            Deine Garage in Marchtrenk — einfach gemacht
          </h1>

          <p class="mt-6 max-w-lg text-lg leading-relaxed text-ink-500">
            Eine trockene, videoüberwachte Garage mit ebenerdiger Zufahrt,
            durch Schranken gesichert. Reservieren, einziehen, fertig.
          </p>

          <ul class="mt-7 space-y-3">
            <li class="flex items-center gap-2.5 text-sm font-medium text-ink-700">
              <svg viewBox="0 0 24 24" class="h-5 w-5 shrink-0 text-brand-600" fill="none" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Videoüberwachung rund um die Uhr
            </li>
            <li class="flex items-center gap-2.5 text-sm font-medium text-ink-700">
              <svg viewBox="0 0 24 24" class="h-5 w-5 shrink-0 text-brand-600" fill="none" stroke="currentColor" stroke-width="2.2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              Zufahrt durch Schranken gesichert
            </li>
          </ul>

          <div class="mt-9 flex flex-col gap-3 sm:flex-row">
            <NuxtLink to="/preise" class="btn-primary w-full sm:w-auto">
              Garage anfragen
            </NuxtLink>
            <NuxtLink to="/#lageplan" class="btn-secondary w-full sm:w-auto">
              Standort ansehen
            </NuxtLink>
          </div>
        </div>

        <div class="relative">
          <div class="group relative overflow-hidden rounded-lg border border-ink-900/8 shadow-card-hover">
            <video
              ref="videoEl"
              class="aspect-[4/3] w-full object-cover"
              autoplay
              loop
              muted
              playsinline
              poster="/images/baustelle-05.jpg"
            >
              <source src="/videos/hero.mp4" type="video/mp4" />
            </video>

            <button
              type="button"
              class="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-ink-950/60 text-white backdrop-blur transition hover:bg-ink-950/80"
              :aria-label="isMuted ? 'Ton einschalten' : 'Ton ausschalten'"
              @click="toggleMute"
            >
              <svg v-if="isMuted" viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="m16 9 5 6m0-6-5 6" />
              </svg>
              <svg v-else viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 5 6 9H3v6h3l5 4V5Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.5 8.5a5 5 0 0 1 0 7M18 6a8.5 8.5 0 0 1 0 12" />
              </svg>
            </button>
          </div>

          <div class="absolute -bottom-6 -left-6 hidden rounded-lg border border-ink-900/8 bg-white p-4 shadow-card-hover sm:flex sm:items-center sm:gap-3">
            <span class="flex h-10 w-10 items-center justify-center rounded-md bg-brand-50 text-brand-600">
              <svg viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10l4.55-2.28A1 1 0 0121 8.62v6.76a1 1 0 01-1.45.9L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </span>
            <div>
              <p class="font-heading text-sm font-bold text-ink-900">8 Garagen frei</p>
              <p class="text-xs text-ink-500">aktuell verfügbar</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
