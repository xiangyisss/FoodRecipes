import { createStore } from "vuex";
import axios from "axios";

export default createStore({
  state: {
    recipes: [],
    recipedetails: [],
    ingredients: [],
    cousine: [],
    recipedetail: [],
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
    COUSINE_RECIPES(state, cousine) {
      state.cousine = cousine;
    },
    GET_RECIPE_DETAIL(state, detail) {
      state.recipedetail = detail;
    },
  },
  actions: {
    getData({ commit }, query) {
      axios
        .get(
          // `https://api.spoonacular.com/food/products/search?query=${query}&apiKey=376a071d9e3f4a76a57cb68329ff1cff`,
          `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=376a071d9e3f4a76a57cb68329ff1cff&number=20`
          // `https://api.edamam.com/search?q=${query}&app_id=97a2247f&app_key=41023221308c37a8780c8db85c616470&from=0&to=20`
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
    cousineRecipes({ commit }, country) {
      axios
        .get(
          `https://api.spoonacular.com/recipes/complexSearch?&apiKey=376a071d9e3f4a76a57cb68329ff1cff&cuisine=${country}`
        )
        .then((res) => {
          commit("COUSINE_RECIPES", res.data.results);
        })

        .catch((err) => console.log(err));
    },
    getRecipeDetail({ commit, getters }, id) {
      // if (id == state.recipedetails.id) {
      //   return state.recipedetails;
      // }

      let recipedetail = getters.getRecipeById(id);

      if (recipedetail) {
        commit("GET_RECIPE_DETAIL", recipedetail);
      } else {
        axios
          .get(
            ` https://api.spoonacular.com/recipes/${id}/information?apiKey=376a071d9e3f4a76a57cb68329ff1cff&includeNutrition=false`
          )
          .then((res) => {
            commit("GET_RECIPE_DETAIL", res.data);
          })
          .catch((err) => console.log(err));
        //console.log("Somgthing wrong.");
      }
    },
  },
  modules: {},
  getters: {
    getRecipeById: (state) => (id) => {
      return state.recipedetails.find((recipe) => recipe.id === id);
    },
  },
});
