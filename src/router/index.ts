import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/teams",
    name: "Teams",
    // route level code-splitting
    // this generates a separate chunk (teams.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "teams" */ "../views/Teams.vue"),
  },
  {
    path: "/teams/add",
    name: "TeamsAdd",
    component: () =>
      import(/* webpackChunkName: "teamsadd" */ "../views/TeamsAdd.vue"),
  },
  {
    path: "/teams/update",
    name: "TeamsUpdate",
    component: () =>
      import(/* webpackChunkName: "teamsadd" */ "../views/TeamsUpdate.vue"),
    props: true,
  },
  {
    path: "/developers",
    name: "Developers",
    component: () =>
      import(/* webpackChunkName: "developers" */ "../views/Developers.vue"),
  },
  {
    path: "/developers/:id/view",
    name: "DevelopersView",
    component: () =>
      import(/* webpackChunkName: "developers" */ "../views/DeveloperView.vue"),
    props: true,
  },
  {
    path: "/developers/add",
    name: "DevelopersAdd",
    component: () =>
      import(
        /* webpackChunkName: "developersadd" */ "../views/DevelopersAdd.vue"
      ),
  },
  {
    path: "/developers/update",
    name: "DevelopersUpdate",
    component: () =>
      import(
        /* webpackChunkName: "developersupdate" */ "../views/DevelopersUpdate.vue"
      ),
    props: true,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
