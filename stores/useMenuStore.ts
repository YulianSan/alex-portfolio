import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export const useMenuStore = defineStore('menu', () => {
  const state: Ref<boolean> = ref(false)

  const menu = computed({
    get(): boolean {
      return state.value
    },
    set(value: boolean) {
      state.value = value
    }
  })

  return { menu, state }
})
