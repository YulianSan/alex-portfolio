<script setup lang="ts">
interface Props {
	class?: any
}
defineProps<Props>()
</script>
<template>
	<slot name="before-menu" />
	<aside class="w-full transition-all h-screen dark:bg-zinc-950 py-8 bg-zinc-100 
		p-4 flex flex-col border-r border-zinc-300 dark:border-zinc-700
		sm:translate-x-0 -translate-x-full fixed sm:relative z-40 max-w-xs select-none"
		:class="$props.class">
		<header class="mb-12 flex gap-x-4 border-b dark:border-zinc-700 py-2">
			<slot name="top-menu" />
		</header>
		<slot />
		<div class="mt-auto border-t py-4 dark:border-zinc-700">
			<slot name="bottom-menu" />
		</div>
	</aside>
</template>
