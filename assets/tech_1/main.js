const vue = Vue.createApp({
  template: `
      <h1>Chao {{check? name : name1}}</h1>
      <button v-on:click="onChangeName">change Name 1</button>
      <button @click="onHideMoal">ON/OFF modal</button>
      <div class="model" v-if="isModal">
        <h1>Content</h1>
      </div>
   `,
  data() {
    return {
      name: "Nguyen",
      name1: "Nguyen1",
      check: true,
      isModal: false,
    };
  },
  methods: {
    onChangeName() {
      console.log(this);
      this.name = "Change Name";
    },
    onHideMoal() {
      this.isModal = !this.isModal;
    },
  },
});

vue.mount("#vue");
