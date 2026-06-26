<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">Dashboard</h1>
        <p class="text-slate-500">Welcome back, {{ vendor?.businessName }}</p>
      </div>
      <div class="flex gap-3">
        <button class="btn-secondary">Download Report</button>
        <NuxtLink to="/gifts/new" class="btn-primary">+ Add New Gift</NuxtLink>
      </div>
    </div>

    <!-- Stats -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <div class="card p-6 bg-gradient-to-br from-white to-slate-50 border-white/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="text-slate-500 text-sm font-medium mb-2">Total Earnings</div>
        <div class="text-3xl font-heading font-bold text-slate-900">
          <span v-if="loadingStats" class="animate-pulse bg-slate-200 text-transparent rounded">000000000</span>
          <span v-else>{{ formatNaira(stats?.totalEarnings || 0) }}</span>
        </div>
      </div>
      <div class="card p-6 bg-gradient-to-br from-white to-slate-50 border-white/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="text-slate-500 text-sm font-medium mb-2">Pending Payout</div>
        <div class="text-3xl font-heading font-bold text-accent-600">
          <span v-if="loadingStats" class="animate-pulse bg-slate-200 text-transparent rounded">000000000</span>
          <span v-else>{{ formatNaira(stats?.pendingPayout || 0) }}</span>
        </div>
      </div>
      <div class="card p-6 bg-gradient-to-br from-white to-slate-50 border-white/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="text-slate-500 text-sm font-medium mb-2">Active Gifts</div>
        <div class="text-3xl font-heading font-bold text-slate-900">
          <span v-if="loadingStats" class="animate-pulse bg-slate-200 text-transparent rounded">00</span>
          <span v-else>{{ stats?.activeGifts || 0 }}</span>
        </div>
      </div>
      <div class="card p-6 bg-gradient-to-br from-white to-slate-50 border-white/50 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
        <div class="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        <div class="text-slate-500 text-sm font-medium mb-2">Today's Orders</div>
        <div class="text-3xl font-heading font-bold text-slate-900">
          <span v-if="loadingStats" class="animate-pulse bg-slate-200 text-transparent rounded">00</span>
          <span v-else>{{ stats?.todayOrders || 0 }}</span>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Chart -->
      <div class="card p-6 lg:col-span-2 shadow-sm border-white/50 bg-gradient-to-b from-white to-slate-50/50">
        <h3 class="font-heading font-bold text-slate-900 mb-6">Revenue Overview</h3>
        <div class="h-[300px] flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl border border-slate-100">
          Chart visualization will appear here
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="card p-6 shadow-sm border-white/50 bg-gradient-to-b from-white to-slate-50/50">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-heading font-bold text-slate-900">Recent Orders</h3>
          <NuxtLink to="/orders" class="text-sm text-primary-800 font-medium">View All</NuxtLink>
        </div>
        
        <div v-if="loadingOrders" class="space-y-4">
          <div v-for="i in 4" :key="i" class="animate-pulse flex items-center gap-3 p-3 border border-transparent">
            <div class="w-10 h-10 rounded-full bg-slate-200"></div>
            <div class="flex-1 space-y-2">
              <div class="h-4 bg-slate-200 rounded w-1/2"></div>
              <div class="h-3 bg-slate-200 rounded w-1/3"></div>
            </div>
            <div class="h-4 bg-slate-200 rounded w-1/4"></div>
          </div>
        </div>
        <div v-else-if="recentOrders.length === 0" class="flex flex-col items-center justify-center py-10 text-center">
          <div class="text-slate-400 mb-2">📦</div>
          <p class="text-slate-500 text-sm">No recent orders found</p>
        </div>
        <div v-else class="space-y-4">
          <div v-for="order in recentOrders.slice(0, 5)" :key="order.id || order._id" class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
            <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-sm">
              📦
            </div>
            <div class="flex-1">
              <div class="text-sm font-semibold text-slate-900">{{ order.orderNumber || 'ORD-...' }}</div>
              <div class="text-xs text-slate-500">{{ order.items?.length || 0 }} items • <span class="capitalize">{{ order.status?.toLowerCase() || 'pending' }}</span></div>
            </div>
            <div class="text-sm font-bold text-slate-900">{{ formatNaira(order.vendorAmount || order.totalAmount || 0) }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useHead({ title: 'Dashboard — Vendor Portal' });

import { onMounted } from 'vue';
import { useUser } from '~/composables/modules/auth/user';
import { useFetchDashboard } from '~/composables/modules/dashboard/useFetchDashboard';

const { vendor } = useUser();
const { stats, recentOrders, loadingStats, loadingOrders, fetchStats, fetchRecentOrders } = useFetchDashboard();

const formatNaira = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
};

onMounted(() => {
  fetchStats();
  fetchRecentOrders();
});
</script>
