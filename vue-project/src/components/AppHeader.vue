<!-- File: AppHeader.vue -->
<template>
  <h1>This is AppHeader</h1>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello, Vue!'
    }
  },
  methods: {
    greet() {
      alert(this.message)
    }
  }
}
</script>

<style scoped></style>
