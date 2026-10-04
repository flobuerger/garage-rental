<script setup lang="ts">
const steps = [
  {
    n: '1',
    title: 'Online anfragen',
    desc: 'Anfrage online stellen — du bekommst eine Rückmeldung innerhalb der nächsten 48h.',
  },
  {
    n: '2',
    title: 'Unterlagen & Vertrag',
    desc: 'Du bekommst eine Nachricht mit Infos zu den benötigten Unterlagen und zur Vertragsunterzeichnung.',
  },
  {
    n: '3',
    title: 'Schlüsselübergabe',
    desc: 'Schlüsselübergabe und sofort einziehen.',
  },
]

const { open } = useLightbox()
const image = { src: '/images/baustelle-04.jpg', alt: 'Blick durch das geöffnete Garagentor in den Innenraum' }
</script>

<template>
  <section class="bg-ink-50">
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <button
          type="button"
          class="block cursor-zoom-in overflow-hidden rounded-lg border border-ink-900/8 shadow-card"
          :aria-label="`${image.alt} vergrößern`"
          @click="open([image])"
        >
          <img
            :src="image.src"
            :alt="image.alt"
            class="aspect-[3/4] w-full object-cover sm:aspect-[4/5]"
          />
        </button>

        <div>
          <span class="eyebrow"><span class="eyebrow-index">03</span> So funktioniert's</span>
          <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
            In 3 Schritten zur eigenen Garage
          </h2>
          <p class="mt-4 text-ink-500">
            Online alles erledigen und vor Ort nur noch unterschreiben.
          </p>

          <ol class="mt-8 space-y-7">
            <li v-for="step in steps" :key="step.n" class="flex gap-4">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-900 font-heading text-sm font-bold text-brand-500">
                {{ step.n }}
              </span>
              <div>
                <h3 class="font-heading text-base font-bold text-ink-900">{{ step.title }}</h3>
                <p class="mt-1 text-sm leading-relaxed text-ink-500">{{ step.desc }}</p>
              </div>
            </li>
          </ol>

          <NuxtLink to="/preise#kontakt" class="btn-primary mt-9 inline-flex">
            Jetzt anfragen
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>
