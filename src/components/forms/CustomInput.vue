<script lang="ts" setup>
import { computed } from 'vue'
import CustomIcon from '@/components/icons/CustomIcon.vue'
import type { FormError } from '@/composables/form/types'

export interface InputOptions {
  type?: 'text' | 'number' | 'search' | 'email' | 'password'
  label: string
  labelIcon?: string
  id?: string
  autocomplete?: boolean
  inputClass?: string
  required?: boolean
}

interface Props {
  options: InputOptions
  errors?: FormError
  showErrors?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  options: (props) => ({
    type: 'text',
    autocomplete: false,
    required: false,
    id: props.options.id,
    label: props.options.label,
    labelIcon: props.options.labelIcon,
    inputClass: props.options.inputClass,
  }),
  showErrors: () => false,
})

const inputValue = defineModel()

const currentId = computed(() => props.options.id ?? props.options.label)
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label :for="currentId" class="flex gap-2 items-stretch text-text">
      <CustomIcon v-if="options.labelIcon" :icon="options.labelIcon" :width="16" />
      <span>{{ options.label }}</span>
      <span v-if="options.required">*</span>
    </label>
    <div class="relative">
      <input
        :type="options.type"
        :id="currentId"
        v-model="inputValue"
        spellcheck="false"
        :autocomplete="options.autocomplete ? 'on' : 'off'"
        class="w-full"
        :class="[options.inputClass, { invalid: showErrors && !!errors }]"
      />
      <slot />
    </div>
    <ul v-if="showErrors && errors">
      <li v-for="error in errors" :key="error" class="text-red-400 text-sm ml-3">{{ error }}</li>
    </ul>
  </div>
</template>
