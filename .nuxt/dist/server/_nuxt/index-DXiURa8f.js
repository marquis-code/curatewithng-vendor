import { _ as __nuxt_component_0 } from "./nuxt-link-5mHAFJnX.js";
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, createVNode, resolveDynamicComponent, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderVNode } from "vue/server-renderer";
import { Sparkles, Store, CreditCard, Check, ArrowRight, Star } from "lucide-vue-next";
import "/Users/marquis/curatewithng/vendor/node_modules/hookable/dist/index.mjs";
import { u as useHead } from "./v3-WKNb5QNy.js";
import { _ as _export_sfc } from "../server.mjs";
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Vendor Portal — CurateWithNG"
    });
    const heroStories = [
      {
        image: "https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop",
        title: "The Storefront",
        description: "Set up your curated profile and add your best products."
      },
      {
        image: "https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=2000&auto=format&fit=crop",
        title: "The AI Match",
        description: "GiftGenius connects shoppers directly to your offerings."
      },
      {
        image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop",
        title: "The Order",
        description: "You get notified instantly when an order is placed and paid for."
      },
      {
        image: "https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2000&auto=format&fit=crop",
        title: "The Payout",
        description: "Fulfill the order and get your funds settled quickly."
      }
    ];
    const activeStory = ref(0);
    const steps = [
      { icon: Store, title: "Create Your Store", description: "Sign up and upload your gifts, hampers, and services. Set your pricing and availability easily.", bgClass: "bg-primary-50" },
      { icon: Sparkles, title: "Receive AI Matches", description: "Our AI engine recommends your products to users based on their budget and recipient profile.", bgClass: "bg-accent-50" },
      { icon: CreditCard, title: "Fulfill & Get Paid", description: "Accept orders, package beautifully, and get paid instantly directly into your bank account.", bgClass: "bg-emerald-50" }
    ];
    const categories = [
      { name: "Gift Hampers", slug: "hampers", image: "https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80" },
      { name: "Fashion & Style", slug: "fashion", image: "https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80" },
      { name: "Experiences", slug: "experiences", image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80" },
      { name: "Wellness & Spa", slug: "wellness", image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80" },
      { name: "Tech & Gadgets", slug: "tech", image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80" },
      { name: "Home & Living", slug: "home", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80" },
      { name: "Jewellery", slug: "jewellery", image: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80" },
      { name: "Corporate Packs", slug: "corporate", image: "https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80" }
    ];
    const aiFeatures = [
      "Zero marketing spend required—the AI finds the buyers for you",
      "Matches based on exact recipient profiles (age, occasion, relation)",
      "High conversion rates because buyers are matched with exactly what they want",
      "Automated inventory and order management"
    ];
    const mockRecommendations = [
      { emoji: "🍾", name: "Premium Corporate Hamper", reason: "Fits the corporate appreciation need", score: 98 },
      { emoji: "🍫", name: "Executive Treat Box", reason: "Great luxury snack option", score: 92 },
      { emoji: "🖋️", name: "Custom Engraved Pen Set", reason: "Excellent add-on for executives", score: 85 }
    ];
    const testimonials = [
      { name: "Hamper Haven Co.", location: "Lagos", text: "Since joining CurateWithNG, our corporate orders have tripled. The AI matching means we only get serious buyers!" },
      { name: "Bespoke Treats NG", location: "Abuja", text: "The dashboard is so easy to use, and payouts are incredibly fast. We don't have to chase clients for payment anymore." },
      { name: "Luxe Gifting", location: "Port Harcourt", text: "Our high-end hampers are finally reaching the right audience. The platform truly understands premium gifting." }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "relative z-10" }, _attrs))} data-v-07b22e1f><header class="bg-white/80 backdrop-blur-md border-b border-slate-200 h-[80px] fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12" data-v-07b22e1f><div class="font-heading font-extrabold text-2xl tracking-tight text-slate-900" data-v-07b22e1f> Curate<span class="text-accent-500" data-v-07b22e1f>With</span>NG <span class="text-primary-800 text-sm ml-2 px-2 py-1 bg-primary-50 rounded-full hidden sm:inline-block" data-v-07b22e1f>Vendor</span></div><div class="flex items-center gap-4" data-v-07b22e1f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "text-slate-600 font-semibold hover:text-primary-800 text-sm sm:text-base"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Login`);
          } else {
            return [
              createTextVNode("Login")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "btn-primary px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Join as Vendor`);
          } else {
            return [
              createTextVNode("Join as Vendor")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></header><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-16 md:py-8 mt-[80px] md:mt-0" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center" data-v-07b22e1f><div class="max-w-xl" data-v-07b22e1f><div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in mt-12 sm:mt-0" data-v-07b22e1f><span class="text-primary-800" data-v-07b22e1f>✨ AI-Powered</span><span class="text-slate-300" data-v-07b22e1f>•</span><span data-v-07b22e1f>Nigeria&#39;s Gift Marketplace</span></div><h1 class="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 animate-slide-up" data-v-07b22e1f> Grow Your Business with <span class="text-primary-800" data-v-07b22e1f>High-Intent Buyers</span></h1><p class="text-lg text-slate-600 leading-relaxed mb-10 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.1s" })}" data-v-07b22e1f> Join Nigeria&#39;s smartest gifting ecosystem. We use AI to match shoppers with your curated gifts, hampers, and experiences. Focus on creating—we bring the sales. </p><div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="${ssrRenderStyle({ "animation-delay": "0.2s" })}" data-v-07b22e1f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "btn-primary inline-flex items-center justify-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Sparkles), { class: "w-4 h-4" }, null, _parent2, _scopeId));
            _push2(` Start Selling Today `);
          } else {
            return [
              createVNode(unref(Sparkles), { class: "w-4 h-4" }),
              createTextVNode(" Start Selling Today ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "btn-secondary inline-flex items-center justify-center"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Vendor Login `);
          } else {
            return [
              createTextVNode(" Vendor Login ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex gap-8 md:gap-12 mt-12 pt-12 border-t border-slate-200 animate-fade-in" style="${ssrRenderStyle({ "animation-delay": "0.4s" })}" data-v-07b22e1f><div data-v-07b22e1f><div class="text-2xl font-heading font-bold text-slate-900" data-v-07b22e1f>50k+</div><div class="text-sm text-slate-500 font-medium" data-v-07b22e1f>Active Shoppers</div></div><div data-v-07b22e1f><div class="text-2xl font-heading font-bold text-slate-900" data-v-07b22e1f>₦200m+</div><div class="text-sm text-slate-500 font-medium" data-v-07b22e1f>Vendor Payouts</div></div><div data-v-07b22e1f><div class="text-2xl font-heading font-bold text-slate-900" data-v-07b22e1f>0%</div><div class="text-sm text-slate-500 font-medium" data-v-07b22e1f>Setup Fee</div></div></div></div><div class="relative h-[400px] lg:h-[600px] animate-fade-in group" style="${ssrRenderStyle({ "animation-delay": "0.3s" })}" data-v-07b22e1f><div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-2 group-hover:scale-100" data-v-07b22e1f></div><div class="relative w-full h-full rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl bg-slate-900" data-v-07b22e1f><div${ssrRenderAttrs({
        name: "story-fade",
        class: "absolute inset-0"
      })} data-v-07b22e1f>`);
      ssrRenderList(heroStories, (story, index2) => {
        _push(`<div class="absolute inset-0" style="${ssrRenderStyle(activeStory.value === index2 ? null : { display: "none" })}" data-v-07b22e1f><img${ssrRenderAttr("src", story.image)}${ssrRenderAttr("alt", story.title)} class="${ssrRenderClass([activeStory.value === index2 ? "scale-110" : "scale-100", "w-full h-full object-cover transform transition-transform duration-[4000ms] ease-linear"])}" data-v-07b22e1f><div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent" data-v-07b22e1f></div></div>`);
      });
      _push(`</div><div class="absolute top-4 left-4 right-4 flex gap-2 z-20" data-v-07b22e1f><!--[-->`);
      ssrRenderList(heroStories, (story, index2) => {
        _push(`<button class="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm cursor-pointer hover:h-2 transition-all" data-v-07b22e1f><div class="${ssrRenderClass([{
          "w-full": index2 < activeStory.value,
          "w-0": index2 > activeStory.value,
          "story-progress": index2 === activeStory.value
        }, "h-full bg-white"])}" data-v-07b22e1f></div></button>`);
      });
      _push(`<!--]--></div><div class="absolute bottom-0 left-0 right-0 p-8 z-20" data-v-07b22e1f><div data-v-07b22e1f><div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20" data-v-07b22e1f> Step ${ssrInterpolate(activeStory.value + 1)}</div><h3 class="font-heading font-extrabold text-white text-3xl md:text-4xl mb-2" data-v-07b22e1f>${ssrInterpolate(heroStories[activeStory.value].title)}</h3><p class="text-white/90 text-lg md:text-xl" data-v-07b22e1f>${ssrInterpolate(heroStories[activeStory.value].description)}</p></div></div><div class="absolute inset-0 flex z-10" data-v-07b22e1f><button class="flex-1 cursor-pointer focus:outline-none" data-v-07b22e1f></button><button class="flex-1 cursor-pointer focus:outline-none" data-v-07b22e1f></button></div></div></div></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="text-center mb-16" data-v-07b22e1f><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4" data-v-07b22e1f>How It Works for Vendors</h2><p class="text-lg text-slate-500 max-w-2xl mx-auto" data-v-07b22e1f>Three simple steps to scale your gifting brand</p></div><div class="grid grid-cols-1 md:grid-cols-3 gap-8" data-v-07b22e1f><!--[-->`);
      ssrRenderList(steps, (step, i) => {
        _push(`<div class="text-center p-8" data-v-07b22e1f><div class="${ssrRenderClass([step.bgClass, "w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-primary-800"])}" data-v-07b22e1f>`);
        ssrRenderVNode(_push, createVNode(resolveDynamicComponent(step.icon), { class: "w-8 h-8" }, null), _parent);
        _push(`</div><div class="text-sm font-semibold text-primary-800 mb-2" data-v-07b22e1f>Step ${ssrInterpolate(i + 1)}</div><h3 class="text-xl font-heading font-bold text-slate-900 mb-3" data-v-07b22e1f>${ssrInterpolate(step.title)}</h3><p class="text-slate-500 leading-relaxed" data-v-07b22e1f>${ssrInterpolate(step.description)}</p></div>`);
      });
      _push(`<!--]--></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 py-20 md:py-8" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="text-center mb-12" data-v-07b22e1f><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4" data-v-07b22e1f>What You Can Sell</h2><p class="text-lg text-slate-500" data-v-07b22e1f>We partner with premium vendors across all major categories</p></div><div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6" data-v-07b22e1f><!--[-->`);
      ssrRenderList(categories, (cat) => {
        _push(`<div class="group relative h-48 md:h-64 rounded-3xl overflow-hidden cursor-pointer" data-v-07b22e1f><img${ssrRenderAttr("src", cat.image)}${ssrRenderAttr("alt", cat.name)} class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-v-07b22e1f><div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" data-v-07b22e1f></div><div class="absolute bottom-0 left-0 right-0 p-5 md:p-6" data-v-07b22e1f><h3 class="font-heading font-bold text-white text-lg md:text-xl mb-1" data-v-07b22e1f>${ssrInterpolate(cat.name)}</h3><p class="text-sm text-slate-300" data-v-07b22e1f>High Demand</p></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-v-07b22e1f><div data-v-07b22e1f><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-6" data-v-07b22e1f> ✨ AI-Powered </div><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6" data-v-07b22e1f> Let Our AI Find Your <span class="text-primary-800" data-v-07b22e1f>Perfect Buyer</span></h2><p class="text-lg text-slate-500 leading-relaxed mb-8" data-v-07b22e1f> No more struggling with marketing or ads. Our GiftGenius AI analyzes user requests and actively recommends your products when they are the perfect match for the occasion and budget. </p><ul class="space-y-4 mb-8" data-v-07b22e1f><!--[-->`);
      ssrRenderList(aiFeatures, (feature) => {
        _push(`<li class="flex items-start gap-3" data-v-07b22e1f><div class="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5" data-v-07b22e1f>`);
        _push(ssrRenderComponent(unref(Check), { class: "w-3.5 h-3.5" }, null, _parent));
        _push(`</div><span class="text-slate-700" data-v-07b22e1f>${ssrInterpolate(feature)}</span></li>`);
      });
      _push(`<!--]--></ul>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "btn-primary inline-flex items-center gap-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Create Vendor Profile `);
            _push2(ssrRenderComponent(unref(ArrowRight), { class: "w-4 h-4" }, null, _parent2, _scopeId));
          } else {
            return [
              createTextVNode(" Create Vendor Profile "),
              createVNode(unref(ArrowRight), { class: "w-4 h-4" })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100" data-v-07b22e1f><div class="bg-white rounded-2xl border border-slate-200 p-6 mb-4" data-v-07b22e1f><div class="text-sm text-slate-400 mb-2" data-v-07b22e1f>Shopper&#39;s Request:</div><p class="text-slate-700" data-v-07b22e1f>&quot;Looking for a corporate appreciation gift under ₦50,000. Needs to feel premium with some luxury snacks.&quot;</p></div><div class="bg-primary-800 text-white rounded-2xl p-6" data-v-07b22e1f><div class="flex items-center gap-2 mb-3" data-v-07b22e1f><span class="text-accent-400" data-v-07b22e1f>✨</span><span class="text-sm font-semibold text-primary-200" data-v-07b22e1f>AI Matched Your Store</span></div><div class="space-y-3" data-v-07b22e1f><!--[-->`);
      ssrRenderList(mockRecommendations, (rec, i) => {
        _push(`<div class="flex items-center gap-3 p-3 bg-white/10 rounded-xl" data-v-07b22e1f><div class="text-2xl" data-v-07b22e1f>${ssrInterpolate(rec.emoji)}</div><div class="flex-1" data-v-07b22e1f><div class="font-semibold text-sm" data-v-07b22e1f>${ssrInterpolate(rec.name)}</div><div class="text-primary-200 text-xs" data-v-07b22e1f>${ssrInterpolate(rec.reason)}</div></div><div class="text-accent-400 font-bold text-sm" data-v-07b22e1f>${ssrInterpolate(rec.score)}% Match</div></div>`);
      });
      _push(`<!--]--></div></div></div></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 overflow-clip py-20 md:py-8" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="text-center mb-12" data-v-07b22e1f><h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4" data-v-07b22e1f>Trusted by Top Brands</h2><p class="text-lg text-slate-500" data-v-07b22e1f>See what our vendor partners are saying</p></div></div><div class="relative flex overflow-hidden" data-v-07b22e1f><div class="marquee-container gap-6 py-4 px-3 flex" data-v-07b22e1f><!--[-->`);
      ssrRenderList([...testimonials, ...testimonials, ...testimonials, ...testimonials], (testimonial, i) => {
        _push(`<div class="w-80 md:w-96 flex-shrink-0 card p-6 whitespace-normal" data-v-07b22e1f><div class="flex items-center gap-1 mb-4" data-v-07b22e1f><!--[-->`);
        ssrRenderList(5, (s) => {
          _push(ssrRenderComponent(unref(Star), {
            key: s,
            class: "w-4 h-4 text-accent-500 fill-current"
          }, null, _parent));
        });
        _push(`<!--]--></div><p class="text-slate-600 leading-relaxed mb-4" data-v-07b22e1f>&quot;${ssrInterpolate(testimonial.text)}&quot;</p><div class="flex items-center gap-3" data-v-07b22e1f><div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0" data-v-07b22e1f><span class="text-primary-800 font-bold text-sm" data-v-07b22e1f>${ssrInterpolate(testimonial.name.charAt(0))}</span></div><div data-v-07b22e1f><div class="font-semibold text-slate-900 text-sm" data-v-07b22e1f>${ssrInterpolate(testimonial.name)}</div><div class="text-slate-400 text-xs" data-v-07b22e1f>${ssrInterpolate(testimonial.location)}</div></div></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-24 md:py-8" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="bg-slate-900 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2" data-v-07b22e1f><div class="p-12 md:p-16 flex flex-col justify-center" data-v-07b22e1f><div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 w-fit" data-v-07b22e1f> Massive Reach </div><h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6" data-v-07b22e1f> Connect With Active Shoppers </h2><p class="text-lg text-slate-300 leading-relaxed mb-8" data-v-07b22e1f> We market to thousands of corporate clients and individuals looking for premium gifts in Nigeria. Your products will be put directly in front of buyers with their wallets out, ready to make a purchase. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "btn-primary w-fit !bg-white !text-slate-900 hover:!bg-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Claim Your Storefront `);
          } else {
            return [
              createTextVNode(" Claim Your Storefront ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="relative h-64 lg:h-auto" data-v-07b22e1f><img src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&amp;w=2000&amp;auto=format&amp;fit=crop" alt="Vendor packaging gifts" class="absolute inset-0 w-full h-full object-cover" data-v-07b22e1f></div></div></div></section><section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-20 md:py-8" data-v-07b22e1f><div class="section-container relative z-10" data-v-07b22e1f><div class="bg-white rounded-[3rem] border border-slate-200 p-12 md:p-20 text-center relative overflow-hidden shadow-sm" data-v-07b22e1f><div class="absolute inset-0 bg-[url(&#39;https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&amp;w=2000&amp;auto=format&amp;fit=crop&#39;)] opacity-5 bg-cover bg-center" data-v-07b22e1f></div><div class="relative z-10 max-w-2xl mx-auto" data-v-07b22e1f><h2 class="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6" data-v-07b22e1f>Ready to Grow Your Sales?</h2><p class="text-xl text-slate-500 mb-10" data-v-07b22e1f>Join CurateWithNG today and let our AI connect you with your next best customer.</p><div class="flex flex-col sm:flex-row gap-4 justify-center" data-v-07b22e1f>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "btn-primary !py-3 !px-8"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Create Free Vendor Account`);
          } else {
            return [
              createTextVNode("Create Free Vendor Account")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/auth/login",
        class: "border-2 border-slate-200 text-slate-700 bg-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Sign In`);
          } else {
            return [
              createTextVNode("Sign In")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-07b22e1f"]]);
export {
  index as default
};
//# sourceMappingURL=index-DXiURa8f.js.map
