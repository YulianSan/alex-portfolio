<script setup lang="ts">

const theme = useTheme()

onMounted(() => {
  document.documentElement.classList.toggle('dark', !theme.value)
})

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
