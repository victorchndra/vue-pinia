import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // state or data property
  const count = ref(0)

  // methods
  const increaseCount = () => {
    count.value++
  }
  const decreaseCount = () => {
    count.value--
  }

  // getters
  const oddOrEven = computed(() => {
    if (count.value % 2 === 0) return 'even'
    return 'odd'
  })
  
  return { count, increaseCount, decreaseCount, oddOrEven }
})
