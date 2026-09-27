<script setup lang="ts">
const photos = [
  { src: '/images/baustelle-05.jpg', label: 'Außenansicht Garagenpark', span: 'sm:row-span-2' },
  { src: '/images/baustelle-01.jpg', label: 'Innenraum mit Elektroverteiler', span: '' },
  { src: '/images/baustelle-02.jpg', label: 'Gebäudeecke, verputzt', span: '' },
  { src: '/images/baustelle-03.jpg', label: 'Innenraum mit Deckenbeleuchtung', span: '' },
  { src: '/images/baustelle-04.jpg', label: 'Blick durch das geöffnete Tor', span: 'sm:row-span-2' },
]
</script>

<template>
  <section id="galerie" class="mx-auto max-w-7xl scroll-mt-24 px-4 py-24 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-2xl text-center">
      <span class="eyebrow justify-center"><span class="eyebrow-index">05</span> Impressionen</span>
      <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">Die Anlage im Überblick</h2>
      <p class="mt-4 text-ink-500">
        Erste Eindrücke von der im Bau befindlichen Anlage. Weitere Fotos folgen, sobald sie fertiggestellt ist.
      </p>
    </div>

    <div class="mt-14 grid auto-rows-[180px] grid-cols-2 gap-4 sm:auto-rows-[200px] sm:grid-cols-3">
      <figure
        v-for="photo in photos"
        :key="photo.src"
        class="group relative overflow-hidden rounded-lg border border-ink-900/8"
        :class="photo.span"
      >
        <img
          :src="photo.src"
          :alt="photo.label"
          loading="lazy"
          class="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div class="absolute inset-0 bg-gradient-to-t from-ink-950/85 via-ink-950/10 to-transparent" />
        <figcaption class="absolute inset-x-0 bottom-0 p-4 text-sm font-medium text-white">
          {{ photo.label }}
        </figcaption>
      </figure>
    </div>
  </section>
</template>
