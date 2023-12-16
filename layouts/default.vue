<template>
  <div class="flex bg-white text-black dark:bg-zinc-900 min-h-screen dark:text-white">
    <OrganismHeaderClient />
    <main class="flex-1 sm:pt-6 p-6 pt-16 relative z-30">
      <div class="relative z-30">
        <slot />
      </div>
    </main>
  </div>
</template>

