import { d as defineNuxtRouteMiddleware, n as navigateTo } from "../server.mjs";
import { u as useCookie } from "./cookie-6HhT-4-D.js";
import "vue";
import "/Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/vendor/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/klona/dist/index.mjs";
import "vue/server-renderer";
import "/Users/marquis/curatewithng/vendor/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ohash/dist/index.mjs";
const auth = defineNuxtRouteMiddleware((to) => {
  const user = useCookie("vendor_user_data");
  if (!user.value && to.path !== "/auth/login") {
    return navigateTo("/auth/login");
  }
});
export {
  auth as default
};
//# sourceMappingURL=auth-C4OWGsIU.js.map
