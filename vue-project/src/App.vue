<template>
  <div class="appVUE">
    <AppHeader ref="header"></AppHeader>
    <button @click="ChangeCount">{{ count }}</button>
    <span class="text">App CSS</span>
    <teleport to="body">
      <modal-vue
        @cancel="onToggleModal"
        v-if="isShowModel"
        title="Props title"
        content="content"
        theme="2"
      >
        <!--v-slot:footer  -> gọi outlet theo name  -->
        <template v-slot:footer>
          <h2>Slot Footer</h2>
        </template>
        <template v-slot:header>
          <h2>Slot Header</h2>
        </template>
        <span>slot default</span>
      </modal-vue>
    </teleport>
    <!-- @cancel : lắng nghe sự kiện cancel của components con -->
    <button @click="onToggleModal">ToggleModal</button>
  </div>
</template>
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
import ModalVue from './components/ModalVue.vue'
export default {
  name: 'App',
  components: {
    AppHeader,
    ModalVue
  },
  data() {
    return {
      count: 0,
      isShowModel: true
    }
  },
  methods: {
    ChangeCount() {
      // console.log(this.$refs.header.greet()) // truy xuất đến ref của component AppHeader lấy methods
      console.log(this.$refs.header.message) // truy xuất đến ref của component AppHeader lấy data
      this.count++ // truy xuất đến biến count
    },
    onToggleModal() {
      console.log('running')
      this.isShowModel = !this.isShowModel
    }
  }
}
</script>

<style scoped>
.appVUE {
  width: 100%;
}
</style>
