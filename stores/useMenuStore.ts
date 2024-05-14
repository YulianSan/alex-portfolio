import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const state: Ref<boolean> = ref(false)

  return { state }
})
