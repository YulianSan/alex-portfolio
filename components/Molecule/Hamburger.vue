<script setup lang="ts">
const menuIsOpen = useMenu()
</script>
<template>
	<label role="button" class="z-50 sm:hidden w-14 h-14 flex items-center justify-center
		fixed p-2 rounded-md right-6 top-6">
		<AtomIcon icon="icomoon-free:menu" class="text-4xl" />
		<input type="checkbox" v-model="menuIsOpen" class="hidden">
	</label>
</template>
