<template>
  <div class="home">
    <div class="hero-section"></div>
    <!-- <a href="#"
      ><img
        src="../assets/up-arrow.svg"
        class="goToTop"
        alt="up-arrow"
        @click="scrollToTop"
        v-if="showButton"
    /></a> -->
    <div class="popular-recipes">Popular recipes</div>

    <recipe-data />
  </div>
</template>

<script>
import RecipeData from "@/components/RecipeData.vue";
// import NavBar from "../components/NavBar.vue";
export default {
  components: { RecipeData },
  name: "Home",
  data() {
    return {
      query: "",
    };
  },
  methods: {
    showButton() {
      let y = window.scrollY;
      if (y >= 200) {
        this.goToTop.style.display = "block";
      } else {
        this.goToTop.style.display = "none";
      }
    },
    scrollToTop() {
      // const el = this.$refs.goToTop;
      // if (el) {
      //   el.scrollIntoView({ behavior: "smooth" });
      // }

      window.scrollTo(0, document.body.scrollHeight);
    },
  },
};
</script>

<style scoped>
.home {
  margin-top: 3.5rem;
}
.hero-section {
  background-image: url("../assets/bg-bread.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 400px;
  /* width: 100%; */
}

/* .hero-section img {
  max-width: 100%;
  display: block;
  height: auto;
} */

.popular-recipes {
  text-align: center;
  font-weight: 600;
  margin: 56px auto;
}

.goToTop {
  width: 2rem;
  position: fixed;
  top: 80%;
  left: 87%;
  z-index: 99;
}

.goToTop:hover {
  filter: invert(27%) sepia(70%) saturate(1209%) hue-rotate(150deg)
    brightness(97%) contrast(101%);
  transition: all 0.2s ease;
}

@media (min-width: 575px) {
  .hero-section {
    min-height: 70vh;
  }
}

@media (min-width: 780px) {
  .hero-section {
    min-height: calc(100vh - 56px);
  }
}
</style>
