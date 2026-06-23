import { defineComponent, ref, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderClass } from "vue/server-renderer";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-WKNb5QNy.js";
import "/Users/marquis/curatewithng/vendor/node_modules/@unhead/vue/dist/index.mjs";
import "../server.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/vendor/node_modules/unctx/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/vendor/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/klona/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Gifts — Vendor Portal" });
    const gifts = ref([]);
    const loading = ref(false);
    const formatNaira = (amount) => {
      return new Intl.NumberFormat("en-NG", { style: "currency", currency: "NGN" }).format(amount);
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">My Gifts</h1><p class="text-slate-500">Manage your product catalog</p></div><button class="btn-primary">+ Add New Gift</button></div><div class="card overflow-hidden"><div class="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50"><input type="text" placeholder="Search gifts..." class="input-field !py-2 max-w-sm"><select class="input-field !py-2 !w-auto"><option value="">All Status</option><option value="active">Active</option><option value="inactive">Inactive</option></select></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="bg-white border-b border-slate-200 text-sm font-semibold text-slate-600"><th class="p-4">Gift</th><th class="p-4">Price</th><th class="p-4">Stock</th><th class="p-4">Status</th><th class="p-4 text-right">Actions</th></tr></thead><tbody>`);
      if (unref(loading)) {
        _push(`<!--[-->`);
        ssrRenderList(3, (i) => {
          _push(`<tr class="border-b border-slate-100"><td class="p-4"><div class="flex items-center gap-3"><div class="skeleton h-12 w-12 rounded-lg"></div><div class="skeleton-text w-32"></div></div></td><td class="p-4"><div class="skeleton-text w-16"></div></td><td class="p-4"><div class="skeleton-text w-10"></div></td><td class="p-4"><div class="skeleton-text w-20"></div></td><td class="p-4 text-right"><div class="skeleton-text w-12 ml-auto"></div></td></tr>`);
        });
        _push(`<!--]-->`);
      } else if (unref(gifts).length === 0) {
        _push(`<tr class="border-b border-slate-100 bg-white"><td colspan="5" class="p-12 text-center text-slate-500"><div class="text-4xl mb-3">🎁</div><p>You haven&#39;t added any gifts yet</p><button class="btn-secondary mt-4">Add Your First Gift</button></td></tr>`);
      } else {
        _push(`<!--[-->`);
        ssrRenderList(unref(gifts), (gift) => {
          _push(`<tr class="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors"><td class="p-4"><div class="flex items-center gap-3"><img${ssrRenderAttr("src", gift.images[0] || "/placeholder.png")} class="w-12 h-12 rounded-lg object-cover bg-slate-100"><div class="font-medium text-slate-900">${ssrInterpolate(gift.name)}</div></div></td><td class="p-4 font-medium text-slate-900">${ssrInterpolate(formatNaira(gift.price))}</td><td class="p-4">${ssrInterpolate(gift.stock)}</td><td class="p-4"><span class="${ssrRenderClass(gift.isActive ? "badge-success" : "badge-neutral")}">${ssrInterpolate(gift.isActive ? "Active" : "Draft")}</span></td><td class="p-4 text-right"><button class="text-primary-600 hover:text-primary-800 font-medium text-sm">Edit</button></td></tr>`);
        });
        _push(`<!--]-->`);
      }
      _push(`</tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gifts/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-BTMwu7pR.js.map
