<template>
  <div>
    <p class="text-danger">Oops!</p>
    <p class="text-danger">
      The
      <template v-if="resource">{{ resource }}</template>
      you are looking for is not here.
    </p>
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
