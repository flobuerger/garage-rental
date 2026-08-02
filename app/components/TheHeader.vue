<script setup lang="ts">
const open = ref(false)

const links = [
  { label: 'Start', to: '/' },
  { label: 'Galerie', to: '/#galerie' },
  { label: 'Lageplan', to: '/#lageplan' },
  { label: 'Preise', to: '/preise' },
]

const route = useRoute()
watch(
  () => route.fullPath,
  () => {
    open.value = false
  },
)
</script>

<template>
  <header class="sticky top-0 z-50">
    <div class="border-b border-ink-900/8 bg-white/80 backdrop-blur-xl">
      <div class="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <NuxtLink to="/" class="flex items-center gap-3">
          <span class="flex h-9 w-9 items-center justify-center rounded-md bg-ink-900">
            <svg viewBox="0 0 24 24" class="h-4.5 w-4.5 text-brand-500" fill="currentColor">
              <path d="M3 11.2 12 4l9 7.2V20a1 1 0 0 1-1 1h-4.5a1 1 0 0 1-1-1v-4.5h-3V20a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V11.2Z" />
            </svg>
          </span>
          <span class="font-heading text-sm font-bold uppercase tracking-[0.1em] text-ink-900">
            Garagenpark Musterort
          </span>
        </NuxtLink>

        <nav class="hidden items-center gap-8 md:flex">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="text-xs font-semibold uppercase tracking-wide text-ink-500 transition hover:text-ink-900"
          >
            {{ link.label }}
          </NuxtLink>
        </nav>

        <div class="hidden md:block">
          <NuxtLink to="/preise#kontakt" class="btn-primary !px-5 !py-2.5 text-sm">
            Jetzt anfragen
          </NuxtLink>
        </div>

        <button
          type="button"
          class="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-ink-900/10 text-ink-900 md:hidden"
          :aria-expanded="open"
          aria-label="Menü öffnen"
          @click="open = !open"
        >
          <svg v-if="!open" viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M4 7h16M4 12h16M4 17h16" />
          </svg>
          <svg v-else viewBox="0 0 24 24" class="h-5 w-5" fill="none" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>

    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0 -translate-y-2"
      enter-to-class="opacity-100 translate-y-0"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-2"
    >
      <div v-if="open" class="border-b border-ink-900/8 bg-white/95 backdrop-blur-xl md:hidden">
        <nav class="flex flex-col gap-1 px-4 py-4">
          <NuxtLink
            v-for="link in links"
            :key="link.label"
            :to="link.to"
            class="rounded-lg px-3 py-2.5 text-sm font-medium text-ink-700 hover:bg-ink-900/5 hover:text-ink-900"
          >
            {{ link.label }}
          </NuxtLink>
          <NuxtLink to="/preise#kontakt" class="btn-primary mt-2 !py-2.5 text-sm">
            Jetzt anfragen
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>
