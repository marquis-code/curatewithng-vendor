import { defineComponent, useSSRContext } from "vue";
import { ssrRenderAttrs } from "vue/server-renderer";
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
    useHead({ title: "Orders — Vendor Portal" });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><div class="flex justify-between items-center mb-8"><div><h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">Orders</h1><p class="text-slate-500">Manage your customer orders</p></div></div><div class="card overflow-hidden"><div class="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50"><input type="text" placeholder="Search orders..." class="input-field !py-2 max-w-sm"><select class="input-field !py-2 !w-auto"><option value="">All Status</option><option value="PENDING">Pending</option><option value="PROCESSING">Processing</option><option value="SHIPPED">Shipped</option><option value="DELIVERED">Delivered</option></select></div><div class="overflow-x-auto"><table class="w-full text-left border-collapse"><thead><tr class="bg-white border-b border-slate-200 text-sm font-semibold text-slate-600"><th class="p-4">Order ID</th><th class="p-4">Date</th><th class="p-4">Customer</th><th class="p-4">Amount</th><th class="p-4">Status</th><th class="p-4 text-right">Actions</th></tr></thead><tbody><tr class="border-b border-slate-100 bg-white"><td colspan="6" class="p-12 text-center text-slate-500"><div class="text-4xl mb-3">📦</div><p>No orders found matching your criteria</p></td></tr></tbody></table></div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/orders/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CFvdoQjs.js.map
