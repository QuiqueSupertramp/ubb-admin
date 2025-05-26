<script lang="ts" setup>
// import HomeButton from './HomeButton.vue'
import { VARIANTS } from '@/lib/variants'
import HomeCard from './HomeCard.vue'
</script>

<template>
  <div class="h-full grid grid-cols-2 gap-y-6 gap-x-6">
    <!-- <HomeButton text="Equipos" to="teams" icon="IconTeam" variant="red" />
    <HomeButton text="Ligas" to="leagues" icon="IconLeague" variant="yellow" />
    <HomeButton text="Clubs" to="clubs" icon="IconClub" variant="blue" />
    <HomeButton text="Pabellones" to="stadiums" icon="IconStadium" variant="green" /> -->
    <HomeCard text="Equipos" to="teams" icon="IconTeam" :variant="VARIANTS.blue" />
    <HomeCard text="Ligas" to="leagues" icon="IconLeague" :variant="VARIANTS.blue" />
    <HomeCard text="Clubs" to="clubs" icon="IconClub" :variant="VARIANTS.blue" />
    <HomeCard text="Pabellones" to="stadiums" icon="IconStadium" :variant="VARIANTS.blue" />
  </div>
</template>
