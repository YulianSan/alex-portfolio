<template>
  <div class="flex bg-white text-black dark:bg-zinc-900 min-h-screen dark:text-white">
    <LayoutHeader />
    <main class="flex-1 sm:pt-0 pt-16">
      <slot />
    </main>
  </div>
</template>
