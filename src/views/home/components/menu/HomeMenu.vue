<script lang="ts" setup>
import HomeButton from './HomeButton.vue'
</script>

<template>
  <div class="h-full grid grid-cols-2 gap-y-8 gap-x-0">
    <HomeButton text="Equipos" to="teams" icon="IconTeam" variant="red" />
    <HomeButton text="Ligas" to="leagues" icon="IconLeague" variant="yellow" />
    <HomeButton text="Clubs" to="clubs" icon="IconClub" variant="blue" />
    <HomeButton text="Pabellones" to="stadiums" icon="IconStadium" variant="green" />
  </div>
</template>
