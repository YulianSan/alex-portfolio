<script setup lang="ts">
import { computed } from 'vue';

interface PropsSwitch {
  modelValue: boolean
}

const props = defineProps<PropsSwitch>()
const emit = defineEmits(['update:modelValue'])

const modelValueComputed = computed({ 
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', !!value)
})
</script>
<template>
  <input class="hidden" type="checkbox" v-model="modelValueComputed" />
  <div class="w-12 h-6 bg-zinc-300 dark:bg-black rounded-full relative cursor-pointer">
    <div class="w-5 h-5 bg-zinc-700 dark:bg-zinc-800 rounded-full absolute top-1/2 -translate-y-1/2 transition-[right] ease-in-out"
      :class="[
        { 'right-1': props.modelValue }, 
        { 'right-[calc(100%-1.5rem)]': !props.modelValue }
      ]">
    </div>
  </div>
</template>
<!--  -->
