<script setup lang="ts">
import { useThemeStore } from '@/stores/useThemeStore' 

const themeStore = useThemeStore()

onBeforeMount(() => {
  document.documentElement.classList.toggle('dark', !themeStore.isLight)
})

watch(() => themeStore.isLight, () => {
  document.documentElement.classList.toggle('dark', !themeStore.isLight)
})

</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
