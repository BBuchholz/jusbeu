<script setup>
import {
  getCardsFor,
} from '../../allCards'

const relatedCards = ref([
  ...getCardsFor('OBAOLG'),
])

const currentIndex = ref(0)

const currentCard = ref(relatedCards.value[currentIndex.value])

function incrementIndex() {
  if (currentIndex.value >= relatedCards.value.length - 1)
    currentIndex.value = 0
  else
    currentIndex.value++

  currentCard.value = relatedCards.value[currentIndex.value]
}

function decrementIndex() {
  if (currentIndex.value <= 0)
    currentIndex.value = relatedCards.value.length - 1
  else
    currentIndex.value--

  currentCard.value = relatedCards.value[currentIndex.value]
}
</script>

<template>
  <p class="display">
    info here
  </p>
  <div>
    <button @click="decrementIndex">
      -
    </button>
    <button @click="incrementIndex">
      +
    </button>
    <img class="card" :src="currentCard.image">
  </div>
  <p class="display">
    card attribution info here
  </p>
</template>

<style scoped>
  .display {
    margin: 40px;
  }

  button {
    padding: 20px;
    margin: 20px;
    border: solid;
    border-radius: 10px;
  }

  .card {
    max-width: 50%;
    height: auto;
    display: block;
    margin-left: auto;
    margin-right: auto;
    margin-top: 50px;
    margin-bottom: 50px;
    border: 5px;
    border-color: white;
    border-style: solid;
    border-radius: 1%;
  }
</style>
