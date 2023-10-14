<script setup>
import {
  getImageForCardKey,
  getTitleForCardKey,
  hasCardKey,
} from '../allTarotMarseilles'

const sortedCards = ref([
  '00', '01', '02', '03', '04', '05', '06', '07',
  '08', '09', '10', '11', '12', '13', '14', '15',
  '16', '17', '18', '19', '20', '21', '22',
  '1C', '2C', '3C', '4C', '5C', '6C', '7C',
  '8C', '9C', '10C', '11C', '12C', '13C', '14C',
  '1S', '2S', '3S', '4S', '5S', '6S', '7S',
  '8S', '9S', '10S', '11S', '12S', '13S', '14S',
  '1D', '2D', '3D', '4D', '5D', '6D', '7D',
  '8D', '9D', '10D', '11D', '12D', '13D', '14D',
  '1W', '2W', '3W', '4W', '5W', '6W', '7W',
  '8W', '9W', '10W', '11W', '12W', '13W', '14W',
])
</script>

<template>
  <div class="text-center">
    <h3>The Tarot Of Marseilles</h3>
  </div>

  <div class="text-center">
    <p>Images are from:</p>
  </div>

  <div class="card">
    <img :src="getImageForCardKey('Z01')">
  </div>

  <div v-for="aCardKey in sortedCards" :key="aCardKey">
    <div v-if="hasCardKey(aCardKey)" class="zhone flex-container">
      <div class="card flex-child">
        <img :src="getImageForCardKey(aCardKey)">
      </div>
      <div class="flex-child content">
        <p>Card Title: {{ getTitleForCardKey(aCardKey) }}</p>
        <p>Card Key: {{ aCardKey }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text-center {
  margin: 40px;
}
a {
    color: aqua;
}

.zhone {
    margin: 40px;
}
.flex-container {
    display: flex;
}

.flex-child {
    flex: 1;
}

.flex-child:first-child {
    margin-right: 20px;
}
</style>
