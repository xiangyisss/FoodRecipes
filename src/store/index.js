import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: [],
    recipedetails: [],
    ingredients: [],
    //recipedetail: [],
    recipetype: {
      // mealtype: "",
      // cuisine: "",
      // diettype: "",
    },
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
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=3f55c48fbbf3473ab1725e8054a55b71&number=20`
        )

        .then((res) => {
          commit("GET_RECIPES", res.data.results);
        })
        .catch((err) => console.log(err));
    },
    getRecipeDetails({ commit }, id) {
      return axios
        .get(
          ` https://api.spoonacular.com/recipes/${id}/information?apiKey=3f55c48fbbf3473ab1725e8054a55b71&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_RECIPE_DETAILS", res.data);
          return res.data;
        });
    },
    getIngredients({ commit }, id) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=3f55c48fbbf3473ab1725e8054a55b71&includeNutrition=false`
        )
        .then((res) => {
          commit("GET_INGREDIENTS", res.data.ingredients);
        })
        .catch((err) => console.log(err));
    },
    // getRecipeDetail({ commit, getters }, id) {
    //   // if (id == state.recipedetails.id) {
    //   //   return state.recipedetails;
    //   // }

    //   let recipedetail = getters.getRecipeById(id);

    //   if (recipedetail) {
    //     commit("GET_RECIPE_DETAIL", recipedetail);
    //   } else {
    //     axios
    //       .get(
    //         ` https://api.spoonacular.com/recipes/${id}/information?apiKey=376a071d9e3f4a76a57cb68329ff1cff&includeNutrition=false`
    //       )
    //       .then((res) => {
    //         commit("GET_RECIPE_DETAIL", res.data);
    //       })
    //       .catch((err) => console.log(err));
    //     //console.log("Somgthing wrong.");
    //   }
    // },
    getRecipeType({ commit }, { mealtype, cuisine, diettype, allergie }) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?&apiKey=3f55c48fbbf3473ab1725e8054a55b71&type=${
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
  getters: {
    getRecipeById: (state) => (id) => {
      return state.recipedetails.find((recipe) => recipe.id === id);
    },
  },
});
