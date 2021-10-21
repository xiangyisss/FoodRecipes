<template>
  <div class="ingredients_steps">
    <div class="title">
      <h3>Ingredients</h3>
      <small>Tick it</small>
    </div>
    <ul>
      <li v-for="item in ingredients" :key="item.index" id="ingredientslist">
        <div
          class="itemlist"
          style="display: inline"
          @click.prevent="doneTick(item, $event.target)"
        >
          {{ item.name }}: {{ item.amount.metric.value }}
          {{ item.amount.metric.unit }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'IngredientAndStep',
  props: ['id'],
  computed: mapState(['ingredients']),
  methods: {
    doneTick(item, target) {
      let list = target.classList;
      if (list.contains('isActive')) {
        list.remove('isActive');
        list.add('notActive');
      } else {
        list.remove('notActive');
        list.add('isActive');
      }
    },
  },
  created() {
    this.$store.dispatch('getIngredients', this.id);
  },
};
</script>

<style scoped>
.ingredients_steps {
  width: 40%;
  /* background-color: rgba(211, 255, 188, 0.445); */
  padding: 0.5rem;
}
small {
  position: relative;
}
small::before {
  content: " ";
  background-image: url("../assets/check.png");
  background-size: contain;
  background-repeat: no-repeat;
  width: 1rem;
  height: 1rem;
  position: absolute;
  top: 0;
  left: -1.25rem;
}
.title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
ul {
  list-style: none;
  padding-top: 1rem;
}
ul li::before {
  content: "\204E";
  color: rgb(120, 120, 197);
  font-weight: bold;
  display: inline-block;
  width: 1rem;
}
ul li {
  margin-bottom: 0.75rem;
  line-height: 1rem;
  letter-spacing: 0.5px;
  cursor: url("../assets/done-tick.png"), auto;
}
.itemlist:hover {
  color: rgba(120, 120, 197, 0.527);
}
.activeClass {
  color: grey;
}
.isActive {
  color: rgb(184, 184, 184);
  text-decoration: line-through;
}
.notActive {
  color: rgb(24, 23, 23);
  text-decoration: none;
}
@media screen and (max-width: 850px) {
  .ingredients_steps {
    width: 100%;
  }
}
</style>
