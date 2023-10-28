<script setup>
import {
  allCards,
  getCreditsForCard,
} from '../allSets'
import { setCG1 } from '../setCG1'
import { setJBU1 } from '../setJBU1'

const sortedCardsAll = ref([
  ...allCards.value,
])

const sortedCardsCG1 = ref([
  ...setCG1.value,
])

const sortedCardsJBU1 = ref([
  ...setJBU1.value,
])

const selectedSet = ref('cg1')

function onSelectedSetChange(e) {
  selectedSet.value = e.target.value
}
</script>

<template>
  <div class="text-center">
    <h3>CREDIT WHERE CREDIT IS DUE</h3>
  </div>

  <div class="selector">
    <select
      v-model="selectedSet"
      name="set-selection"
      @change="onSelectedSetChange"
    >
      <option value="all">
        All Sets
      </option>
      <option value="jbu1">
        Jus Be U (Set 1)
      </option>
      <option value="cg1">
        Coventry Grove (Set 1)
      </option>
    </select>
  </div>

  <div class="text-center">
    <p>Unless otherwise specified all copyrights mentioned on this page are licensed under CC-BY-SA 4.0</p>
  </div>

  <div v-if="selectedSet === 'cg1'">
    <p class="text-center">
      Cards In Set: {{ sortedCardsCG1.length }}
    </p>
    <div v-for="aCard in sortedCardsCG1" :key="aCard" class="zhone flex-container">
      <div class="card flex-child">
        <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink>
      </div>
      <div class="flex-child content">
        <p>{{ getCreditsForCard(aCard) }}</p>
      </div>
    </div>
  </div>

  <div v-else-if="selectedSet === 'jbu1'">
    <p class="text-center">
      Cards In Set: {{ sortedCardsJBU1.length }}
    </p>
    <div v-for="aCard in sortedCardsJBU1" :key="aCard" class="zhone flex-container">
      <div class="card flex-child">
        <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink>
      </div>
      <div class="flex-child content">
        <p>{{ getCreditsForCard(aCard) }}</p>
      </div>
    </div>
  </div>

  <div v-else>
    <p class="text-center">
      Cards In Set: {{ sortedCardsAll.length }}
    </p>
    <div v-for="aCard in sortedCardsAll" :key="aCard" class="zhone flex-container">
      <div class="card flex-child">
        <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink>
      </div>
      <div class="flex-child content">
        <p>{{ getCreditsForCard(aCard) }}</p>
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
