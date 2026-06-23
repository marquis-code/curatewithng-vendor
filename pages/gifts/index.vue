<template>
  <div>
    <div class="flex justify-between items-center mb-8">
      <div>
        <h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">My Gifts</h1>
        <p class="text-slate-500">Manage your product catalog</p>
      </div>
      <button class="btn-primary">+ Add New Gift</button>
    </div>

    <div class="card overflow-hidden">
      <!-- Toolbar -->
      <div class="p-4 border-b border-slate-200 flex justify-between items-center bg-slate-50">
        <input type="text" placeholder="Search gifts..." class="input-field !py-2 max-w-sm" />
        <select class="input-field !py-2 !w-auto">
          <option value="">All Status</option>
          <option value="active">Active</option>
          <option value="inactive">Inactive</option>
        </select>
      </div>

      <!-- Table -->
      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse">
          <thead>
            <tr class="bg-white border-b border-slate-200 text-sm font-semibold text-slate-600">
              <th class="p-4">Gift</th>
              <th class="p-4">Price</th>
              <th class="p-4">Stock</th>
              <th class="p-4">Status</th>
              <th class="p-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <!-- Empty state for now since we haven't connected the real API list -->
            <tr v-if="loading" v-for="i in 3" :key="i" class="border-b border-slate-100">
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <div class="skeleton h-12 w-12 rounded-lg"></div>
                  <div class="skeleton-text w-32"></div>
                </div>
              </td>
              <td class="p-4"><div class="skeleton-text w-16"></div></td>
              <td class="p-4"><div class="skeleton-text w-10"></div></td>
              <td class="p-4"><div class="skeleton-text w-20"></div></td>
              <td class="p-4 text-right"><div class="skeleton-text w-12 ml-auto"></div></td>
            </tr>
            <tr v-else-if="gifts.length === 0" class="border-b border-slate-100 bg-white">
              <td colspan="5" class="p-12 text-center text-slate-500">
                <div class="text-4xl mb-3">🎁</div>
                <p>You haven't added any gifts yet</p>
                <button class="btn-secondary mt-4">Add Your First Gift</button>
              </td>
            </tr>
            <tr v-else v-for="gift in gifts" :key="gift._id" class="border-b border-slate-100 bg-white hover:bg-slate-50 transition-colors">
              <td class="p-4">
                <div class="flex items-center gap-3">
                  <img :src="gift.images[0] || '/placeholder.png'" class="w-12 h-12 rounded-lg object-cover bg-slate-100" />
                  <div class="font-medium text-slate-900">{{ gift.name }}</div>
                </div>
              </td>
              <td class="p-4 font-medium text-slate-900">{{ formatNaira(gift.price) }}</td>
              <td class="p-4">{{ gift.stock }}</td>
              <td class="p-4">
                <span :class="gift.isActive ? 'badge-success' : 'badge-neutral'">
                  {{ gift.isActive ? 'Active' : 'Draft' }}
                </span>
              </td>
              <td class="p-4 text-right">
                <button class="text-primary-600 hover:text-primary-800 font-medium text-sm">Edit</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useHead({ title: 'Gifts — Vendor Portal' });

const gifts = ref<any[]>([]);
const loading = ref(false);

const formatNaira = (amount: number) => {
  return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN' }).format(amount);
};
</script>
