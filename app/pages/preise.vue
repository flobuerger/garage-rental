<script setup lang="ts">
useSeoMeta({
  title: 'Preise — Garagenpark Musterort',
  description:
    'Transparente Monatsmieten für Garagenstellplätze in Musterort. Kleine, mittlere und große Garagen, faire Konditionen.',
})

function formatEUR(value: number) {
  return value.toFixed(2).replace('.', ',')
}

const vatRate = 0.2

const plans = [
  {
    name: 'Kompakt',
    size: 'ca. 14–16 m²',
    brutto: 69,
    highlight: false,
    desc: 'Ideal für Kleinwagen, Motorrad oder als zusätzlicher Stauraum.',
    features: [
      'Einzelgarage, ebenerdig',
      'Elektrisches Rolltor',
      'Videoüberwachte Zufahrt',
      'Monatlich kündbar',
    ],
  },
  {
    name: 'Standard',
    size: 'ca. 18–20 m²',
    brutto: 89,
    highlight: true,
    desc: 'Unsere meistgemietete Größe — passt für die meisten PKW bequem.',
    features: [
      'Einzelgarage, ebenerdig',
      'Elektrisches Rolltor',
      'Videoüberwachte Zufahrt',
      'Strom­anschluss optional',
      'Monatlich kündbar',
    ],
  },
  {
    name: 'Komfort XL',
    size: 'ca. 24–28 m²',
    brutto: 129,
    highlight: false,
    desc: 'Doppelgarage oder viel Platz für SUV, Anhänger und Lagerung.',
    features: [
      'Doppelgarage möglich',
      'Elektrisches Rolltor',
      'Videoüberwachte Zufahrt',
      'Strom­anschluss inklusive',
      'Flexible Vertragslaufzeit',
    ],
  },
].map((plan) => {
  const netto = plan.brutto / (1 + vatRate)
  const ust = plan.brutto - netto
  return { ...plan, netto, ust, kaution: plan.brutto * 2 }
})

const extras = [
  { label: 'Kaution', value: '2 Monatsmieten' },
  { label: 'Mindestlaufzeit', value: 'Keine (monatlich kündbar)' },
  { label: 'Kündigungsfrist', value: '1 Monat zum Monatsende' },
  { label: 'Nebenkosten', value: 'Strom nach Verbrauch (optional)' },
]

const faqs = [
  {
    q: 'Sind die Preise inklusive Mehrwertsteuer?',
    a: 'Ja, die ausgewiesenen Bruttopreise enthalten die gesetzliche Mehrwertsteuer von 20 %. Die Nettomiete weisen wir zur Transparenz zusätzlich aus.',
  },
  {
    q: 'Wie lange ist die Mindestvertragslaufzeit?',
    a: 'Standardmäßig gibt es keine Mindestlaufzeit — der Vertrag ist monatlich mit einer Frist von einem Monat zum Monatsende kündbar. Bei Jahresverträgen gewähren wir einen Rabatt.',
  },
  {
    q: 'Ist die Kaution nach Auszug rückzahlbar?',
    a: 'Ja, die Kaution in Höhe von zwei Monatsmieten wird nach Auszug und ordnungsgemäßer Übergabe der Garage vollständig zurückerstattet.',
  },
  {
    q: 'Kann ich die Garage vorab besichtigen?',
    a: 'Selbstverständlich. Vereinbare einfach über das Kontaktformular oder telefonisch einen Besichtigungstermin — wir zeigen dir gerne freie Einheiten vor Ort.',
  },
  {
    q: 'Gibt es Rabatt bei Anmietung mehrerer Garagen?',
    a: 'Ja, ab der zweiten Garage gewähren wir einen Mengenrabatt. Sprich uns bei deiner Anfrage einfach darauf an.',
  },
]

const form = reactive({ name: '', email: '', size: '', message: '' })
const submitted = ref(false)

function handleSubmit() {
  submitted.value = true
}
</script>

