import { createRouter, createWebHistory } from 'vue-router';
import AdminView from '@/views/AdminView.vue';
import UserView from '@/views/UserView.vue';
import EditorView from '@/views/EditorView.vue';

const routes = [
  { path: '/', redirect: '/admin' },
  { path: '/admin', component: AdminView },
  { path: '/user', component: UserView },
  { path: '/editor', component: EditorView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;