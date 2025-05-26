<script lang="ts" setup>
import CustomIcon from '@/components/icons/CustomIcon.vue'

interface Props {
  type?: 'text' | 'number' | 'search' | 'email' | 'password'
  label?: string
  labelIcon?: string
  autocomplete?: boolean
  inputClass?: string
  required?: boolean
  error?: string
}

withDefaults(defineProps<Props>(), {
  type: 'text',
  autocomplete: false,
  required: false,
})

const inputValue = defineModel()

const currentId = 'inputid' + crypto.randomUUID()
</script>

<template>
  <div class="flex flex-col gap-2 w-full">
    <label
      v-if="label"
      :for="currentId"
      class="flex gap-2 items-stretch text-text-dark text-sm pl-1"
    >
      <CustomIcon v-if="labelIcon" :icon="labelIcon" :width="16" />
      <div>
        <span>{{ label }}</span>
        <span v-if="required"> *</span>
      </div>
    </label>
    <div class="relative">
      <input
        :type="type"
        :id="currentId"
        v-model="inputValue"
        :required="required"
        spellcheck="false"
        :autocomplete="autocomplete ? 'on' : 'off'"
        class="w-full outline-0 rounded-lg border border-transparent bg-body-light px-4 py-3 text-text transition"
        :class="[{ invalid: !!error }]"
        v-bind="$attrs"
      />
      <slot />
    </div>
    <div v-if="error" class="text-red-400 text-xs ml-3">{{ error }}</div>
  </div>
</template>
