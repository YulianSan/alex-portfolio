<script setup lang="ts">
interface PropsLinkIcon {
  icon: string
}
defineProps<PropsLinkIcon>()
</script>
<template>
  <div class="flex items-center gap-x-2 p-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 rounded-lg">
    <icon :name="$props.icon" class="text-black text-2xl dark:text-white"/>
    <slot />
  </div>
</template>
