<template>
  <div class="w-full animate-scale-in">
    <div class="flex items-center gap-2 mb-6" v-if="step === 2">
      <button @click="step = 1" type="button" class="w-8 h-8 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900 transition-colors">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"></path></svg>
      </button>
      <span class="text-sm font-semibold text-slate-500">Back</span>
    </div>

    <h2 class="text-2xl font-heading font-bold text-slate-900 text-center mb-2">
      {{ step === 1 ? 'Create Vendor Account' : 'Business Details' }}
    </h2>
    <p class="text-slate-500 text-center mb-8">
      {{ step === 1 ? 'Join CurateWithNG and start selling to thousands of shoppers' : 'Tell us about your premium gifting business' }}
    </p>

    <!-- Progress Indicator -->
    <div class="flex gap-2 mb-8 justify-center">
      <div class="h-1.5 w-16 rounded-full transition-colors duration-300" :class="step >= 1 ? 'bg-primary-900' : 'bg-slate-200'"></div>
      <div class="h-1.5 w-16 rounded-full transition-colors duration-300" :class="step === 2 ? 'bg-primary-900' : 'bg-slate-200'"></div>
    </div>

    <form @submit.prevent="step === 1 ? goToNextStep() : handleRegister()" class="space-y-4">
      
      <!-- Step 1: Personal Details -->
      <div v-show="step === 1" class="space-y-4 animate-scale-in">
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium text-slate-700 mb-1 block">First Name</label>
            <input v-model="form.firstName" type="text" required class="input-field" placeholder="Jane" />
          </div>
          <div>
            <label class="text-sm font-medium text-slate-700 mb-1 block">Last Name</label>
            <input v-model="form.lastName" type="text" required class="input-field" placeholder="Doe" />
          </div>
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700 mb-1 block">Email</label>
          <input v-model="form.email" type="email" required class="input-field" placeholder="you@example.com" />
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700 mb-1 block">Phone (optional)</label>
          <input v-model="form.phone" type="tel" class="input-field" placeholder="801 234 5678" />
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700 mb-1 block">Password</label>
          <input v-model="form.password" type="password" required minlength="8" title="Password must be at least 8 characters long" class="input-field" placeholder="At least 8 characters" />
        </div>
        <button type="submit" class="btn-primary w-full flex items-center justify-center gap-2 py-3 mt-4 text-lg">
          Continue
          <svg class="w-5 h-5 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
        </button>
      </div>

      <!-- Step 2: Business Details -->
      <div v-show="step === 2" class="space-y-4 animate-scale-in">
        <div>
          <label class="text-sm font-medium text-slate-700 mb-1 block">Business/Brand Name</label>
          <input v-model="form.businessName" type="text" :required="step === 2" class="input-field" placeholder="Jane's Hampers" />
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div>
            <label class="text-sm font-medium text-slate-700 mb-1 block">State</label>
            <select v-model="form.state" :required="step === 2" class="input-field bg-white">
              <option value="" disabled>Select State</option>
              <option value="Abuja">Abuja (FCT)</option>
              <option value="Lagos">Lagos</option>
              <option value="Rivers">Rivers</option>
              <option value="Ogun">Ogun</option>
              <option value="Oyo">Oyo</option>
            </select>
          </div>
          <div>
            <label class="text-sm font-medium text-slate-700 mb-1 block">City</label>
            <input v-model="form.city" type="text" :required="step === 2" class="input-field" placeholder="e.g. Ikeja" />
          </div>
        </div>
        <div>
          <label class="text-sm font-medium text-slate-700 mb-1 block">Full Address</label>
          <input v-model="form.address" type="text" class="input-field" placeholder="e.g. 10 Admiralty Way, Lekki Phase 1" />
        </div>
        
        <button type="submit" :disabled="loading" class="btn-primary w-full flex items-center justify-center gap-2 py-3 mt-4 text-lg shadow-xl shadow-primary-900/20">
          <Loader2 v-if="loading" class="w-5 h-5 animate-spin" />
          {{ loading ? 'Creating store...' : 'Complete Setup' }}
        </button>
      </div>
    </form>

    <div class="mt-6" v-if="step === 1">
      <div class="relative">
        <div class="absolute inset-0 flex items-center"><div class="w-full border-t border-slate-200"></div></div>
        <div class="relative flex justify-center text-sm"><span class="px-2 bg-white text-slate-400">Or</span></div>
      </div>
      <button @click="handleGoogleLogin" type="button" class="mt-4 flex items-center justify-center gap-3 w-full py-3 px-4 border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-colors shadow-sm">
        <svg class="w-5 h-5" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>
        Sign up with Google
      </button>
    </div>

    <p class="text-center text-sm text-slate-500 mt-6" v-if="step === 1">
      Already have a vendor account? <NuxtLink to="/auth/login" class="text-primary-900 font-bold hover:underline">Sign in</NuxtLink>
    </p>
  </div>
</template>

<script setup lang="ts">
import { Loader2 } from 'lucide-vue-next';
import { reactive, ref } from 'vue';

definePageMeta({ 
  layout: 'auth',
  authImageTextTitle: 'Join CurateWithNG.',
  authImageTextBody: 'Turn your premium crafts into a thriving business on our platform.'
});
useHead({ title: 'Create Vendor Account — CurateWithNG' });

import { useAuth } from '~/composables/modules/auth/useAuth';
import { useCustomToast } from '~/composables/core/useCustomToast';

const { register, firebaseGoogleLogin } = useAuth();
const { showToast } = useCustomToast();
const loading = ref(false);
const step = ref(1);

const form = reactive({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  businessName: '',
  state: '',
  city: '',
  address: ''
});

const goToNextStep = () => {
  if (form.password.length < 8) {
    showToast({ title: 'Invalid', message: 'Password must be at least 8 characters long', toastType: 'warning' });
    return;
  }
  step.value = 2;
};

const handleRegister = async () => {
  loading.value = true;
  try {
    await register(form);
    navigateTo('/dashboard');
  } catch (e: any) {
    showToast({ title: 'Error', message: e.data?.message || e.message || 'Registration failed. Please try again.', toastType: 'error' });
  } finally {
    loading.value = false;
  }
};

const handleGoogleLogin = async () => {
  loading.value = true;
  try {
    const { $firebaseAuth } = useNuxtApp();
    const { GoogleAuthProvider, signInWithPopup } = await import('firebase/auth');
    const provider = new GoogleAuthProvider();
    
    const result = await signInWithPopup($firebaseAuth, provider);
    const idToken = await result.user.getIdToken();
    
    await firebaseGoogleLogin({ token: idToken });
    navigateTo('/dashboard');
  } catch (e: any) {
    showToast({ title: 'Error', message: e.data?.message || e.message || 'Google Login failed', toastType: 'error' });
  } finally {
    loading.value = false;
  }
};
</script>

<style scoped>
.input-field {
  @apply w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-900/20 focus:border-primary-900 transition-all shadow-sm;
}
.btn-primary {
  @apply bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl transition-all;
}
.animate-scale-in {
  animation: scale-in 0.3s ease-out;
}
@keyframes scale-in {
  from { opacity: 0; transform: scale(0.98) translateY(10px); }
  to { opacity: 1; transform: scale(1) translateY(0); }
}
</style>
