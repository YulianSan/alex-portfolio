<script setup lang="ts">
import { type Ref, ref } from 'vue'
import { type ModelValue } from '@/components/Atom/DropImage.vue'

const files: Ref<ModelValue[]> = ref([])
const test: Ref<string> = ref('')

const removeImage = (index: number) => {
	files.value.splice(index, 1)
}

watch(files, () => {
	console.log(files.value)
})
</script>
<template>
	<AtomInput :model-value="test"></AtomInput>
	<AtomDropImage v-model="files"> 
		<template #default="{ isHover }">
			<div class="w-64 h-64"
				:class="[
					{ 'bg-red-300': isHover },
					{ 'bg-blue-300': !isHover },
				]" >
				<AtomIcon v-if="isHover" icon="uil:dropbox" />
				<AtomIcon v-else icon="uil:home" />
			</div>
		</template>
	</AtomDropImage>
	<div class="max-w-xs">
		<MoleculeImageDrop
			@remove="removeImage"
			v-for="(file, i) in files"
			:src="file.src"
			:name="file.name"
			:size="file.size"
			:key="file.src + file.name"
			:index="i" />
	</div>
</template>
