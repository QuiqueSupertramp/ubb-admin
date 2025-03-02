<script lang="ts" setup>
import CustomIcon from '@/components/icons/CustomIcon.vue'

interface Props {
  text: string
  to: string
  icon: string
}

defineProps<Props>()
</script>

<template>
  <div class="flex flex-col items-center gap-3">
    <RouterLink :to="`/${to}`" class="rounded-full">
      <div class="border border-border rounded-full p-6 w-fit mx-auto">
        <CustomIcon class="text-text-dark" :icon="icon" :width="40" />
      </div>
    </RouterLink>
    <span class="text-text-light">{{ text }}</span>
  </div>
</template>
