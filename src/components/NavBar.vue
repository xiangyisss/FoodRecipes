<template>
  <header class="header">
    <router-link :to="{ name: 'Home' }">
      <div class="logo">Good Food</div>
    </router-link>
    <div class="search-icon">
      <router-link :to="{ name: 'search-page' }">
        <!-- <img src="../assets/search-icon.svg" alt="search image" /> -->
        <div class="menu-bar">
          <div class="line line-1"></div>
          <div class="line line-2"></div>
          <div class="line line-3"></div>
        </div>
      </router-link>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style scoped>
.header {
  width: 100%;
  margin: 0 auto;
  height: 56px;
  background-color: rgb(255, 212, 21);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 1;
}
.logo {
  margin: 0 0.75rem;
  color: white;
  font-weight: 700;
}

.search-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: 0.7s;
  position: absolute;
  top: 0;
  right: 1rem;
}

.search-icon:hover {
  cursor: pointer;
  background-color: black;
  opacity: 0.6;
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

.line {
  width: 1.5rem;
  height: 0.25rem;
  background-color: #fff;
  margin: 0.25rem;
  border-radius: 0.25rem;
}
</style>