<template>
  <div>
    <section class="mx-auto max-w-7xl px-4 pb-4 pt-16 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <span class="eyebrow justify-center"><span class="eyebrow-index">01</span> Preise</span>
        <h1 class="mt-3 text-4xl font-bold tracking-tight text-ink-900 sm:text-5xl">
          Faire Mieten, klar kalkuliert
        </h1>
        <p class="mt-4 text-ink-500">
          Ein Überblick über unsere Garagengrößen und Richtpreise — alle Pakete
          monatlich kündbar, ohne versteckte Kosten.
        </p>
      </div>
    </section>

    <section class="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <div
          v-for="plan in plans"
          :key="plan.name"
          class="flex flex-col overflow-hidden rounded-md border bg-white"
          :class="plan.highlight ? 'border-ink-900' : 'border-ink-900/10'"
        >
          <div
            v-if="plan.highlight"
            class="bg-brand-500 py-2 text-center text-xs font-semibold uppercase tracking-wide text-ink-950"
          >
            Meistgemietete Größe
          </div>

          <div class="flex flex-1 flex-col p-8">
            <h3 class="text-lg font-bold text-ink-900">{{ plan.name }}</h3>
            <p class="mt-1 text-sm text-ink-500">{{ plan.size }}</p>
            <p class="mt-3 text-sm text-ink-500">{{ plan.desc }}</p>

            <dl class="mt-6 space-y-2.5 border-t border-ink-900/8 pt-6 text-sm">
              <div class="flex items-center justify-between">
                <dt class="text-ink-500">Nettomiete / Monat</dt>
                <dd class="text-ink-700">{{ formatEUR(plan.netto) }} €</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-ink-500">zzgl. 20 % USt.</dt>
                <dd class="text-ink-700">{{ formatEUR(plan.ust) }} €</dd>
              </div>
              <div class="flex items-center justify-between border-t border-ink-900/8 pt-2.5">
                <dt class="font-semibold text-ink-900">Bruttomiete / Monat</dt>
                <dd class="text-xl font-bold text-ink-900">{{ formatEUR(plan.brutto) }} €</dd>
              </div>
              <div class="flex items-center justify-between">
                <dt class="text-ink-500">Kaution (einmalig)</dt>
                <dd class="text-ink-700">{{ formatEUR(plan.kaution) }} €</dd>
              </div>
            </dl>

            <ul class="mt-6 flex-1 space-y-2.5 border-t border-ink-900/8 pt-6">
              <li v-for="f in plan.features" :key="f" class="flex items-start gap-2.5 text-sm text-ink-700">
                <svg viewBox="0 0 24 24" class="mt-0.5 h-4 w-4 shrink-0 text-brand-600" fill="none" stroke="currentColor" stroke-width="2.2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {{ f }}
              </li>
            </ul>

            <p class="mt-6 text-xs text-ink-400">Richtpreis, unverbindlich</p>
          </div>
        </div>
      </div>

      <p class="mt-6 text-center text-xs text-ink-500">
        Alle Preise sind Beispielwerte zur Orientierung, kein Angebot im rechtlichen Sinn.
        Für ein individuelles Angebot einfach unten Kontakt aufnehmen.
      </p>
    </section>

    <section class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
      <span class="eyebrow justify-center"><span class="eyebrow-index">02</span> Konditionen</span>
      <div class="mt-6 grid grid-cols-1 divide-y divide-ink-900/8 border-y border-ink-900/8 sm:grid-cols-4 sm:divide-x sm:divide-y-0">
        <div v-for="extra in extras" :key="extra.label" class="px-4 py-6 text-center">
          <p class="text-xs font-medium uppercase tracking-wide text-ink-500">{{ extra.label }}</p>
          <p class="mt-1.5 text-sm font-semibold text-ink-900">{{ extra.value }}</p>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div class="text-center">
        <span class="eyebrow justify-center"><span class="eyebrow-index">03</span> FAQ</span>
        <h2 class="mt-3 text-3xl font-bold tracking-tight text-ink-900 sm:text-4xl">
          Häufig gestellte Fragen
        </h2>
        <p class="mt-4 text-ink-500">Antworten rund um Miete, Vertrag und Ausstattung.</p>
      </div>
      <div class="mt-10">
        <FaqAccordion :items="faqs" />
      </div>
    </section>

    <section id="kontakt" class="mx-auto max-w-7xl scroll-mt-24 px-4 pb-24 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-10 lg:grid-cols-5 lg:gap-12">
        <div class="lg:col-span-2">
          <div class="overflow-hidden rounded-lg border border-ink-900/8 shadow-card">
            <img
              src="https://images.unsplash.com/photo-1617917142884-402d396a50aa?q=80&w=1000&auto=format&fit=crop"
              alt="Heller, aufgeräumter Garagen-Innenraum"
              class="aspect-[4/3] w-full object-cover"
            />
          </div>

          <span class="eyebrow mt-8"><span class="eyebrow-index">04</span> Kontakt</span>
          <h2 class="mt-3 text-2xl font-bold text-ink-900">Direkt erreichbar</h2>

          <div class="mt-6 space-y-4">
            <a href="mailto:info@garagenpark-musterort.at" class="flex items-center gap-3 text-sm text-ink-700 hover:text-ink-900">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-900 text-brand-500">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </span>
              <span>
                <span class="block text-xs text-ink-500">E-Mail schreiben</span>
                info@garagenpark-musterort.at
              </span>
            </a>
            <a href="tel:+43000000000" class="flex items-center gap-3 text-sm text-ink-700 hover:text-ink-900">
              <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-md bg-ink-900 text-brand-500">
                <svg viewBox="0 0 24 24" class="h-4 w-4" fill="none" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </span>
              <span>
                <span class="block text-xs text-ink-500">Anrufen</span>
                +43 000 000 000
              </span>
            </a>
          </div>
        </div>

        <div class="glass-panel p-8 sm:p-10 lg:col-span-3">
          <h2 class="text-2xl font-bold text-ink-900">Jetzt Garage anfragen</h2>
          <p class="mt-2 text-sm text-ink-500">
            Formular ausfüllen — wir melden uns innerhalb eines Werktags bei dir.
          </p>

          <form v-if="!submitted" class="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2" @submit.prevent="handleSubmit">
            <div class="sm:col-span-1">
              <label for="name" class="text-xs font-medium text-ink-600">Name</label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
                placeholder="Dein Name"
              />
            </div>
            <div class="sm:col-span-1">
              <label for="email" class="text-xs font-medium text-ink-600">E-Mail</label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
                placeholder="name@email.at"
              />
            </div>
            <div class="sm:col-span-2">
              <label for="size" class="text-xs font-medium text-ink-600">Gewünschte Größe</label>
              <select
                id="size"
                v-model="form.size"
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
              >
                <option value="">Bitte wählen (optional)</option>
                <option value="kompakt">Kompakt — ca. 14–16 m²</option>
                <option value="standard">Standard — ca. 18–20 m²</option>
                <option value="xl">Komfort XL — ca. 24–28 m²</option>
              </select>
            </div>
            <div class="sm:col-span-2">
              <label for="message" class="text-xs font-medium text-ink-600">Nachricht</label>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="mt-1.5 w-full rounded-md border border-ink-900/15 bg-white px-4 py-2.5 text-sm text-ink-900 placeholder-ink-400 outline-none focus:border-ink-900/40 focus:ring-2 focus:ring-ink-900/10"
                placeholder="Gewünschter Mietbeginn, Fragen..."
              />
            </div>
            <div class="sm:col-span-2 flex items-start gap-2.5">
              <input id="privacy" type="checkbox" required class="mt-1 h-4 w-4 rounded border-ink-900/25 bg-white accent-ink-900" />
              <label for="privacy" class="text-xs leading-relaxed text-ink-500">
                Ich habe die
                <NuxtLink to="/datenschutz" class="text-ink-900 underline hover:no-underline">Datenschutzerklärung</NuxtLink>
                und die
                <NuxtLink to="/agb" class="text-ink-900 underline hover:no-underline">AGB</NuxtLink>
                gelesen und bin mit der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage einverstanden.
              </label>
            </div>
            <div class="sm:col-span-2">
              <button type="submit" class="btn-primary w-full sm:w-auto">
                Anfrage senden
              </button>
            </div>
          </form>

          <div v-else class="mt-8 rounded-md border border-ink-900/15 bg-ink-50 p-6 text-sm text-ink-700">
            Danke, {{ form.name || 'für deine Anfrage' }}! Wir haben deine Nachricht erhalten und melden uns
            innerhalb eines Werktags.
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
