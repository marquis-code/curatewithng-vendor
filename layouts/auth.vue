<template>
  <div class="min-h-screen relative overflow-hidden bg-slate-950 flex items-center justify-center p-6">
    <!-- Animated background gradients -->
    <div class="absolute inset-0 z-0 overflow-hidden">
      <div class="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary-900/30 blur-[120px] mix-blend-screen animate-blob"></div>
      <div class="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-accent-600/20 blur-[120px] mix-blend-screen animate-blob animation-delay-2000"></div>
      <div class="absolute -bottom-[20%] left-[20%] w-[80%] h-[80%] rounded-full bg-purple-900/30 blur-[120px] mix-blend-screen animate-blob animation-delay-4000"></div>
    </div>
    
    <!-- Pattern overlay -->
    <div class="absolute inset-0 z-0 bg-[url('~/assets/images/noise.png')] opacity-20 mix-blend-overlay"></div>

    <div class="w-full max-w-[1200px] h-[85vh] min-h-[700px] rounded-[2.5rem] overflow-hidden flex shadow-2xl relative z-10 bg-white/5 backdrop-blur-2xl border border-white/10 ring-1 ring-white/20">
      
      <!-- Left side: Form slot inside pristine glass -->
      <div class="w-full lg:w-1/2 relative flex flex-col justify-center px-6 sm:px-16 lg:px-20 py-12 overflow-y-auto bg-white">
        <div class="w-full max-w-sm mx-auto">
          <NuxtLink to="/" class="flex items-center justify-center gap-3 mb-10 group">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-800 to-primary-950 rounded-2xl flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-all duration-300">
              <span class="text-white font-heading font-bold text-xl">C</span>
            </div>
            <span class="font-heading font-extrabold text-2xl text-slate-900 tracking-tight">Curate<span class="text-primary-800">With</span>NG <span class="text-primary-800 text-xs ml-1 px-2.5 py-1 bg-primary-50/80 rounded-full inline-block align-middle font-bold border border-primary-200/50 uppercase tracking-wider">Vendor</span></span>
          </NuxtLink>
          <slot />
        </div>
      </div>

      <!-- Right side: Floating Premium Card Image -->
      <div class="hidden lg:flex w-1/2 relative items-center justify-center p-10 bg-slate-950/40">
        <div class="relative w-full h-full overflow-hidden rounded-3xl shadow-2xl group">
          <img 
            src="~/assets/images/auth-bg.png" 
            alt="Premium Artisan Crafts" 
            class="absolute inset-0 w-full h-full object-cover opacity-80 transform group-hover:scale-110 transition-transform duration-1000 ease-out"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/60 to-transparent"></div>
          
          <div class="absolute inset-0 p-12 flex flex-col justify-end">
            <!-- Glassmorphism text card -->
            <div class="backdrop-blur-xl bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <h2 class="font-heading font-extrabold text-4xl leading-tight mb-4 text-white drop-shadow-lg">
                {{ title }}
              </h2>
              <p class="text-white/90 text-lg font-medium max-w-md drop-shadow-md">
                {{ body }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
const route = useRoute();
const title = computed(() => route.meta.authImageTextTitle || 'Join CurateWithNG');
const body = computed(() => route.meta.authImageTextBody || 'Turn your premium crafts into a thriving business.');
</script>

<style scoped>
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}
.animate-blob {
  animation: blob 10s infinite alternate;
}
.animation-delay-2000 {
  animation-delay: 2s;
}
.animation-delay-4000 {
  animation-delay: 4s;
}
</style>
