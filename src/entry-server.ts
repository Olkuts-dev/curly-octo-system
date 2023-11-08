import { createApp } from './main';
import { renderToString } from 'vue/server-renderer';

export async function render(url) {
  const { app, router } = createApp();

  router.push(url);
  await router.isReady();

  const ctx: any = {};
  const html = await renderToString(app, ctx);
  return { html };
}
