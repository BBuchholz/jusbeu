<!--
FLIP list transitions with the built-in <TransitionGroup>.
https://aerotwist.com/blog/flip-your-animations/
-->

<script setup>
import { shuffle as _shuffle } from 'lodash-es'
import { ref } from 'vue'

function getInitialCards() {
  return [1, 2, 3, 4]
}
const cards = ref(getInitialCards())
const selected = ref([])
let id = cards.value.length + 1

function insert() {
  const i = Math.round(Math.random() * cards.value.length)
  cards.value.splice(i, 0, id++)
}

function reset() {
  cards.value = getInitialCards()
  selected.value = []
}

function shuffle() {
  cards.value = _shuffle(cards.value)
}

function remove(card) {
  const i = cards.value.indexOf(card)
  if (i > -1)
    cards.value.splice(i, 1)
}

function deal() {
  reset()
  shuffle()
}

function select(card) {
  if (selected.value.includes(card))
    selected.value = selected.value.filter(aCard => card !== aCard)
  else
    selected.value.push(card)
}
</script>

<template>
  <TransitionGroup tag="ul" name="fade" class="container">
    <div v-for="card in cards" :key="card" class="card" @click="select(card)">
      {{ card }}
      <button @click="remove(card)">
        x
      </button>
    </div>
  </TransitionGroup>

  <button class="styled-btn" @click="insert">
    insert at random index
  </button>
  <button class="styled-btn" @click="reset">
    reset
  </button>
  <button class="styled-btn" @click="shuffle">
    shuffle
  </button>
  <button class="styled-btn" @click="deal">
    deal
  </button>
  <p>SELECTED: {{ selected }}</p>
</template>

<style>
.container {
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.styled-btn {
  padding: 10px;
  border: solid;
  margin: 20px;
  border-radius: 20px;
}

.card {
  flex: 1;
  width: 100%;
  height: auto;
  background-color: #b74c4c;
  border: 1px solid #666;
  box-sizing: border-box;
}

/* 1. declare transition */
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.5s cubic-bezier(0.55, 0, 0.1, 1);
}

/* 2. declare enter from and leave to state */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scaleY(0.01) translate(30px, 0);
}

/* 3. ensure leaving cards are taken out of layout flow so that moving
      animations can be calculated correctly. */
.fade-leave-active {
  position: absolute;
}
</style>
