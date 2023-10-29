<!--
FLIP list transitions with the built-in <TransitionGroup>.
https://aerotwist.com/blog/flip-your-animations/
-->

<script setup>
import { shuffle as _shuffle } from 'lodash-es'
import { ref } from 'vue'
import {
  allCards,
  getImageForCardKey,
} from '../allTarotMarseilles'

function getInitialCards() {
  // return ['1W', '2D', '3S', '4C']
  return [...allCards.value.map(card => card.cardKey)]
}
const table = ref([])
const selected = ref([])
const deck = ref([])
const discard = ref(getInitialCards())
const status = ref('before game')
let id = table.value.length + 1

function insert() {
  const i = Math.round(Math.random() * table.value.length)
  table.value.splice(i, 0, id++)
}

function reset() {
  table.value = getInitialCards()
  selected.value = []
}

function shuffle() {
  discard.value = deck.value.concat(discard.value)
  deck.value = _shuffle(discard.value)
  discard.value = []
}

function remove(card) {
  const i = table.value.indexOf(card)
  if (i > -1)
    table.value.splice(i, 1)
}

function deal() {
  if (table.value.length < 4) {
    if (deck.value.length > 0)
      table.value.push(deck.value.pop())
    else
      status.value = 'out of cards'
  }
  else {
    status.value = 'no open spaces'
  }
}

function select(card) {
  if (selected.value.includes(card))
    selected.value = selected.value.filter(aCard => card !== aCard)
  else
    selected.value.push(card)
}

function selectionIsValid() {
  // PROTOTYPING: this is a stub
  if (selected.value.length === 2)
    return true

  else
    return false
}

function collect() {
  // PROTOTYPING: this is a stub
  for (const card of selected.value) {
    table.value = table.value.filter(aCard => card !== aCard)
    discard.value.push(card)
  }

  selected.value = []
}
</script>

<template>
  <TransitionGroup tag="ul" name="fade" class="container">
    <div
      v-for="cardKey in table"
      :key="cardKey"
      :class="{ highlighted: selected.includes(cardKey) }"
      @click="select(cardKey)"
    >
      <!-- {{ cardKey }} -->
      <img :src="getImageForCardKey(cardKey)" class="card">
    </div>
  </TransitionGroup>
  <!--
  <button class="styled-btn" @click="insert">
    insert at random index
  </button>
  <button class="styled-btn" @click="reset">
    reset
  </button>
  -->
  <button v-if="selectionIsValid()" class="styled-btn" @click="collect">
    collect
  </button>
  <button class="styled-btn" @click="shuffle">
    shuffle
  </button>
  <button class="styled-btn" @click="deal">
    deal
  </button>
  <p>STATUS: {{ status }}</p>
  <p>SELECTED: {{ selected }}</p>
  <p>DECK: {{ deck }}</p>
  <p>DISCARD: {{ discard }}</p>
</template>

<style>
.container {
  display: grid;
  padding: 20px;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  grid-auto-rows: minmax(100px, auto);
}

.highlighted {
  /* transform: scale(1.05); */
  transform: rotate(3deg);
}

.styled-btn {
  padding: 10px;
  border: solid;
  margin: 20px;
  border-radius: 20px;
}

.card {
  flex: 1;
  width: 200px;
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
