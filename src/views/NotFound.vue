<template>
  <div>
    <h1 class="font-extrabold">Oops!</h1>
    <h3>
      The
      <template v-if="resource">{{ resource }}</template>
      you are looking for is not here.
    </h3>
    <router-link :to="{ name: 'Home' }"> Back to the home page. </router-link>
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
