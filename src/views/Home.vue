<template>
  <div class="Home">
    <div class="container">
      <header class="header">
        <div class="logo">Foodies</div>
        <nav>
          <ul class="nav-list">
            <li class="nav-list-item">
              <a class="nav-link" href="#">About</a>
            </li>
            <li class="nav-list-item">
              <a class="nav-link" href="#">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <article>
        <!-- <div class="hero-section">
          <div class="quote">
            <h1>All happiness depends on a leisurely breakfast</h1>
            <br />
            <p>John Gunther</p>
          </div>
        </div> -->
        <hero-section />
        <search-section />
        <recipe-data />
      </article>
    </div>
    <!--End of container-->
  </div>
</template>

<script>
import HeroSection from "@/components/HeroSection.vue";
import SearchSection from "../components/SearchSection.vue";
import RecipeData from "../components/RecipeData.vue";

export default {
  components: { SearchSection, RecipeData, HeroSection },
  name: "Home",
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  min-width: 480px;
  margin: 0 auto;
}
header {
  height: 10vh;

  background-color: #fff;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.logo {
  color: black;
}
.nav-list {
  display: flex;
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

/* @media (max-width: 675px) {
} */
.hero-section {
  height: 80vh;
  background-color: #fff;
  background-image: url("../assets/bg-bread.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
}

.quote {
  max-width: 70%;
  position: absolute;
  bottom: 22%;
  right: 5%;
  background: rgb(rgba(231, 132, 221, 0.2));
  backdrop-filter: blur(2px);
}
</style>
