import { _ as __nuxt_component_0 } from "./nuxt-link-5mHAFJnX.js";
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrIncludeBooleanAttr, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { Loader2 } from "lucide-vue-next";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-WKNb5QNy.js";
import "../server.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/@unhead/vue/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/vendor/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/vendor/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "forgot-password",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Forgot Password — CurateWithNG Vendor" });
    const email = ref("");
    const loading = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-[2rem] border border-slate-100 p-8 md:p-10 animate-scale-in max-w-md mx-auto shadow-sm" }, _attrs))}><h2 class="text-2xl font-heading font-bold text-slate-900 text-center mb-2">Reset Password</h2><p class="text-slate-500 text-center mb-8">Enter your vendor email to receive a password reset link.</p><form class="space-y-4"><div><label class="text-sm font-medium text-slate-700 mb-1 block">Email</label><input${ssrRenderAttr("value", email.value)} type="email" required class="input-field" placeholder="you@example.com"></div><button type="submit"${ssrIncludeBooleanAttr(loading.value) ? " disabled" : ""} class="btn-primary w-full flex items-center justify-center gap-2 py-2.5">`);
      if (loading.value) {
        _push(ssrRenderComponent(unref(Loader2), { class: "w-5 h-5 animate-spin" }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(` ${ssrInterpolate(loading.value ? "Sending Link..." : "Send Reset Link")}</button></form><p class="text-center text-sm text-slate-500 mt-6"> Remembered your password? `);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "text-primary-800 font-semibold hover:underline"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign in`);
          } else {
            return [
              createTextVNode("Sign in")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/auth/forgot-password.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=forgot-password-G_Knyp1H.js.map
