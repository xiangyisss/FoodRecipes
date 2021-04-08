import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: {},
    recipedetails: {},
    ingredients: {},
    //recipedetail: [],
    recipetype: {},
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
    // GET_RECIPE_DETAIL(state, detail) {
    //   state.recipedetail = detail;
    // },
    GET_RECIPE_TYPE(state, recipetype) {
      state.recipetype = recipetype;
    },
  },
  actions: {
    getData({ commit }, query) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=376a071d9e3f4a76a57cb68329ff1cff&number=20`
        )

        .then((res) => {
          commit("GET_RECIPES", res.data.results);
        })
        .catch((err) => console.log(err));
    },
    getRecipeDetails({ commit }, id) {
      return axios
        .get(
          ` https://api.spoonacular.com/recipes/${id}/information?apiKey=376a071d9e3f4a76a57cb68329ff1cff&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_RECIPE_DETAILS", res.data);
          return res.data;
        });
    },
    getIngredients({ commit }, id) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=376a071d9e3f4a76a57cb68329ff1cff&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_INGREDIENTS", res.data.ingredients);
        })
        .catch((err) => console.log(err));
    },

    getRecipeType({ commit }, { mealtype, cuisine, diettype, allergie }) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?&apiKey=376a071d9e3f4a76a57cb68329ff1cff&type=${
            mealtype ?? ""
          }&cuisine=${cuisine ?? ""}&diet=${diettype ?? ""}&intolerances=${
            allergie ?? ""
          }`
        )
        .then((res) => {
          commit("GET_RECIPE_TYPE", res.data.results);
        })
        .catch((err) => console.log(err));
    },
  },
  modules: {},
  // getters: {
  //   getRecipeById: (state) => (id) => {
  //     return state.recipedetails.find((recipe) => recipe.id === id);
  //   },
  // },
});
