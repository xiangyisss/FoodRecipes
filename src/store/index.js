import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: {},
    recipedetails: {},
    ingredients: {},
  },
  mutations: {
    GET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    GET_RECIPE_DETAILS(state, detail) {
      state.recipedetails = detail;
    },
    GET_INGREDIENTS(state, ingredients) {
      state.ingredients = ingredients;
    },
    DEFAULT_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
  },
  actions: {
    getData({ commit }, { query, mealtype, cuisine, diettype, allergie }) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=01d84fbe7b1d4f45809c4c070fd5768e&type=${
            mealtype ?? ""
          }&cuisine=${cuisine ?? ""}&diet=${diettype ?? ""}&intolerances=${
            allergie ?? ""
          }`
        )
        .then((res) => {
          commit("GET_RECIPES", res.data.results);
        })
        .catch((err) => console.log(err));
    },
    getRecipeDetails({ commit }, id) {
      return axios
        .get(
          ` https://api.spoonacular.com/recipes/${id}/information?apiKey=01d84fbe7b1d4f45809c4c070fd5768e&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_RECIPE_DETAILS", res.data);
        });
    },
    getIngredients({ commit }, id) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=01d84fbe7b1d4f45809c4c070fd5768e&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_INGREDIENTS", res.data.ingredients);
        })
        .catch((err) => console.log(err));
    },
    defaultRecipes({ commit }) {
      axios
        .get(
          "https://api.spoonacular.com/recipes/complexSearch?sort=popularity&apiKey=01d84fbe7b1d4f45809c4c070fd5768e&number=12"
        )
        .then((res) => commit("DEFAULT_RECIPES", res.data.results))
        .catch((err) => console.log(err));
    },
  },
  modules: {},
});
