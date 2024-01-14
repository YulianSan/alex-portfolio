import { defineStore } from 'pinia'
import { computed, ref, type Ref } from 'vue'

export type Theme = 'light' | 'dark'

export const useThemeStore = defineStore('theme', () => {
  const state: Ref<Theme> = ref('light')

  const isLight = computed<boolean>({
    get() {
      return state.value === 'light'
    },
    set(value) {
      state.value = value ? 'light' : 'dark'
    }
  })

  return { isLight, state }
},
  {
    persist: {
      storage: persistedState.localStorage
    },
  }
)
