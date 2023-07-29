<template>
  <div class="flex flex-col text-[#969696]">
    <label>{{ label }}</label>
    <input
      :name="name"
      :placeholder="placeholder"
      :type="type"
      :value="value"
      @input="handleChange"
      :ref="fieldRef"
      class="bg-[#f5f5f5] rounded py-[10px] px-[10px] leading-[24px] duration-300 focus:bg-[#f97e7e] focus:placeholder-black text-[16px] leading outline-none text-black max-w-[300px]"
    />
    <p v-if="errorMessage" class="text-red-500">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    placeholder: String,
    type: {
      type: String,
      default: 'text'
    },
    name: String,
    value: {},
    errorMessage: String,
    fieldRef: {}
  },
  methods: {
    handleChange(event) {
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>
/* Styles if needed */
</style>
