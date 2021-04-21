<template>
  <div class="home">
    <header class="header">
      <router-link :to="{ name: 'Home' }">
        <div class="logo">Foodies</div>
      </router-link>
      <div class="search-icon">
        <router-link :to="{ name: 'search' }">
          <img src="../assets/search-icon.svg" alt="search image" />
        </router-link>
      </div>
    </header>

    <div class="hero-section"></div>

    <a href="#"
      ><img
        src="../assets/up-arrow.svg"
        class="goToTop"
        alt="up-arrow"
        @click="scrollToTop"
        v-if="showButton"
    /></a>

    <recipe-data class="recipe-data" />
  </div>
</template>

<script>
import RecipeData from "@/components/RecipeData.vue";
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
  width: 100%;
}
.header {
  width: 90%;
  margin: 0 auto;
  height: 8vh;
  background-color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  margin: 0 0.75rem;
}

.search-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.search-icon:hover {
  cursor: pointer;
  background-color: black;
  opacity: 0.6;
  transition: 0.3s;
}

.search-icon:hover img {
  filter: invert(99%) sepia(59%) saturate(0%) hue-rotate(337deg)
    brightness(110%) contrast(100%);
}

.search-icon img {
  display: block;
  margin: 0 0.75rem;
  width: 1rem;
  transition: all 0.2s ease;
}

.nav-link {
  text-decoration: none;
  color: black;
}
.nav-list-item {
  list-style: none;
  margin-left: 12px;
}
.header {
  font-size: 1rem;
  font-weight: 500;
}

.hero-section {
  background-image: url("../assets/bg-orange.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  min-height: 80vh;
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

@media (min-width: 600px) {
}
/* .hero-section {
  height: 80vh;
  background-color: #fff;
  background-image: url("../assets/bg-bread.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
} */

/*.quote {
  max-width: 70%;
  position: absolute;
  bottom: 22%;
  right: 5%;
  background: rgb(rgba(231, 132, 221, 0.2));
  backdrop-filter: blur(2px);
} */
</style>
