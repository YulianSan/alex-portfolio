<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import { computed } from 'vue';
interface PropsIcon {
  icon: string
  class?: string
}

const props = withDefaults(defineProps<PropsIcon>(), {
  class: ""
})

const classIcon = computed(
  () => 
    twMerge(props.class, "text-black flex-none w-6 text-2xl dark:text-white"),
)
</script>
<template>
  <Icon
    :name="$props.icon"
    :class="classIcon"
  />
</template>
