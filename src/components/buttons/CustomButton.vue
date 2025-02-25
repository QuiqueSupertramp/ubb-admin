<script lang="ts" setup>
import { VARIANTS } from '@/lib/variants.ts'

interface Props {
  text?: string
  variant?: VARIANTS
  icon?: string
  iconPosition?: 'before' | 'after'
  iconWidth?: number
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  variant: VARIANTS.blue,
  iconPosition: 'before',
})

const customButtonClass = {
  [VARIANTS.blue]: 'bg-blue border-blue text-text-light',
  [VARIANTS.red]: 'bg-red border-red text-text',
  [VARIANTS.yellow]: 'bg-yellow border-yellow text-body',
  [VARIANTS.green]: 'bg-green border-green text-body',
  [VARIANTS.ghost]: 'bg-transparent border-text-dark text-text-dark',
  [VARIANTS.transparent]: 'bg-transparent border-transparent text-text-dark',
}
</script>

<template>
  <button
    class="flex gap-2 items-center justify-center py-3 px-8 rounded-full border-2"
    :class="[
      customButtonClass[variant],
      disabled ? 'opacity-50 pointer-events-none' : 'opacity-100 cursor-pointer',
    ]"
    :disabled="disabled"
  >
    <slot />
  </button>
</template>
