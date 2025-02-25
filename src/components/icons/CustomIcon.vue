<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

interface Props {
  icon: string
  width?: number
}
withDefaults(defineProps<Props>(), {
  width: 20,
})
</script>

<template>
  <component
    v-if="icon"
    :is="defineAsyncComponent(() => import(`./components/${icon}.vue`))"
    :width="width"
  ></component>
</template>
