import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import RecipeDetail from "@/views/RecipeDetail.vue";
import CousineList from "@/views/CousineList.vue";

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
  },
  {
    path: "/cousine-list",
    name: "cousinelist",
    component: CousineList,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
