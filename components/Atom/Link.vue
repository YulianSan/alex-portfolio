<script setup lang="ts">
interface PropsLink {
  href: String
}
defineProps<PropsLink>()

</script>
<template>
  <NuxtLink :to="$props.href">
    <slot />
  </NuxtLink>
</template>
