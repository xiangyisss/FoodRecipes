<template>
  <div
    class="hero-slide-container"
    v-for="index in [currentIndex]"
    :key="index"
  >
    <img :src="currentImage" alt="current image" />
    <div class="quote">
      <h4>{{ currentQuote.quote }}</h4>
      <br />
      <p>{{ currentQuote.by }}</p>
    </div>
  </div>
  <button @click="next">Next</button>
  <button @click="prev">Prev</button>
</template>

<script>
export default {
  data() {
    return {
      images: [
        require("../assets/bg-bread.jpg"),
        require("../assets/bg-fish.jpg"),
        require("../assets/bg-snack.jpg"),
      ],
      quotes: [
        {
          quote: "All happiness depends on a leisurely breakfast",
          by: "John Gunther",
        },
        {
          quote: "People who love to eat are always the best people",
          by: "Julia Child",
        },
        {
          quote: "Snack time heals all wounds",
          by: "Bridger Winegar",
        },
      ],
      currentIndex: 0,
      timer: null,
    };
  },
  mounted() {
    this.startSlideImage();
  },
  methods: {
    startSlideImage() {
      this.timer = setInterval(this.next, 3000);
    },
    next() {
      this.currentIndex++;
    },
    prev() {
      this.currentIndex--;
    },
  },
  computed: {
    currentImage() {
      return this.images[Math.abs(this.currentIndex) % this.images.length];
    },
    currentQuote() {
      return this.quotes[Math.abs(this.currentIndex) % this.quotes.length];
    },
  },
};
</script>

<style scoped>
.hero-slide-container {
  position: relative;
  overflow: hidden;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.1s ease;
}

img {
  object-fit: cover;
  max-width: 100%;
  height: auto;
}
.quote {
  width: 70%;
  position: absolute;
  bottom: 22%;
  left: 50%;
  background: rgb(rgba(231, 132, 221, 0.2));
  backdrop-filter: blur(2px);
}
</style>
