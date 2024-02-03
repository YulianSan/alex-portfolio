<script setup lang="ts">
import { ref } from 'vue';

export type ModelValue = {
  name: string
  size: string
  type: string
  src: string
}

const sizeBytesToHuman = (size: number) => {
	let types = ['BT', 'KB', 'MB', 'GB']
	let currentType = 0

	while (size / 1000 > 1 && currentType < types.length - 1) {
		size /= 1000
		currentType++
	}

  return `${size.toFixed(2)} ${types[currentType]}`
}

const modelValue = defineModel<ModelValue[]>()
const isHover = ref(false)

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if(target?.files)
    handleFileChange(Array.from(target.files))
}

const allowMimeType = (type: string) => {
  return type.match(/(\.png|\.jpg|\.jpeg|\.webp)$/)
}

const handleFileChange = (files: File[]) => {
  const filesAllow = files.filter((file) => allowMimeType(file.name))
  const filesTreat = filesAllow.map((file) => ({
    name: file.name,
    size: sizeBytesToHuman(file.size),
    type: file.type,
    src: URL.createObjectURL(file),
  }))

  modelValue.value = [
    ...(modelValue?.value ?? []),
    ...filesTreat,
  ]
}

const preventDefaults = (event: Event) => {
  event.preventDefault()
  event.stopPropagation()
}

const handleUnhighlight = () => {
  isHover.value = false
}


const handleHighlight = () => {
  isHover.value = true
}

const onDrop = (event: DragEvent) => {
  preventDefaults(event)
  handleUnhighlight()

  if(event.dataTransfer?.files)
    handleFileChange(Array.from(event.dataTransfer.files))
}

const onDragInside = (event: DragEvent) => {
  preventDefaults(event)
  handleHighlight()
}

const onDragLeave = (event: DragEvent) => {
  preventDefaults(event)
  handleUnhighlight()
}

</script>
<template>
  <label>
    <div class="cursor-pointer inline-block"
      @dragenter="onDragInside"
      @dragover="onDragInside"
      @drop="onDrop"
      @dragleave="onDragLeave">
      <input type="file" @change="onFileChange" class="hidden"/>
      <slot :isHover="isHover"/>
    </div>
  </label>
</template>
