<script setup lang="ts">
type AvatarFormat = 'circle' | 'square' | 'rounded'

interface Props {
  src: string
  format?: AvatarFormat
}

withDefaults(defineProps<Props>(), {
  format: 'square',
})
</script>
<template>
  <NuxtImg 
    fit="cover" 
    :src="$props.src" 
    class="w-24 h-24 object-cover"
    :class="{
      'rounded-full': $props.format === 'circle',
      'rounded-md': $props.format === 'rounded',
      'rounded-none': $props.format === 'square',
    }"
    width="96" 
    height="96" />
</template>
