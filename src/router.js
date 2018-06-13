import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import About from "./views/About.vue";
import Callback from "./views/Callback.vue";

Vue.use(Router);

export default new Router({
  mode: "history", // enable history mode
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",
      component: About
    },
    {
      path: "/callback",
      name: "callback",
      component: Callback
    }
  ]
});
