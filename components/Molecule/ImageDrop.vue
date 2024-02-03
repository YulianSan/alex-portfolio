<script setup lang="ts">
export interface Props {
	src: string
	name: string
	size: string
	index: number
}

defineEmits(['remove'])
defineProps<Props>()
</script>
<template>
	<div class="flex flex-row bg-zinc-800 rounded-md p-3 gap-3 relative">
		<AtomIcon
      icon="uil:close"
      class="absolute left-full bottom-full"
			@click="$emit('remove', $props.index)"
    />
		<AtomAvatar :src="$props.src" format="rounded"/>
		<div class="flex flex-col flex-1 w-[calc(100%-7rem)]">
			<span
        class="w-full text-ellipsis overflow-hidden whitespace-nowrap">
				{{ $props.name }}
			</span>
			<span>{{ $props.size }}</span>
		</div>
	</div>
</template>
