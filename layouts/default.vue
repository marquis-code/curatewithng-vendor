<template>
  <div class="min-h-screen bg-slate-50 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-primary-900 text-white flex flex-col fixed inset-y-0 left-0 z-10">
      <div class="p-6">
        <div class="font-heading font-extrabold text-2xl tracking-tight">
          Curate<span class="text-accent-400">With</span>NG
        </div>
        <div class="text-primary-200 text-xs mt-1 font-medium tracking-wider uppercase">Vendor Portal</div>
      </div>
      
      <div class="flex-1 overflow-y-auto py-4">
        <nav class="space-y-1 px-3">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors text-primary-100 hover:bg-primary-800/50 hover:text-white"
            active-class="bg-primary-800 text-white">
            <component :is="link.icon" class="w-5 h-5" />
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>

      <div class="p-4 border-t border-primary-800">
        <div class="flex items-center gap-3 mb-4">
          <div class="w-10 h-10 rounded-full bg-primary-800 flex items-center justify-center font-bold">
            {{ vendor?.businessName?.charAt(0) || 'V' }}
          </div>
          <div class="flex-1 overflow-hidden">
            <div class="text-sm font-medium truncate">{{ vendor?.businessName }}</div>
            <div class="text-xs text-primary-300 truncate">{{ user?.email }}</div>
          </div>
        </div>
        <button @click="handleLogout" class="w-full py-2 px-3 rounded-lg text-sm font-medium text-danger-300 hover:bg-danger-500/10 hover:text-danger-200 transition-colors flex items-center justify-center gap-2">
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-64 flex flex-col min-h-screen">
      <!-- Topbar -->
      <header class="bg-white border-b border-slate-200 h-16 flex items-center justify-between px-8 sticky top-0 z-10">
        <div class="flex items-center gap-4">
          <span v-if="!vendor?.isApproved" class="badge-warning">Pending Approval</span>
          <span v-else class="badge-success">Active</span>
        </div>
        <div>
          <!-- Notifications could go here -->
        </div>
      </header>

      <!-- Page Content -->
      <div class="flex-1 p-8">
        <!-- Not approved warning banner -->
        <div v-if="!vendor?.isApproved" class="mb-6 p-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 flex items-start gap-3">
          <AlertTriangle class="w-6 h-6 shrink-0" />
          <div>
            <h3 class="font-bold text-sm">Account Pending Approval</h3>
            <p class="text-sm mt-1 text-amber-700">Your vendor account is currently being reviewed by our team. You can set up your store and add products, but they won't be visible to customers until approved.</p>
          </div>
        </div>

        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useUser } from '~/composables/modules/auth/user';
import { LayoutDashboard, Gift, Package, CreditCard, Store, AlertTriangle } from 'lucide-vue-next';
const { user, vendor, logOut } = useUser();

const navLinks = [
  { name: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  { name: 'My Gifts', path: '/gifts', icon: Gift },
  { name: 'Orders', path: '/orders', icon: Package },
  { name: 'Earnings & Payouts', path: '/payouts', icon: CreditCard },
  { name: 'Store Profile', path: '/settings', icon: Store },
];

const handleLogout = () => {
  logOut();
  navigateTo('/auth/login');
};
</script>

<style>
/* NuxtLink sets exactly this class when active, so we target it to ensure it overrides */
a.router-link-active {
  @apply bg-primary-800 text-white;
}
</style>
