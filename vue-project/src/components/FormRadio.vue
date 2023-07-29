<template>
  <div class="flex items-center justify-center gap-x-[5px]">
    <input
      :id="label"
      :name="name"
      type="radio"
      :ref="fieldRef"
      :value="value"
      @change="handleChange($event.target.value)"
    />
    <label :for="label">{{ label }}</label>
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    name: String,
    value: {},
    fieldRef: {}
  },
  methods: {
    handleChange(selectedValue) {
      this.$emit('update:currentValue', selectedValue)
    }
  }
}
</script>

<style scoped>
/* Styles if needed */
</style>
