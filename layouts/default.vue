<template>
  <div class="min-h-screen bg-slate-50 flex font-sans selection:bg-primary-200 selection:text-primary-900">
    <!-- Sidebar -->
    <aside class="w-72 bg-slate-950 text-white flex flex-col fixed inset-y-0 left-0 z-20 shadow-2xl border-r border-white/5">
      <div class="p-8 pb-6">
        <div class="font-heading font-extrabold text-3xl tracking-tight flex items-center gap-2">
          <div class="w-8 h-8 bg-gradient-to-br from-primary-600 to-primary-900 rounded-lg flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.3)]">
            <span class="text-white font-bold text-sm">C</span>
          </div>
          Curate<span class="text-primary-400">With</span>NG
        </div>
        <div class="mt-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/5 border border-white/10">
          <div class="w-1.5 h-1.5 rounded-full bg-accent-400 shadow-[0_0_8px_rgba(74,222,128,0.5)]"></div>
          <span class="text-slate-300 text-[10px] font-bold tracking-widest uppercase">Vendor Portal</span>
        </div>
      </div>
      
      <div class="flex-1 overflow-y-auto py-6 px-4">
        <nav class="space-y-1.5">
          <NuxtLink v-for="link in navLinks" :key="link.path" :to="link.path"
            class="flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 text-slate-400 hover:bg-white/5 hover:text-white group relative"
            active-class="active-link bg-gradient-to-r from-primary-900/40 to-transparent text-white border-l-2 border-primary-500">
            <component :is="link.icon" class="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
            {{ link.name }}
          </NuxtLink>
        </nav>
      </div>

      <div class="p-6 border-t border-white/10 bg-slate-900/30">
        <div class="flex items-center gap-3.5 mb-5">
          <div class="w-11 h-11 rounded-full bg-gradient-to-br from-primary-700 to-primary-900 flex items-center justify-center font-bold text-lg shadow-inner border border-white/10">
            {{ vendor?.businessName?.charAt(0) || 'V' }}
          </div>
          <div class="flex-1 overflow-hidden">
            <div class="text-sm font-bold text-white truncate">{{ vendor?.businessName }}</div>
            <div class="text-xs text-slate-400 truncate">{{ user?.email }}</div>
          </div>
        </div>
        <button @click="handleLogout" class="w-full py-2.5 px-4 rounded-xl text-sm font-bold text-red-400 bg-red-500/10 hover:bg-red-500/20 hover:text-red-300 transition-all duration-300 flex items-center justify-center gap-2 border border-red-500/20">
          Sign Out
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <main class="flex-1 ml-72 flex flex-col min-h-screen relative">
      <!-- Topbar -->
      <header class="bg-white/70 backdrop-blur-xl border-b border-slate-200/50 h-20 flex items-center justify-between px-10 sticky top-0 z-10 supports-[backdrop-filter]:bg-white/50">
        <div class="flex items-center gap-4">
          <div v-if="!vendor?.isApproved" class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 border border-amber-200 text-amber-700 text-xs font-bold uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-amber-500 animate-pulse"></span>
            Pending Approval
          </div>
          <div v-else class="flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold uppercase tracking-wide">
            <span class="w-2 h-2 rounded-full bg-emerald-500"></span>
            Active Store
          </div>
        </div>
        <div>
          <!-- Notification bell -->
          <button class="relative w-10 h-10 rounded-full bg-slate-100/80 border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-md transition-all duration-300">
            <Bell class="w-5 h-5" />
            <span v-if="unreadCount > 0" class="absolute -top-1 -right-1 w-5 h-5 bg-red-500 text-white text-[10px] rounded-full flex items-center justify-center font-bold border-2 border-white shadow-sm">
              {{ unreadCount }}
            </span>
          </button>
        </div>
      </header>

      <!-- Page Content -->
      <div class="flex-1 p-10 max-w-7xl mx-auto w-full">
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
import { onMounted, watch } from 'vue';
import { useUser } from '~/composables/modules/auth/user';
import { useNotifications } from '~/composables/modules/notifications/useNotifications';
import { LayoutDashboard, Gift, Package, CreditCard, Store, AlertTriangle, Bell } from 'lucide-vue-next';

const { user, vendor, logOut } = useUser();
const { unreadCount, connectSocket, disconnectSocket, fetchUnreadCount } = useNotifications();

onMounted(() => {
  if (user.value) {
    connectSocket();
    fetchUnreadCount();
  }
});

watch(() => user.value, (newVal) => {
  if (newVal) {
    connectSocket();
    fetchUnreadCount();
  } else {
    disconnectSocket();
  }
});

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

<style scoped>
/* Scoped active link styling for the new gradient layout */
.active-link {
  color: white !important;
  font-weight: 700;
}
.active-link svg {
  color: theme('colors.primary.400');
}
</style>
