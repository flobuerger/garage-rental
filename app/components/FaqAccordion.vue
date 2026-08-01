<script setup lang="ts">
type Faq = { q: string; a: string }

defineProps<{ items: Faq[] }>()

const openIndex = ref<number | null>(0)

function toggle(i: number) {
  openIndex.value = openIndex.value === i ? null : i
}
</script>

<template>
  <div class="divide-y divide-ink-900/8 overflow-hidden rounded-2xl border border-ink-900/8 bg-white shadow-sm">
    <div v-for="(item, i) in items" :key="item.q">
      <button
        type="button"
        class="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        :aria-expanded="openIndex === i"
        @click="toggle(i)"
      >
        <span class="text-sm font-semibold text-ink-900 sm:text-base">{{ item.q }}</span>
        <svg
          viewBox="0 0 24 24"
          class="h-5 w-5 shrink-0 text-brand-600 transition-transform duration-200"
          :class="{ 'rotate-45': openIndex === i }"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <Transition
        enter-active-class="transition-all duration-200 ease-out"
        enter-from-class="grid-rows-[0fr] opacity-0"
        enter-to-class="grid-rows-[1fr] opacity-100"
        leave-active-class="transition-all duration-150 ease-in"
        leave-from-class="grid-rows-[1fr] opacity-100"
        leave-to-class="grid-rows-[0fr] opacity-0"
      >
        <div v-if="openIndex === i" class="grid grid-rows-[1fr]">
          <div class="overflow-hidden">
            <p class="px-5 pb-4 text-sm leading-relaxed text-ink-500">{{ item.a }}</p>
          </div>
        </div>
      </Transition>
    </div>
  </div>
</template>
