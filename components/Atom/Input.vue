<script setup lang="ts">
const modelValue = defineModel<string>();
</script>
<template>
  <label>
    <slot />
    <div class="flex gap-x-2 w-full py-2 border-[1px] border-zinc-300 rounded-md"
      :class="{
       'px-4': !$slots.icon,
       'px-2': $slots.icon,
      }">
      <slot name="icon" />
      <input
        class="w-full outline-none text-sm bg-transparent"
        type="text"
        v-model="modelValue"
      />
    </div>
  </label>
</template>
