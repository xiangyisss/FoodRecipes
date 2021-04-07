<template>
  <div v-for="type in diettype" :key="type.index">
    <img :src="type.image" alt="" />
    <p>{{ type.title }}</p>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["diettype"]),
};
</script>

<style lang="scss" scoped></style>
