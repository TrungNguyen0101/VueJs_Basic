<template>
  <form @submit="onSubmit" class="p-4 screen">
    <FormInput
      label="Username"
      name="username"
      placeholder="Enter your username"
      :value="username.value"
      :errorMessage="username.error && username.error.message"
      :fieldRef="username.ref"
      @update:value="username.value = $event"
    />
    <FormInput
      label="Password"
      name="password"
      type="password"
      placeholder="Enter your password"
      :value="password.value"
      :errorMessage="password.error && password.error.message"
      :fieldRef="password.ref"
      @update:value="password.value = $event"
    />
    <FormInput
      label="Email"
      name="email"
      type="email"
      placeholder="Enter your email"
      :value="email.value"
      :errorMessage="email.error && email.error.message"
      :fieldRef="email.ref"
      @update:value="email.value = $event"
    />
    <div class="flex items-center gap-x-[20px]">
      <FormRadio
        label="Nam"
        name="isActive"
        type="radio"
        :value="0"
        :fieldRef="isActive.ref"
        @update:current-value="isActive.value = $event"
      />
      <FormRadio
        label="Nữ"
        name="isActive"
        type="radio"
        :value="1"
        :fieldRef="isActive.ref"
        @update:currentValue="isActive.value = $event"
      />
      <FormRadio
        label="Khác"
        name="isActive"
        type="radio"
        :value="3"
        :fieldRef="isActive.ref"
        @update:currentValue="isActive.value = $event"
      />
    </div>
    <p v-if="isActive?.error?.message" class="text-red-500">{{ isActive?.error?.message }}</p>

    <button type="submit" class="px-4 py-2 bg-red-500 rounded-xl">Submit</button>
  </form>
</template>

<script>
import FormInput from './FormInput.vue'
import FormRadio from './FormRadio.vue'
import { useForm } from 'vue-hooks-form'

export default {
  components: {
    FormInput,
    FormRadio
  },
  setup() {
    const { useField, handleSubmit } = useForm({
      defaultValues: {},
      validateMode: 'change'
    })
    const username = useField('username', {
      rule: { required: true, message: 'Vui lòng nhập vào' }
    })
    const email = useField('email', {
      rule: [{ required: true, message: 'Vui lòng nhập vào' }]
    })
    const password = useField('password', {
      rule: [
        { required: true, message: 'Vui lòng nhập vào' },
        { min: 6, message: 'Phải có ít nhất 6 ký tự' }
      ]
    })
    const isActive = useField('isActive', {
      rule: { required: true, message: 'Vui lòng chọn 1 mục' }
    })
    const onSubmit = (data) => {
      console.log(data)
    }
    return {
      username,
      password,
      isActive,
      email,
      onSubmit: handleSubmit(onSubmit)
    }
  },
  data() {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.screen {
  margin-top: 50px;
}
.field {
  display: flex;
  gap: 0 20px;
}
.field1 {
  display: flex;
  gap: 0 5px;
  user-select: none;
}
.textInput {
  display: flex;
  gap: 0 10px;
}
</style>
