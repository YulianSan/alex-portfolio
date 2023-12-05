<script setup lang="ts">

const theme = useTheme()

watch(theme, () => {
  document.documentElement.classList.toggle('dark', !theme.value)
})
</script>
<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
