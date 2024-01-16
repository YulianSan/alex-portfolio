<script setup lang="ts">
import { twMerge } from 'tailwind-merge';

type ButtonColor = 
  | 'primary' 
  | 'light' 
  | 'dark' 
  | 'success' 
  | 'warning' 
  | 'error'   
  | 'info'

type ButtonSize = 'sm' | 'md' | 'lg'
interface Props {
  color?: ButtonColor
  size?: ButtonSize
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  color: 'primary',
  size: 'md',
})

const classes = computed(() => 
  twMerge(
    `text-white rounded shadow-md hover:shadow-sm transition-shadow 
    shadow-zinc-400/60 dark:shadow-black/60`,
    props.class,
  )
)
defineEmits(['click'])
</script>
<template>
  <button
    @click="$emit('click')"
    :class="[
      classes,
      {
        'text-sm px-4 py-1': size === 'sm',
        'text-base px-8 py-2 ': size === 'md',
        'text-lg px-12 py-3': size === 'lg',
        'bg-sky-600 hover:bg-sky-700': color === 'primary',
        'bg-zinc-200 text-zinc-800 hover:bg-zinc-300': color === 'light',
        'bg-zinc-800 hover:bg-zinc-950': color === 'dark',
        'bg-emerald-600 hover:bg-emerald-700': color === 'success',
        'bg-amber-600 hover:bg-amber-700': color === 'warning',
        'bg-red-600 hover:bg-red-700': color === 'error',
        'bg-zinc-400 hover:bg-zinc-500': color === 'info',
      },
    ]"
  >
    <slot />
  </button>
</template>
