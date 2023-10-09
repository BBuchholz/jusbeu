<script setup>
import {
  getCardFor,
  getCreditsFor,
} from '../allCards'

const sortedCards = ref([
  getCardFor('SC'),
  getCardFor('ENERGY1'),
  getCardFor('SCA'),
  getCardFor('COVENTRY'),
])
</script>

<template>
  <div class="text-center">
    <h3>CREDIT WHERE CREDIT IS DUE</h3>
  </div>

  <div class="text-center">
    <p>Unless otherwise specified all copyrights mentioned on this page are licensed under CC-BY-SA 4.0</p>
  </div>

  <div v-for="aCard in sortedCards" :key="aCard" class="zhone flex-container">
    <div class="card flex-child">
      <img :src="aCard.image">
    </div>
    <div class="flex-child content">
      <p>{{ getCreditsFor(aCard.passCode) }}</p>
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
