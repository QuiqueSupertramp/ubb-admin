<script setup lang="ts">
import CustomIcon from '@/components/icons/CustomIcon.vue'
import { LAYOUTS } from '@/lib/layouts'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const currentLayout = computed(() => route.meta.layout as LAYOUTS | undefined)

const layoutsWithoutFooter = [LAYOUTS.EMPTY]

const hasFooter = computed(() => {
  if (!currentLayout.value) return true
  return !layoutsWithoutFooter.includes(currentLayout.value)
})
</script>

<template>
  <footer v-if="hasFooter">
    <div class="h-20 bg-body-light sticky bottom-0 inset-x-0 flex jsutify-center items-center">
      <div class="flex justify-between items-center w-full h-full px-10">
        <RouterLink :to="`/teams`">
          <CustomIcon class="text-text-dark" icon="IconTeam" :width="28" />
        </RouterLink>
        <div class="w-0.5 h-8 opacity-50 bg-text-dark"></div>
        <RouterLink :to="`/teams`">
          <CustomIcon class="text-text-dark" icon="IconLeague" :width="28" />
        </RouterLink>
        <div class="w-0.5 h-8 opacity-50 bg-text-dark"></div>
        <RouterLink :to="`/teams`">
          <CustomIcon class="text-text-dark" icon="IconStadium" :width="28" />
        </RouterLink>
        <div class="w-0.5 h-8 opacity-50 bg-text-dark"></div>
        <RouterLink :to="`/teams`">
          <CustomIcon class="text-text-dark" icon="IconClub" :width="28" />
        </RouterLink>
        <!-- <CustomButton :icon-width="28" icon="IconTeam" :variant="VARIANTS.transparent" />
        <CustomButton :icon-width="28" icon="IconLeague" :variant="VARIANTS.transparent" />
        <div class="w-8"></div>
        <CustomButton :icon-width="28" icon="IconStadium" :variant="VARIANTS.transparent" />
        <CustomButton :icon-width="28" icon="IconClub" :variant="VARIANTS.transparent" /> -->
      </div>
      <!-- <CustomButton
      class="absolute -top-6 inset-x-0 w-fit"
      :icon-width="28"
      icon="IconClub"
      :variant="VARIANTS.ghost"
    /> -->
      <!-- <div class="absolute -top-8 inset-x-0">
        <RouterLink :to="`/`" class="rounded-full bg-blue">
          <div class="border border-border bg-text-dark rounded-full p-4 w-fit mx-auto">
            <CustomIcon class="text-body-light" icon="IconHome" :width="28" />
          </div>
        </RouterLink>
      </div> -->
    </div>
  </footer>
</template>
