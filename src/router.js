// import { hasOwnMetadata } from 'core-js/fn/reflect';
import { createWebHashHistory, createRouter } from "vue-router";
import ErrorPage from './components/ErrorComponent.vue';
import Home from './components/HomeComponent.vue';
import About from './components/AboutComponent.vue';
import Projects from './components/ProjectsComponent.vue';
import Detail from './components/DetailComponent.vue';
import Contact from './components/ContactComponent.vue';

const routes = [
  {
    path: "/contact",
    component: Contact,
  },
  {
    path: "/detail/:id",
    component: Detail,
    props: true,
  },
  {
    path: "/projects",
    component: Projects,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/",
    component: Home,
  },
  {
    path: "/:anything(.*)",
    component: ErrorPage, // 404 page
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return { top: 0 }
  },
});

export default router;