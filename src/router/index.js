import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RecipeDetail from "@/views/RecipeDetail.vue";
import CousineList from "@/views/CousineList.vue";
import NotFound from "@/views/NotFound.vue";
import store from "@/store/index";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/recipe-details/:id",
    name: "recipedetails",
    component: RecipeDetail,
    props: true,
    beforEnter(routeTo, routeFrom, next) {
      store
        .dispatch("getRecipeDetails", routeTo.params.id)
        .then((details) => {
          routeTo.params.details = details;
          next();
        })
        .catch((err) => {
          if (err.response && err.response.status == 404) {
            next({ name: "404", params: { resource: "recipe" } });
          }
        });
    },
  },
  {
    path: "/cousine-list/",
    name: "cousinelist",
    component: CousineList,
  },
  {
    path: "/404",
    name: "404",
    component: NotFound,
    props: true,
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
