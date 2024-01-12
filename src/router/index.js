import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../components/HomeView.vue';
import ShoppingList from '../components/ShoppingList.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/shopping-list', component: ShoppingList },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
