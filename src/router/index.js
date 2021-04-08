import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RecipeDetail from "@/views/RecipeDetail.vue";

import NotFound from "@/views/NotFound.vue";
import NetworkIssue from "@/views/NetworkIssue.vue";
import store from "@/store/index.js";

const routes = [
  {
    path: "/recipe",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe-details/:id",
    name: "recipedetails",
    component: RecipeDetail,
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("getRecipeDetails", routeTo.params.id)
        .then((recipe) => {
          routeTo.params.recipe = recipe;

          next();
        })
        .catch((error) => {
          if (error.response && error.response.status == 404) {
            next({
              name: "404",
              params: { resource: "recipe" },
            });
          } else {
            next({ name: "network-issue" });
          }
        });
    },
  },
  // {
  //   path: "/cousine-list/",
  //   name: "cousinelist",
  //   component: CousineList,
  // },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
  },
  {
    path: "/network-issue",
    name: "network-issue",
    component: NetworkIssue,
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: { name: "404", params: { resource: "page" } },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
