<script setup lang="ts">
import { ref } from 'vue';

export type ModelValue = {
  name: string
  size: number
  type: string
  src: string
}

const modelValue = defineModel<ModelValue[]>()
const isHover = ref(false)

const onFileChange = (event: Event) => {
  const target = event.target as HTMLInputElement

  if(target?.files)
    handleFileChange(Array.from(target.files))
}

const handleFileChange = (files: File[]) => {
  const filesTreat = files?.map((file) => ({
    name: file.name,
    size: file.size,
    type: file.type,
    src: URL.createObjectURL(file),
  })) ?? []

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
