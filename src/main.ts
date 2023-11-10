import App from './App.vue';
import { createSSRApp } from 'vue';
import { createRouter } from './router';
import { createPinia } from 'pinia'

export function createApp() {
  const pinia = createPinia()
  const app = createSSRApp(App);
  const router = createRouter();
  app.use(router);
  app.use(pinia);
  return { app, router };
}
