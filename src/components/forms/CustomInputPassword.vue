<script lang="ts" setup>
import { computed, ref } from 'vue'
import CustomInput from './CustomInput.vue'
import CustomIcon from '../icons/CustomIcon.vue'

interface Props {
  label?: string
  labelIcon?: string
  inputClass?: string
  required?: boolean
  error?: string | undefined
}

defineProps<Props>()

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
      :type="type"
      :autocomplete="false"
      v-model="inputValue"
      :error="error"
      :label="label"
      :label-icon="labelIcon"
      :required="required"
      :input-class="inputClass + 'px-0 pl-4 pr-12'"
    >
      <button class="absolute inset-y-0 right-0 flex items-center pr-3">
        <CustomIcon class="text-text-dark" :icon="passwordIcon" @click.prevent="togglePassword" />
      </button>
    </CustomInput>
  </div>
</template>
