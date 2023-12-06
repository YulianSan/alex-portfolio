<script setup lang="ts">
interface PropsLinkIcon {
  icon: string
}
defineProps<PropsLinkIcon>()
</script>
<template>
  <div class="w-full flex items-center gap-x-8 p-4 hover:bg-zinc-200 
    dark:hover:bg-zinc-800 rounded-lg">
    <icon :name="$props.icon" class="text-black flex-none w-6 text-2xl dark:text-white"/>
    <div class="flex-auto break-keep whitespace-nowrap">
      <slot />
    </div>
  </div>
</template>
