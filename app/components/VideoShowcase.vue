<script setup lang="ts">
const videoEl = ref<HTMLVideoElement | null>(null)
const playing = ref(false)

function togglePlay() {
  if (!videoEl.value) return
  if (videoEl.value.paused) {
    videoEl.value.play()
    playing.value = true
  } else {
    videoEl.value.pause()
    playing.value = false
  }
}
</script>

<template>
  <section id="video" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 items-center gap-10 lg:grid-cols-2">
      <div>
        <span class="text-xs font-semibold uppercase tracking-wider text-brand-600">Video-Rundgang</span>
        <h2 class="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">
          Wirf einen Blick hinein
        </h2>
        <p class="mt-4 text-ink-500">
          In diesem kurzen Rundgang zeigen wir dir Zufahrt, Garagenreihen und
          Ausstattung — so weißt du genau, was dich erwartet, bevor du dich
          entscheidest.
        </p>
        <ul class="mt-6 space-y-3 text-sm text-ink-600">
          <li class="flex items-center gap-2.5">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-400" /> Breite Zufahrtswege für alle Fahrzeuggrößen
          </li>
          <li class="flex items-center gap-2.5">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-400" /> Beleuchtete Wege und Vorplätze
          </li>
          <li class="flex items-center gap-2.5">
            <span class="h-1.5 w-1.5 rounded-full bg-brand-400" /> Kameraüberwachte Ein- und Ausfahrt
          </li>
        </ul>
      </div>

      <div class="glass-panel group relative aspect-video overflow-hidden p-0">
        <video
          ref="videoEl"
          class="h-full w-full object-cover"
          loop
          muted
          playsinline
          poster="/images/garage-02.svg"
          @click="togglePlay"
        >
          <source src="/videos/rundgang.mp4" type="video/mp4" />
        </video>

        <button
          type="button"
          class="absolute inset-0 flex items-center justify-center bg-ink-950/30 transition group-hover:bg-ink-950/40"
          :class="{ 'opacity-0 group-hover:opacity-100': playing }"
          aria-label="Video abspielen"
          @click="togglePlay"
        >
          <span
            class="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-ink-950 shadow-glow transition group-hover:scale-105"
          >
            <svg v-if="!playing" viewBox="0 0 24 24" class="ml-1 h-6 w-6" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
            <svg v-else viewBox="0 0 24 24" class="h-6 w-6" fill="currentColor">
              <path d="M6 5h4v14H6zM14 5h4v14h-4z" />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </section>
</template>
