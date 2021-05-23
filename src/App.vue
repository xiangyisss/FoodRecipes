<template>
  <div id="nav">
    <router-link :to="{ name: 'Home' }">Home</router-link>
  </div>
  <router-view />
</template>

<script></script>

<style>
* {
  padding: 0%;
  margin: 0%;
  box-sizing: border-box;
  font-family: Lora;
  font-size: 16px;
  color: #37474f;
}

a {
  text-decoration: none;
  color: inherit;
}
/* #nav {
  width: 80%;
  background-color: yellowgreen;
} */
</style>
