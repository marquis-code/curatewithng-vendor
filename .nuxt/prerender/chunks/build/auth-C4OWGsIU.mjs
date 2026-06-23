import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
import { u as useCookie } from './cookie-6HhT-4-D.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/vue/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/destr/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/node-mock-http/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/unstorage/drivers/fs.mjs';
import 'node:crypto';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/ohash/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/klona/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/defu/dist/defu.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/scule/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/unctx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/pathe/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/ipx/dist/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/vue-router/vue-router.node.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';

const auth = defineNuxtRouteMiddleware((to) => {
  const user = useCookie("vendor_user_data");
  if (!user.value && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }
});

export { auth as default };
//# sourceMappingURL=auth-C4OWGsIU.mjs.map
