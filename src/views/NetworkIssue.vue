<template>
  <div>
    <h3 class="text-warning bg-dark">
      It looks you're experiencing some network issues, please click the back
      button and try again.
    </h3>
    <router-link :to="{ name: 'Home' }"
      >Or go back to the home page.</router-link
    >
  </div>
</template>
