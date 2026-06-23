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
      <div class="card p-6">
        <div class="text-slate-500 text-sm font-medium mb-2">Total Earnings</div>
        <div class="text-3xl font-heading font-bold text-slate-900">{{ formatNaira(vendor?.totalEarnings || 0) }}</div>
      </div>
      <div class="card p-6">
        <div class="text-slate-500 text-sm font-medium mb-2">Pending Payout</div>
        <div class="text-3xl font-heading font-bold text-accent-600">{{ formatNaira(vendor?.pendingPayout || 0) }}</div>
      </div>
      <div class="card p-6">
        <div class="text-slate-500 text-sm font-medium mb-2">Active Gifts</div>
        <div class="text-3xl font-heading font-bold text-slate-900">12</div>
      </div>
      <div class="card p-6">
        <div class="text-slate-500 text-sm font-medium mb-2">Recent Orders</div>
        <div class="text-3xl font-heading font-bold text-slate-900">5</div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Chart -->
      <div class="card p-6 lg:col-span-2">
        <h3 class="font-heading font-bold text-slate-900 mb-6">Revenue Overview</h3>
        <div class="h-[300px] flex items-center justify-center text-slate-400 bg-slate-50 rounded-xl border border-slate-100">
          Chart visualization will appear here
        </div>
      </div>

      <!-- Recent Orders -->
      <div class="card p-6">
        <div class="flex justify-between items-center mb-6">
          <h3 class="font-heading font-bold text-slate-900">Recent Orders</h3>
          <NuxtLink to="/orders" class="text-sm text-primary-800 font-medium">View All</NuxtLink>
        </div>
        <div class="space-y-4">
          <div v-for="i in 4" :key="i" class="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100">
            <div class="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-800 text-sm">
              📦
            </div>
            <div class="flex-1">
              <div class="text-sm font-semibold text-slate-900">ORD-{{ 1000 + i }}</div>
              <div class="text-xs text-slate-500">2 items • Pending</div>
            </div>
            <div class="text-sm font-bold text-slate-900">₦45,000</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useHead({ title: 'Dashboard — Vendor Portal' });

import { useUser } from '~/composables/modules/auth/user';
const { vendor } = useUser();

const formatNaira = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
};
</script>
