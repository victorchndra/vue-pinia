<template>
  <div class="home">
    <Counter />
    <div class="buttons">
      <button @click="storeCounter.decreaseCount">-</button>
      <button @click="storeCounter.increaseCount">+</button>
    </div>
    <hr />
    <div>
      This counter is: {{ storeCounter.oddOrEven }}
    </div>
    <hr>
    <div>
      <h3>Edit Counter:</h3>
      <input type="number" v-model="storeCounter.count">
    </div>
  </div>
</template>

<script setup>
import Counter from '@/components/Counter.vue';
import { useCounterStore } from '@/stores/counter';

const storeCounter = useCounterStore()
</script>

<style>
.count {
  font-size: 60px;
  margin: 20px;
}

.buttons button {
  font-size: 40px;
  margin: 10px;
}
</style>