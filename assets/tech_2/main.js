const vue = Vue.createApp({
  template: ``,
  data() {
    return {
      x: 0,
      y: 0,
      image: "facebook.com",
      arr: [
        {
          name: "sp1",
          price: "12000",
          isCart: false,
        },
        {
          name: "sp2",
          price: "15000",
          isCart: false,
        },
        {
          name: "sp3",
          price: "17000",
          isCart: true,
        },
      ],
    };
  },
  methods: {
    onLogEven(e, newX, newY) {
      this.x = newX;
      this.y = newY;
    },
    onMouseMove(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },
    onToggle(e, item) {
      item.isCart = !item.isCart;
    },
  },
  computed: {
    newArr() {
      return this.arr.filter((item) => item.price < 16000);
    },
  },
});

vue.mount("#vue");
