<script setup lang="ts">
const POSITIONS = {
	TOP: 'bottom-full left-1/2 -translate-x-1/2',
	BOTTOM: 'top-full left-1/2 -translate-x-1/2',
	LEFT: 'top-1/2 right-full -translate-y-1/2',
	RIGHT: 'top-1/2 -right-8 -translate-y-1/2 translate-x-full',
}

interface Props {
	position: keyof typeof POSITIONS,
	canShow?: boolean
}

const props = withDefaults(defineProps<Props>(), {
	position: "TOP"
})

</script>
<template>
	<div class="relative group">
		<slot />
		<div class="absolute group-hover:opacity-100 group-hover:pointer-events-auto 
			opacity-0 pointer-events-none easy-in-out transition-all duration-500"
			:class="[POSITIONS[props.position], { 'hidden': props.canShow }]">
			<div class="bg-zinc-200 dark:bg-zinc-800 rounded-md py-3 px-5 shadow shadow-zinc-950/60">
				<slot name="tooltip" />
			</div>
			<div class="bg-zinc-200 dark:bg-zinc-800 block absolute rotate-45 w-3 h-3
				top-1/2 -left-1 -translate-y-1/2"></div>
		</div>
	</div>
</template>
