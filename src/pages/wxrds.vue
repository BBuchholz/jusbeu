<script setup>
import { getCardFor } from './allCards'

const sortedCards = ref([
  getCardFor('CARDS'),
  getCardFor('CGBA'),
  getCardFor('SYLFAN'),
  getCardFor('BUILDER'),
  getCardFor('WEWALKS'),
  getCardFor('BAOLG2'),
  getCardFor('PLAY'),
  getCardFor('MCCU'),
  getCardFor('PANDAEMONIC'),
])
</script>

<template>
  <div class="text-center">
    <h3>Zhones</h3>
  </div>

  <div v-for="aCard in sortedCards" :key="aCard" class="zhone flex-container">
    <div class="card flex-child">
      <img :src="aCard.image">
    </div>
    <div class="flex-child content">
      <a :href="aCard.siteUrl">
        {{ aCard.siteName }}
      </a> - {{ aCard.siteDesc }}
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
