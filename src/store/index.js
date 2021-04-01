import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: [],
    recipedetails: [],
  },
  mutations: {
    GET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    GET_RECIPE_DETAIL(state, detail) {
      state.recipedetails = detail;
    },
  },
  actions: {
    getData({ commit }, query) {
      axios
        .get(
          // `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=376a071d9e3f4a76a57cb68329ff1cff`,
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=376a071d9e3f4a76a57cb68329ff1cff`
        )
        .then((res) => commit("GET_RECIPES", res.data.results))
        .catch((err) => console.log(err));
    },
    getRecipeDetail({ commit }, id) {
      axios
        .get(
          ` https://api.spoonacular.com/recipes/${id}/information?apiKey=376a071d9e3f4a76a57cb68329ff1cff&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_RECIPE_DETAIL", res.data);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
