<script setup lang="ts">
const stats = [
  { value: '120', label: 'Garagenstellplätze' },
  { value: '8', label: 'Aktuell verfügbar' },
  { value: '6', label: 'Besucherstellplätze' },
  { value: '5.200', label: 'm² Grundstücksfläche' },
]
</script>

<template>
  <section class="border-y border-ink-900/8 bg-white">
    <div class="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-ink-900/8 px-4 sm:grid-cols-4 sm:divide-y-0 sm:px-6 lg:px-8">
      <div v-for="stat in stats" :key="stat.label" class="px-4 py-10 text-center sm:py-12">
        <p class="font-heading text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">{{ stat.value }}</p>
        <p class="mt-2 text-xs font-medium uppercase tracking-wide text-ink-500">
          {{ stat.label }}
        </p>
      </div>
    </div>
  </section>
</template>
