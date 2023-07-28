<script>
/* C1 */
// import AppHeader from './components/AppHeader.vue'
// import { ref } from 'vue'
// const count = ref(0)
// const header = ref(null)
// const h1 = ref(null)
// function ChangeCount() {
//   // console.log(h1.value)
//   console.log(header.value)
//   count.value++
// }
/* c2 */
import AppHeader from './components/AppHeader.vue'
export default {
  name: 'App',
  components: {
    AppHeader
  },
  data() {
    return {
      count: 0
    }
  },
  methods: {
    ChangeCount() {
      console.log(this.$refs.header.greet()) // truy xuất đến ref của component AppHeader lấy methods
      console.log(this.$refs.header.message) // truy xuất đến ref của component AppHeader lấy data
      this.count++ // truy xuất đến biến count
    }
  }
}
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />
    <AppHeader ref="header"></AppHeader>
    <button @click="ChangeCount">{{ count }}</button>
  </header>
</template>

<style scoped></style>
