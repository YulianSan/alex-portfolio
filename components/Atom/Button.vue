<script setup lang="ts">
defineEmits(['click'])
</script>
<template>
  <button
    :click="$emit('click')"
    class="bg-sky-600 text-white px-6 py-2 rounded"
  >
    <slot />
  </button>
</template>
