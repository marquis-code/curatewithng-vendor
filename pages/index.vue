<template>
  <main class="relative z-10">
    <!-- Navbar (Bypassing layout) -->
    <header class="bg-white/80 backdrop-blur-md border-b border-slate-200 h-[80px] fixed top-0 w-full z-50 flex items-center justify-between px-6 md:px-12">
      <div class="font-heading font-extrabold text-2xl tracking-tight text-slate-900">
        Curate<span class="text-accent-500">With</span>NG <span class="text-primary-800 text-sm ml-2 px-2 py-1 bg-primary-50 rounded-full hidden sm:inline-block">Vendor</span>
      </div>
      <div class="flex items-center gap-4">
        <NuxtLink to="/auth/login" class="text-slate-600 font-semibold hover:text-primary-800 text-sm sm:text-base">Login</NuxtLink>
        <NuxtLink to="/auth/login" class="btn-primary px-4 py-2 sm:px-6 sm:py-2 text-sm sm:text-base">Join as Vendor</NuxtLink>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-16 md:py-8 mt-[80px] md:mt-0">
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          <!-- Text Content -->
          <div class="max-w-xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-800 text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in mt-12 sm:mt-0">
              <span class="text-primary-800">✨ AI-Powered</span>
              <span class="text-slate-300">•</span>
              <span>Nigeria's Gift Marketplace</span>
            </div>

            <h1 class="font-heading text-4xl md:text-5xl lg:text-5xl font-extrabold text-slate-900 leading-tight mb-6 animate-slide-up">
              Grow Your Business with
              <span class="text-primary-800">High-Intent Buyers</span>
            </h1>

            <p class="text-lg text-slate-600 leading-relaxed mb-10 animate-slide-up" style="animation-delay: 0.1s">
              Join Nigeria's smartest gifting ecosystem. We use AI to match shoppers with your curated gifts, hampers, and experiences. Focus on creating—we bring the sales.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 animate-slide-up" style="animation-delay: 0.2s">
              <NuxtLink to="/auth/login" class="btn-primary inline-flex items-center justify-center gap-2">
                <Sparkles class="w-4 h-4" />
                Start Selling Today
              </NuxtLink>
              <NuxtLink to="/auth/login" class="btn-secondary inline-flex items-center justify-center">
                Vendor Login
              </NuxtLink>
            </div>
            
            <!-- Stats -->
            <div class="flex gap-8 md:gap-12 mt-12 pt-12 border-t border-slate-200 animate-fade-in" style="animation-delay: 0.4s">
              <div>
                <div class="text-2xl font-heading font-bold text-slate-900">50k+</div>
                <div class="text-sm text-slate-500 font-medium">Active Shoppers</div>
              </div>
              <div>
                <div class="text-2xl font-heading font-bold text-slate-900">₦200m+</div>
                <div class="text-sm text-slate-500 font-medium">Vendor Payouts</div>
              </div>
              <div>
                <div class="text-2xl font-heading font-bold text-slate-900">0%</div>
                <div class="text-sm text-slate-500 font-medium">Setup Fee</div>
              </div>
            </div>
          </div>

          <!-- Image Storytelling Showcase -->
          <div class="relative h-[400px] lg:h-[600px] animate-fade-in group" style="animation-delay: 0.3s">
            <div class="absolute inset-0 bg-gradient-to-tr from-primary-100 to-accent-100 rounded-[2rem] transform rotate-3 scale-105 transition-transform duration-700 group-hover:rotate-2 group-hover:scale-100"></div>
            
            <div class="relative w-full h-full rounded-[2rem] border border-slate-200 overflow-hidden shadow-xl bg-slate-900">
              <!-- Images -->
              <transition-group name="story-fade" tag="div" class="absolute inset-0">
                <div v-for="(story, index) in heroStories" :key="index" v-show="activeStory === index" class="absolute inset-0">
                  <img 
                    :src="story.image" 
                    :alt="story.title" 
                    class="w-full h-full object-cover transform transition-transform duration-[4000ms] ease-linear"
                    :class="activeStory === index ? 'scale-110' : 'scale-100'"
                  />
                  <!-- Gradient Overlay -->
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
                </div>
              </transition-group>

              <!-- Progress Bars -->
              <div class="absolute top-4 left-4 right-4 flex gap-2 z-20">
                <button 
                  v-for="(story, index) in heroStories" 
                  :key="'nav-'+index"
                  @click="setStory(index)"
                  class="flex-1 h-1.5 rounded-full overflow-hidden bg-white/30 backdrop-blur-sm cursor-pointer hover:h-2 transition-all"
                >
                  <div 
                    class="h-full bg-white"
                    :class="{ 
                      'w-full': index < activeStory, 
                      'w-0': index > activeStory,
                      'story-progress': index === activeStory 
                    }"
                  ></div>
                </button>
              </div>

              <!-- Story Text -->
              <div class="absolute bottom-0 left-0 right-0 p-8 z-20">
                <transition name="slide-up" mode="out-in">
                  <div :key="activeStory">
                    <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider mb-4 border border-white/20">
                      Step {{ activeStory + 1 }}
                    </div>
                    <h3 class="font-heading font-extrabold text-white text-3xl md:text-4xl mb-2">{{ heroStories[activeStory].title }}</h3>
                    <p class="text-white/90 text-lg md:text-xl">{{ heroStories[activeStory].description }}</p>
                  </div>
                </transition>
              </div>

              <!-- Navigation Overlays (Click sides to advance) -->
              <div class="absolute inset-0 flex z-10">
                <button @click="setStory((activeStory - 1 + heroStories.length) % heroStories.length)" class="flex-1 cursor-pointer focus:outline-none"></button>
                <button @click="setStory((activeStory + 1) % heroStories.length)" class="flex-1 cursor-pointer focus:outline-none"></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="text-center mb-16">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">How It Works for Vendors</h2>
          <p class="text-lg text-slate-500 max-w-2xl mx-auto">Three simple steps to scale your gifting brand</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="(step, i) in steps" :key="i" class="text-center p-8">
            <div class="w-16 h-16 mx-auto mb-6 rounded-2xl flex items-center justify-center text-primary-800"
                 :class="step.bgClass">
              <component :is="step.icon" class="w-8 h-8" />
            </div>
            <div class="text-sm font-semibold text-primary-800 mb-2">Step {{ i + 1 }}</div>
            <h3 class="text-xl font-heading font-bold text-slate-900 mb-3">{{ step.title }}</h3>
            <p class="text-slate-500 leading-relaxed">{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Gift Categories (Vendor representation) -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">What You Can Sell</h2>
          <p class="text-lg text-slate-500">We partner with premium vendors across all major categories</p>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div
            v-for="cat in categories"
            :key="cat.slug"
            class="group relative h-48 md:h-64 rounded-3xl overflow-hidden cursor-pointer"
          >
            <img :src="cat.image" :alt="cat.name" class="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
            <div class="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent"></div>
            <div class="absolute bottom-0 left-0 right-0 p-5 md:p-6">
              <h3 class="font-heading font-bold text-white text-lg md:text-xl mb-1">{{ cat.name }}</h3>
              <p class="text-sm text-slate-300">High Demand</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- AI Feature Spotlight (Vendor tailored) -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-50 text-primary-800 text-sm font-semibold mb-6">
              ✨ AI-Powered
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-6">
              Let Our AI Find Your
              <span class="text-primary-800">Perfect Buyer</span>
            </h2>
            <p class="text-lg text-slate-500 leading-relaxed mb-8">
              No more struggling with marketing or ads. Our GiftGenius AI analyzes user requests and actively recommends your products when they are the perfect match for the occasion and budget.
            </p>
            <ul class="space-y-4 mb-8">
              <li v-for="feature in aiFeatures" :key="feature" class="flex items-start gap-3">
                <div class="w-6 h-6 rounded-full bg-success-500 text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check class="w-3.5 h-3.5" />
                </div>
                <span class="text-slate-700">{{ feature }}</span>
              </li>
            </ul>
            <NuxtLink to="/auth/login" class="btn-primary inline-flex items-center gap-2">
              Create Vendor Profile
              <ArrowRight class="w-4 h-4" />
            </NuxtLink>
          </div>

          <div class="bg-gradient-to-br from-primary-50 to-accent-50 rounded-3xl p-8 border border-primary-100">
            <div class="bg-white rounded-2xl border border-slate-200 p-6 mb-4">
              <div class="text-sm text-slate-400 mb-2">Shopper's Request:</div>
              <p class="text-slate-700">"Looking for a corporate appreciation gift under ₦50,000. Needs to feel premium with some luxury snacks."</p>
            </div>
            <div class="bg-primary-800 text-white rounded-2xl p-6">
              <div class="flex items-center gap-2 mb-3">
                <span class="text-accent-400">✨</span>
                <span class="text-sm font-semibold text-primary-200">AI Matched Your Store</span>
              </div>
              <div class="space-y-3">
                <div v-for="(rec, i) in mockRecommendations" :key="i" class="flex items-center gap-3 p-3 bg-white/10 rounded-xl">
                  <div class="text-2xl">{{ rec.emoji }}</div>
                  <div class="flex-1">
                    <div class="font-semibold text-sm">{{ rec.name }}</div>
                    <div class="text-primary-200 text-xs">{{ rec.reason }}</div>
                  </div>
                  <div class="text-accent-400 font-bold text-sm">{{ rec.score }}% Match</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials (Vendor tailored) -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 overflow-clip py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-heading font-bold text-slate-900 mb-4">Trusted by Top Brands</h2>
          <p class="text-lg text-slate-500">See what our vendor partners are saying</p>
        </div>
      </div>

      <!-- Infinite Marquee -->
      <div class="relative flex overflow-hidden">
        <div class="marquee-container gap-6 py-4 px-3 flex">
          <div v-for="(testimonial, i) in [...testimonials, ...testimonials, ...testimonials, ...testimonials]" :key="i" class="w-80 md:w-96 flex-shrink-0 card p-6 whitespace-normal">
            <div class="flex items-center gap-1 mb-4">
              <Star v-for="s in 5" :key="s" class="w-4 h-4 text-accent-500 fill-current" />
            </div>
            <p class="text-slate-600 leading-relaxed mb-4">"{{ testimonial.text }}"</p>
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center flex-shrink-0">
                <span class="text-primary-800 font-bold text-sm">{{ testimonial.name.charAt(0) }}</span>
              </div>
              <div>
                <div class="font-semibold text-slate-900 text-sm">{{ testimonial.name }}</div>
                <div class="text-slate-400 text-xs">{{ testimonial.location }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vendor Ad Section (Actually Buyer Ad equivalent - "Shoppers are waiting") -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-white py-24 md:py-8">
      <div class="section-container relative z-10">
        <div class="bg-slate-900 rounded-[2rem] overflow-hidden grid grid-cols-1 lg:grid-cols-2">
          <div class="p-12 md:p-16 flex flex-col justify-center">
            <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 text-white text-xs font-bold uppercase tracking-wider mb-6 w-fit">
              Massive Reach
            </div>
            <h2 class="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
              Connect With Active Shoppers
            </h2>
            <p class="text-lg text-slate-300 leading-relaxed mb-8">
              We market to thousands of corporate clients and individuals looking for premium gifts in Nigeria. Your products will be put directly in front of buyers with their wallets out, ready to make a purchase.
            </p>
            <NuxtLink to="/auth/login" class="btn-primary w-fit !bg-white !text-slate-900 hover:!bg-slate-100">
              Claim Your Storefront
            </NuxtLink>
          </div>
          <div class="relative h-64 lg:h-auto">
            <img 
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" 
              alt="Vendor packaging gifts" 
              class="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="md:sticky md:top-[80px] min-h-[calc(100vh-80px)] flex flex-col justify-center bg-slate-50 bg-dotted py-20 md:py-8">
      <div class="section-container relative z-10">
        <div class="bg-white rounded-[3rem] border border-slate-200 p-12 md:p-20 text-center relative overflow-hidden shadow-sm">
          <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop')] opacity-5 bg-cover bg-center"></div>
          <div class="relative z-10 max-w-2xl mx-auto">
            <h2 class="text-3xl md:text-5xl font-heading font-extrabold text-slate-900 mb-6">Ready to Grow Your Sales?</h2>
            <p class="text-xl text-slate-500 mb-10">Join CurateWithNG today and let our AI connect you with your next best customer.</p>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/auth/login" class="btn-primary !py-3 !px-8">Create Free Vendor Account</NuxtLink>
              <NuxtLink to="/auth/login" class="border-2 border-slate-200 text-slate-700 bg-white px-8 py-3 rounded-xl text-sm font-semibold hover:bg-slate-50 transition-all">Sign In</NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { Sparkles, Check, ArrowRight, Star, Store, Gift, CreditCard } from 'lucide-vue-next';
import { onMounted, onUnmounted, ref } from 'vue';

definePageMeta({ layout: false });

useHead({
  title: 'Vendor Portal — CurateWithNG',
});

// --- Storytelling Hero Data ---
const heroStories = [
  {
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2000&auto=format&fit=crop',
    title: 'The Storefront',
    description: 'Set up your curated profile and add your best products.'
  },
  {
    image: 'https://images.unsplash.com/photo-1531315630201-bb15abeb1653?q=80&w=2000&auto=format&fit=crop',
    title: 'The AI Match',
    description: 'GiftGenius connects shoppers directly to your offerings.'
  },
  {
    image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?q=80&w=2000&auto=format&fit=crop',
    title: 'The Order',
    description: 'You get notified instantly when an order is placed and paid for.'
  },
  {
    image: 'https://images.unsplash.com/photo-1512909006721-3d6018887383?q=80&w=2000&auto=format&fit=crop',
    title: 'The Payout',
    description: 'Fulfill the order and get your funds settled quickly.'
  }
];

const activeStory = ref(0);
let storyInterval: ReturnType<typeof setInterval>;

const startStoryInterval = () => {
  storyInterval = setInterval(() => {
    activeStory.value = (activeStory.value + 1) % heroStories.length;
  }, 4000);
};

onMounted(() => {
  startStoryInterval();
});

onUnmounted(() => {
  if (storyInterval) clearInterval(storyInterval);
});

const setStory = (index: number) => {
  activeStory.value = index;
  clearInterval(storyInterval);
  startStoryInterval();
};
// ------------------------------

const steps = [
  { icon: Store, title: 'Create Your Store', description: 'Sign up and upload your gifts, hampers, and services. Set your pricing and availability easily.', bgClass: 'bg-primary-50' },
  { icon: Sparkles, title: 'Receive AI Matches', description: 'Our AI engine recommends your products to users based on their budget and recipient profile.', bgClass: 'bg-accent-50' },
  { icon: CreditCard, title: 'Fulfill & Get Paid', description: 'Accept orders, package beautifully, and get paid instantly directly into your bank account.', bgClass: 'bg-emerald-50' },
];

const categories = [
  { name: 'Gift Hampers', slug: 'hampers', image: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?w=800&q=80' },
  { name: 'Fashion & Style', slug: 'fashion', image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?w=800&q=80' },
  { name: 'Experiences', slug: 'experiences', image: 'https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=800&q=80' },
  { name: 'Wellness & Spa', slug: 'wellness', image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80' },
  { name: 'Tech & Gadgets', slug: 'tech', image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?w=800&q=80' },
  { name: 'Home & Living', slug: 'home', image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80' },
  { name: 'Jewellery', slug: 'jewellery', image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?w=800&q=80' },
  { name: 'Corporate Packs', slug: 'corporate', image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80' },
];

const aiFeatures = [
  'Zero marketing spend required—the AI finds the buyers for you',
  'Matches based on exact recipient profiles (age, occasion, relation)',
  'High conversion rates because buyers are matched with exactly what they want',
  'Automated inventory and order management',
];

const mockRecommendations = [
  { emoji: '🍾', name: 'Premium Corporate Hamper', reason: 'Fits the corporate appreciation need', score: 98 },
  { emoji: '🍫', name: 'Executive Treat Box', reason: 'Great luxury snack option', score: 92 },
  { emoji: '🖋️', name: 'Custom Engraved Pen Set', reason: 'Excellent add-on for executives', score: 85 },
];

const testimonials = [
  { name: 'Hamper Haven Co.', location: 'Lagos', text: 'Since joining CurateWithNG, our corporate orders have tripled. The AI matching means we only get serious buyers!' },
  { name: 'Bespoke Treats NG', location: 'Abuja', text: 'The dashboard is so easy to use, and payouts are incredibly fast. We don\'t have to chase clients for payment anymore.' },
  { name: 'Luxe Gifting', location: 'Port Harcourt', text: 'Our high-end hampers are finally reaching the right audience. The platform truly understands premium gifting.' },
];
</script>

<style scoped>
.marquee-container {
  display: flex;
  width: max-content;
  animation: marquee 30s linear infinite;
}
.marquee-container:hover {
  animation-play-state: paused;
}
@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

/* Story Transitions */
.story-fade-enter-active,
.story-fade-leave-active {
  transition: opacity 0.8s ease;
}
.story-fade-enter-from,
.story-fade-leave-to {
  opacity: 0;
}

.story-progress {
  animation: fillProgress 4s linear forwards;
}

@keyframes fillProgress {
  0% { width: 0%; }
  100% { width: 100%; }
}
</style>
