import { defineComponent, mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { u as useUser } from "./user-DO335Ggn.js";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-WKNb5QNy.js";
import "./cookie-6HhT-4-D.js";
import "/Users/marquis/curatewithng/vendor/node_modules/nuxt/node_modules/cookie-es/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/h3/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/destr/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ohash/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/klona/dist/index.mjs";
import "../server.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ofetch/dist/node.mjs";
import "#internal/nuxt/paths";
import "/Users/marquis/curatewithng/vendor/node_modules/unctx/dist/index.mjs";
import "vue-router";
import "/Users/marquis/curatewithng/vendor/node_modules/defu/dist/defu.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/ufo/dist/index.mjs";
import "/Users/marquis/curatewithng/vendor/node_modules/@unhead/vue/dist/index.mjs";
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({ title: "Settings — Vendor Portal" });
    const { vendor } = useUser();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-4xl" }, _attrs))}><div class="mb-8"><h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">Store Profile</h1><p class="text-slate-500">Manage your vendor profile and settings</p></div><div class="card p-8 mb-8"><h3 class="font-heading font-bold text-slate-900 mb-6 text-lg">Business Details</h3><form class="space-y-6"><div class="flex gap-6 items-center"><div class="w-24 h-24 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-300"><span class="text-sm text-slate-500">Logo</span></div><div><button type="button" class="btn-secondary">Upload Logo</button><p class="text-xs text-slate-500 mt-2">Recommended size: 512x512px. Max 2MB.</p></div></div><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div><label class="text-sm font-medium text-slate-700 mb-1 block">Business Name</label><input${ssrRenderAttr("value", unref(vendor)?.businessName)} type="text" class="input-field"></div><div><label class="text-sm font-medium text-slate-700 mb-1 block">Store Slug (URL)</label><input${ssrRenderAttr("value", unref(vendor)?.slug)} type="text" class="input-field" disabled></div></div><div><label class="text-sm font-medium text-slate-700 mb-1 block">Description</label><textarea rows="4" class="input-field">${ssrInterpolate(unref(vendor)?.description)}</textarea></div><div class="flex justify-end pt-4"><button type="button" class="btn-primary">Save Changes</button></div></form></div><div class="card p-8"><h3 class="font-heading font-bold text-slate-900 mb-6 text-lg">Payout Details</h3><div class="p-4 bg-slate-50 border border-slate-200 rounded-xl"><p class="text-sm text-slate-600 mb-4">Your payouts are securely processed via Paystack. Set up your bank account details below to receive your earnings automatically.</p><button class="btn-secondary text-primary-800 border-primary-200 hover:bg-primary-50"> Setup Payout Account </button></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/settings/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CD7P4by1.js.map
