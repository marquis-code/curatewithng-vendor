<template>
  <div class="min-h-screen bg-slate-50 flex items-center justify-center p-4">
    <div class="w-full max-w-md">
      <NuxtLink to="/" class="flex items-center justify-center gap-2 mb-8">
        <div class="w-10 h-10 bg-gradient-brand rounded-xl flex items-center justify-center bg-primary-800">
          <span class="text-white font-heading font-bold text-lg">C</span>
        </div>
        <span class="font-heading font-bold text-2xl text-slate-900">Curate<span class="text-accent-500">With</span>NG <span class="text-primary-800 text-sm ml-1 px-2 py-0.5 bg-primary-50 rounded-full inline-block align-middle">Vendor</span></span>
      </NuxtLink>
      <slot />
    </div>
  </div>
</template>
