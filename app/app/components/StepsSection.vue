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
</script>

<template>
  <section class="bg-ink-50">
    <div class="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <div class="overflow-hidden rounded-lg border border-ink-900/8 shadow-card">
          <img
            src="https://images.unsplash.com/photo-1586582636676-9ca2d4cedb9a?q=80&w=1400&auto=format&fit=crop"
            alt="Übergabe der Garage — zwei Personen besprechen die Schlüsselübergabe"
            class="aspect-[4/3] w-full object-cover"
          />
        </div>

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
