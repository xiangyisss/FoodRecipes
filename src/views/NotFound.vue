<template>
  <div class="notfound_box">
    <div class="text_box">
      <h1 class="text-danger">Oops!</h1>
      <h1 class="text-danger">
        The
        <template v-if="resource">{{ resource }}</template>
        you are looking for is not here.
      </h1>
    </div>
    <router-link :to="{ name: 'Home' }">
      <h3>Back to the home page.</h3>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {
    resource: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.notfound_box {
  width: 100%;
  height: 92vh;
  margin-top: 8vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.text_box {
  margin-bottom: 1rem;
}
h3 {
  color: rgb(81, 81, 156);
}
</style>
