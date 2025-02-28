<script setup lang="ts">
import { useForm } from '@/composables/form/useForm'
import { loginModel, type LoginModel } from './loginModel'
import CustomInput from '@/components/forms/CustomInput.vue'
import CustomInputPassword from '@/components/forms/CustomInputPassword.vue'
import CustomButton from '@/components/buttons/CustomButton.vue'

const submit = async () => {
  console.log('form.value:', form.value)
}

const { form, formOptions, formErrors, onSubmit, isFormSent, isFormReady } = useForm<LoginModel>({
  model: loginModel,
  submit,
})
</script>

<template>
  <form class="flex flex-col gap-12 items-center" @submit.prevent="onSubmit">
    <div class="flex flex-col gap-5 items-center w-full">
      <CustomInput
        v-model="form.email"
        :options="formOptions.email"
        :errors="formErrors.email"
        :show-errors="isFormSent"
      />
      <CustomInputPassword
        v-model="form.password"
        :options="formOptions.password"
        :errors="formErrors.password"
        :show-errors="isFormSent"
      />
    </div>

    <CustomButton
      type="submit"
      text="Acceder"
      icon="IconSignup"
      icon-position="after"
      :disabled="!isFormReady"
    />
  </form>
</template>
