<script lang="ts" setup>
import { computed, ref } from 'vue'
import CustomInput, { type InputOptions } from './CustomInput.vue'
import CustomIcon from '../icons/CustomIcon.vue'
import type { FormError } from '@/composables/form/types'

interface Props {
  options: Omit<InputOptions, 'type'>
  errors?: FormError
  showErrors?: boolean
}

withDefaults(defineProps<Props>(), {
  options: (props) => ({
    autocomplete: false,
    id: props.options.id,
    label: props.options.label,
    labelIcon: props.options.labelIcon,
    inputClass: props.options.inputClass,
  }),
  showErrors: () => false,
})

const inputValue = defineModel()

const isShowingPassword = ref(false)

const passwordIcon = computed(() => (isShowingPassword.value ? 'IconEyeClose' : 'IconEyeOpen'))

const type = computed(() => (isShowingPassword.value ? 'text' : 'password'))

const togglePassword = () => {
  isShowingPassword.value = !isShowingPassword.value
}
</script>

<template>
  <div class="relative w-full">
    <CustomInput
      :options="{ ...options, type }"
      v-model="inputValue"
      :errors="errors"
      :show-errors="showErrors"
    >
      <button class="absolute inset-y-0 right-0 flex items-center pr-3">
        <CustomIcon class="text-text-dark" :icon="passwordIcon" @click.prevent="togglePassword" />
      </button>
    </CustomInput>
  </div>
</template>
