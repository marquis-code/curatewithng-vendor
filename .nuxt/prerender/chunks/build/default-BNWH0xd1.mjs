import { _ as __nuxt_component_0 } from './nuxt-link-5mHAFJnX.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, resolveDynamicComponent, openBlock, createBlock, createTextVNode, toDisplayString, unref, useSSRContext } from 'file:///Users/marquis/curatewithng/vendor/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderVNode, ssrInterpolate, ssrRenderSlot } from 'file:///Users/marquis/curatewithng/vendor/node_modules/vue/server-renderer/index.mjs';
import { u as useUser } from './user-DO335Ggn.mjs';
import { LayoutDashboard, Gift, Package, CreditCard, Store, AlertTriangle } from 'file:///Users/marquis/curatewithng/vendor/node_modules/lucide-vue-next/dist/cjs/lucide-vue-next.js';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs';
import './server.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs';
import '../nitro/nitro.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs';
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
import './cookie-6HhT-4-D.mjs';
import 'file:///Users/marquis/curatewithng/vendor/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    const { user, vendor } = useUser();
    const navLinks = [
      { name: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
      { name: "My Gifts", path: "/gifts", icon: Gift },
      { name: "Orders", path: "/orders", icon: Package },
      { name: "Earnings & Payouts", path: "/payouts", icon: CreditCard },
      { name: "Store Profile", path: "/settings", icon: Store }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      var _a, _b, _c, _d, _e, _f;
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-slate-50 flex" }, _attrs))}><aside class="w-64 bg-primary-900 text-white flex flex-col fixed inset-y-0 left-0 z-10"><div class="p-6"><div class="font-heading font-extrabold text-2xl tracking-tight"> Curate<span class="text-accent-400">With</span>NG </div><div class="text-primary-200 text-xs mt-1 font-medium tracking-wider uppercase">Vendor Portal</div></div><div class="flex-1 overflow-y-auto py-4"><nav class="space-y-1 px-3"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: link.path,
          to: link.path,
          class: "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-primary-100 hover:bg-primary-800/50 hover:text-white",
          "active-class": "bg-primary-800 text-white"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(link.icon), { class: "w-5 h-5" }, null), _parent2, _scopeId);
              _push2(` ${ssrInterpolate(link.name)}`);
            } else {
              return [
                (openBlock(), createBlock(resolveDynamicComponent(link.icon), { class: "w-5 h-5" })),
                createTextVNode(" " + toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></nav></div><div class="p-4 border-t border-primary-800"><div class="flex items-center gap-3 mb-4"><div class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center font-bold">${ssrInterpolate(((_b = (_a = unref(vendor)) == null ? void 0 : _a.businessName) == null ? void 0 : _b.charAt(0)) || "V")}</div><div class="flex-1 overflow-hidden"><div class="text-sm font-medium truncate">${ssrInterpolate((_c = unref(vendor)) == null ? void 0 : _c.businessName)}</div><div class="text-xs text-primary-300 truncate">${ssrInterpolate((_d = unref(user)) == null ? void 0 : _d.email)}</div></div></div><button class="w-full py-2 px-3 rounded-lg text-sm font-medium text-danger-300 hover:bg-danger-500/10 hover:text-danger-200 transition-colors flex items-center justify-center gap-2"> Sign Out </button></div></aside><main class="flex-1 ml-64 flex flex-col min-h-screen"><header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10"><div class="flex items-center gap-4">`);
      if (!((_e = unref(vendor)) == null ? void 0 : _e.isApproved)) {
        _push(`<span class="badge-warning">Pending Approval</span>`);
      } else {
        _push(`<span class="badge-success">Active</span>`);
      }
      _push(`</div><div></div></header><div class="flex-1 p-8">`);
      if (!((_f = unref(vendor)) == null ? void 0 : _f.isApproved)) {
        _push(`<div class="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-start gap-3">`);
        _push(ssrRenderComponent(unref(AlertTriangle), { class: "w-6 h-6 shrink-0" }, null, _parent));
        _push(`<div><h3 class="font-bold text-sm">Account Pending Approval</h3><p class="text-sm mt-1 text-amber-700">Your vendor account is currently being reviewed by our team. You can set up your store and add products, but they won&#39;t be visible to customers until approved.</p></div></div>`);
      } else {
        _push(`<!---->`);
      }
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</div></main></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-BNWH0xd1.mjs.map
