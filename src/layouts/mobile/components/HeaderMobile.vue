<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CustomButton from '@/components/buttons/CustomButton.vue'
import CustomIcon from '@/components/icons/CustomIcon.vue'
import { LAYOUTS } from '@/lib/layouts'
import { VARIANTS } from '@/lib/variants'

const route = useRoute()

const currentLayout = computed(() => route.meta.layout as LAYOUTS | undefined)

const layoutsWithoutHeader = [LAYOUTS.EMPTY]

const hasHeader = computed(() => {
  if (!currentLayout.value) return true
  return !layoutsWithoutHeader.includes(currentLayout.value)
})
</script>

<template>
  <header v-if="hasHeader" class="p-4">
    <div class="flex justify-between items-center">
      <RouterLink to="/">
        <span class="font-bold">UBB ADMIN</span>
      </RouterLink>

      <CustomButton :variant="VARIANTS.transparent" class="text-text-light">
        <CustomIcon icon="IconMenu" />
      </CustomButton>
    </div>
  </header>
</template>
