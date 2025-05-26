<script setup lang="ts">
import CustomButton from '@/components/buttons/CustomButton.vue'
import CustomInput from '@/components/forms/CustomInput.vue'
import CustomInputPassword from '@/components/forms/CustomInputPassword.vue'
import useLogin from './useLogin'

const { form, isLoading, errors, handleSubmit } = useLogin()
</script>

<template>
  <form class="flex flex-col gap-12 items-center" @submit.prevent="handleSubmit">
    <div class="flex flex-col gap-5 items-center w-full">
      <CustomInput
        v-model="form.email"
        :error="errors?.email"
        label="Correo Electronico"
        type="email"
        :autocomplete="true"
        :required="true"
      />
      <CustomInputPassword
        v-model="form.password"
        label="Contraseña"
        :required="true"
        :error="errors?.password"
      />
    </div>

    <CustomButton
      type="submit"
      text="Acceder"
      icon="IconSignup"
      icon-position="after"
      :disabled="isLoading || !!errors"
    />
  </form>
</template>
