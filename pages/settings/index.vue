<template>
  <div class="max-w-4xl">
    <div class="mb-8">
      <h1 class="text-3xl font-heading font-bold text-slate-900 mb-1">Store Profile</h1>
      <p class="text-slate-500">Manage your vendor profile and settings</p>
    </div>

    <div class="card p-8 mb-8">
      <h3 class="font-heading font-bold text-slate-900 mb-6 text-lg">Business Details</h3>
      <form class="space-y-6">
        <div class="flex gap-6 items-center">
          <div class="w-24 h-24 rounded-full bg-slate-100 overflow-hidden flex items-center justify-center border-2 border-dashed border-slate-300">
            <span class="text-sm text-slate-500">Logo</span>
          </div>
          <div>
            <button type="button" class="btn-secondary">Upload Logo</button>
            <p class="text-xs text-slate-500 mt-2">Recommended size: 512x512px. Max 2MB.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label class="text-sm font-medium text-slate-700 mb-1 block">Business Name</label>
            <input :value="vendor?.businessName" type="text" class="input-field" />
          </div>
          <div>
            <label class="text-sm font-medium text-slate-700 mb-1 block">Store Slug (URL)</label>
            <input :value="vendor?.slug" type="text" class="input-field" disabled />
          </div>
        </div>

        <div>
          <label class="text-sm font-medium text-slate-700 mb-1 block">Description</label>
          <textarea :value="vendor?.description" rows="4" class="input-field"></textarea>
        </div>
        
        <div class="flex justify-end pt-4">
          <button type="button" class="btn-primary">Save Changes</button>
        </div>
      </form>
    </div>

    <div class="card p-8">
      <h3 class="font-heading font-bold text-slate-900 mb-6 text-lg">Payout Details</h3>
      <div class="p-4 bg-slate-50 border border-slate-200 rounded-xl">
        <p class="text-sm text-slate-600 mb-4">Your payouts are securely processed via Paystack. Set up your bank account details below to receive your earnings automatically.</p>
        <button class="btn-secondary text-primary-800 border-primary-200 hover:bg-primary-50">
          Setup Payout Account
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({ middleware: 'auth' });
useHead({ title: 'Settings — Vendor Portal' });

import { useUser } from '~/composables/modules/auth/user';
const { vendor } = useUser();
</script>
