<!-- 
1. Global Styles : scoped : chỉ ăn trong compoent ModalVue -> css cục bộ  , ko có -> global
2. Props : truyền từ cha sang con , validator enum
3. Emit Events : component cha lắng nghe sk từ component con -> con :this.$emit('cancel') - cha : @cancel="onToggleModal"
4. slot  : giống outlet có thêm slot name
5. Event Modifiers : modifiers các sự kiện
6.  Teleport Component : dịch chuyển component

-->
<template>
  <div class="modal">
    <slot name="header" />
    <h1 class="text">Modal Vew CSS - {{ title }}</h1>
    <!-- Dinatic classes -->
    <slot />
    <p :class="{ active123: theme === '2' }">content - {{ content }}</p>
    <slot name="footer" />
    <!--slot : outlet -->
    <button @click.self="onCloseModal">cancel</button>
  </div>
</template>
<script>
export default {
  //khai báo props
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: String,
      default: '123'
    },
    theme: {
      type: String,
      default: '1',
      validator(val) {
        //enum : khi k có trong đây thì cảnh báo
        return ['1', '2', '3', '4'].includes(val)
      }
    }
  },
  data() {
    return {}
  },
  methods: {
    onCloseModal() {
      this.$emit('cancel') // emit envents : Gửi sự kiện cho thằng cha
    }
  }
}
</script>
<style scoped>
/* scoped : chỉ ăn trong compoent ModalVue -> css cục bộ  , ko có -> global*/
.text {
  color: red;
}
.active123 {
  color: blueviolet;
}
.modal {
  width: 300px;
  height: 150px;
  background-color: burlywood;
  color: #000;
}
</style>
