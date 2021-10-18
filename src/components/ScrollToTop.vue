<template>
  <div id="button" v-show="scrollY" @click="scrollToTop">Top</div>
</template>

<script>
export default {
  name: "ScrollToTop",
  data() {
    return {
      scrollTimer: 0,
      scrollY: 0,
    };
  },
  methods: {
    showButton() {
      if (this.scrollTimer) return;
      this.scrollTimer = setTimeout(() => {
        this.scrollY = window.scrollY;
        clearTimeout(this.scrollTimer);
        this.scrollTimer = 0;
      }, 100);
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
  mounted() {
    window.addEventListener("scroll", this.showButton);
  },
};
</script>

<style scoped>
#button {
  width: 2.5rem;
  height: 2.5rem;
  background-color: rgb(120, 120, 197);
  border-radius: 50%;
  color: white;
  font-size: 1rem;
  cursor: pointer;
  position: fixed;
  bottom: 10%;
  left: 90%;
  z-index: 1;
  text-align: center;
  display: grid;
  align-items: center;
}
@media screen and (max-width: 600px) {
  #button {
    position: fixed;
    bottom: 5%;
    left: 85%;
  }
}
</style>