import { _ as __nuxt_component_0 } from "./nuxt-link-5mHAFJnX.js";
import { defineComponent, unref, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderList } from "vue/server-renderer";
import { u as useUser } from "./user-DO335Ggn.js";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-WKNb5QNy.js";
import "/Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs";
import "../server.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/vendor/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/vendor/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/klona/dist/index.mjs";
import "./cookie-6HhT-4-D.js";
import "/Users/marquis/curatewithng/vendor/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ohash/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Dashboard — Vendor Portal" });
    const { vendor } = useUser();
    const formatNaira = (amount) => {
      return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount);
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">Dashboard</h1><p class="text-slate-500">Welcome back, ${ssrInterpolate(unref(vendor)?.businessName)}</p></div><div class="flex gap-3"><button class="btn-secondary">Download Report</button>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/gifts/new",
        class: "btn-primary"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`+ Add New Gift`);
          } else {
            return [
              createTextVNode("+ Add New Gift")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"><div class="card p-6"><div class="text-slate-500 text-sm font-medium mb-2">Total Earnings</div><div class="text-3xl font-heading font-bold text-slate-900">${ssrInterpolate(formatNaira(unref(vendor)?.totalEarnings || 0))}</div></div><div class="card p-6"><div class="text-slate-500 text-sm font-medium mb-2">Pending Payout</div><div class="text-3xl font-heading font-bold text-accent-600">${ssrInterpolate(formatNaira(unref(vendor)?.pendingPayout || 0))}</div></div><div class="card p-6"><div class="text-slate-500 text-sm font-medium mb-2">Active Gifts</div><div class="text-3xl font-heading font-bold text-slate-900">12</div></div><div class="card p-6"><div class="text-slate-500 text-sm font-medium mb-2">Recent Orders</div><div class="text-3xl font-heading font-bold text-slate-900">5</div></div></div><div class="grid grid-cols-1 lg:grid-cols-3 gap-8"><div class="card p-6 lg:col-span-2"><h3 class="font-heading font-bold text-slate-900 mb-6">Revenue Overview</h3><div class="h-[300px] flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl border border-slate-100"> Chart visualization will appear here </div></div><div class="card p-6"><div class="flex justify-between items-center mb-6"><h3 class="font-heading font-bold text-slate-900">Recent Orders</h3>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/orders",
        class: "text-sm text-primary-800 font-medium"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`View All`);
          } else {
            return [
              createTextVNode("View All")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="space-y-4"><!--[-->`);
      ssrRenderList(4, (i) => {
        _push(`<div class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-sm"> 📦 </div><div class="flex-1"><div class="text-sm font-semibold text-slate-900">ORD-${ssrInterpolate(1e3 + i)}</div><div class="text-xs text-slate-500">2 items • Pending</div></div><div class="text-sm font-bold text-slate-900">₦45,000</div></div>`);
      });
      _push(`<!--]--></div></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-NOlchHUj.js.map
