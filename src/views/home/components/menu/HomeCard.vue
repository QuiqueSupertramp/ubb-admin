<script lang="ts" setup>
import CustomIcon from '@/components/icons/CustomIcon.vue'
import { VARIANTS } from '@/lib/variants'

interface Props {
  text: string
  to: string
  icon: string
  variant: VARIANTS
}

defineProps<Props>()
</script>

<template>
  <div
    class="flex flex-col items-center gap-3 w-full shadow-xl shadow-body-dark border border-border"
  >
    <RouterLink :to="`/${to}`" class="rounded w-full">
      <div class="rounded p-6 flex flex-col justify-center items-center gap-3">
        <CustomIcon class="text-text-dark" :icon="icon" :width="40" />
        <span class="text-text-dark tracking-wide italic">{{ text }}</span>
      </div>
    </RouterLink>
  </div>
</template>
