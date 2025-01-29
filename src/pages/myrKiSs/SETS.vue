<script setup>
import {
  setLammas24A,
} from '../setLMS24A'
import {
  setMabon24C,
} from '../setMBN24C'
import {
  setImbolc25B,
} from '../setIMB25B'

const selectedSet = ref('imbolc25B')

function onSelectedSetChange(e) {
  selectedSet.value = e.target.value
}

const sortedCards = computed(() => {
  switch (selectedSet.value) {
    case 'lammas24A':
      return ref([
        ...setLammas24A.value,
      ])
    case 'mabon24C':
      return ref([
        ...setMabon24C.value,
      ])
    case 'imbolc25B':
      return ref([
        ...setImbolc25B.value,
      ])
  }

  return null
})
</script>

<template>
  <div class="selector text-center">
    <select v-model="selectedSet" name="set-selection" class="text-center" @change="onSelectedSetChange">
      <option value="imbolc25B">
        Set: Imbolc 25B
      </option>
      <option value="mabon24C">
        Set: Mabon 24C
      </option>
      <option value="lammas24A">
        Set: Lammas 24A
      </option>
    </select>
  </div>

  <div v-if="sortedCards">
    <div v-for="aCard in sortedCards.value" :key="aCard" class="zhone flex-container">
      <RouterLink :to="`/cards/${aCard.passCode}`" replace>
        <img :src="aCard.image">
      </RouterLink>
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

.error {
  color: red;
}

.zhone {
  margin: 100px;
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
