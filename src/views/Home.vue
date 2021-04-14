<template>
  <div class="Home">
    <header class="header">
      <div class="logo">Logo</div>
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
    <search-section />
    <recipe-data />
  </div>
</template>

<script>
import SearchSection from "../components/SearchSection.vue";
import RecipeData from "../components/RecipeData.vue";

export default {
  components: { SearchSection, RecipeData },
  name: "Home",
  data() {
    return {
      query: "",
    };
  },
};
</script>

<style scoped>
header {
  width: 80%;
  height: 50vh;
  min-width: 500px;
  background: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
  font-size: 1.3rem;
  font-weight: 500;
}

@media (max-width: 675px) {
}
</style>
