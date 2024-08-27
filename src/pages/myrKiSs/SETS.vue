<script setup>
import { useStorage } from '@vueuse/core'
import {
  getCreditsForCard,
} from '../allSets'

import { setMetaTMPLT1, setTMPLT1 } from '../setTMPLT1'
import { setCG1, setMetaCG1 } from '../setCG1'
import { setJBU1, setMetaJBU1 } from '../setJBU1'
import { setMetaSFG1, setSFG1 } from '../setSFG1'
import { setMetaNOV23, setNOV23 } from '../setNOV23'
import { setDEC23, setMetaDEC23 } from '../setDEC23'
import { setLammas24A, setMetaLammas24A } from '../setLammas24A'

const foundCards = useStorage('foundCardsKey', [])

function clearCards() {
  foundCards.value = []
  alert('found')
}

const performSetAudit = ref(false)
const selectedSet = ref('lammas24A')

function onSelectedSetChange(e) {
  selectedSet.value = e.target.value
}

const setMetaData = computed(() => {
  switch (selectedSet.value) {
    case 'tmplt1':
      return ref(setMetaTMPLT1.value)
    case 'cg1':
      return ref(setMetaCG1.value)
    case 'jbu1':
      return ref(setMetaJBU1.value)
    case 'sfg1':
      return ref(setMetaSFG1.value)
    case 'nov23':
      return ref(setMetaNOV23.value)
    case 'dec23':
      return ref(setMetaDEC23.value)
    case 'lammas24A':
      return ref(setMetaLammas24A.value)
  }
})

const sortedCards = computed(() => {
  switch (selectedSet.value) {
    case 'cg1':
      return ref([
        ...setCG1.value,
      ])
    case 'jbu1':
      return ref([
        ...setJBU1.value,
      ])
    case 'sfg1':
      return ref([
        ...setSFG1.value,
      ])
    case 'tmplt1':
      return ref([
        ...setTMPLT1.value,
      ])
    case 'nov23':
      return ref([
        ...setNOV23.value,
      ])
    case 'dec23':
      return ref([
        ...setDEC23.value,
      ])
    case 'lammas24A':
      return ref([
        ...setLammas24A.value,
      ])
  }

  return null
})
</script>

<template>
  <div class="text-center">
    <h1>TOOLBOX</h1>
    <p>
      LOCAL STORAGE FOR:
    </p>
    <p>"TEST": </p>
    <button @click="clearCards()">
      Clear Cards
    </button>
  </div>
  <div class="selector text-center">
    <select v-model="selectedSet" name="set-selection" class="text-center" @change="onSelectedSetChange">
      <option value="lammas24A">
        Set: Lammas 24A
      </option>
      <option value="dec23">
        December 2023 Set
      </option>
      <option value="nov23">
        November 2023 Set
      </option>
      <option value="tmplt1">
        Template (Set 1)
      </option>
      <option value="jbu1">
        Jus Be U (Set 1)
      </option>
      <option value="cg1">
        Coventry Grove (Set 1)
      </option>
      <option value="sfg1">
        Shadow Fire Glen (Set 1)
      </option>
    </select>

    <input id="checkbox" v-model="performSetAudit" type="checkbox">
    <label for="checkbox">Display Set Audit</label>
  </div>

  <div v-if="performSetAudit" class="text-center">
    <p>
      SET AUDIT
    </p>
    <div class="text-center">
      <p v-if="setMetaData.value.setCode">
        setCode: {{ setMetaData.value.setCode }}
      </p>
      <p v-else class="error">
        setCode not found!
      </p>
    </div>
    <div class="text-center">
      <p v-if="setMetaData.value.setName">
        setName: {{ setMetaData.value.setName }}
      </p>
      <p v-else class="error">
        setName not found!
      </p>
    </div>
    <div class="text-center">
      <p v-if="setMetaData.value.setDescription">
        setDescription: {{ setMetaData.value.setDescription }}
      </p>
      <p v-else class="error">
        setDescription not found!
      </p>
    </div>
    <div class="text-center">
      <div v-if="setMetaData.value.setSize">
        <p>setSize: {{ setMetaData.value.setSize }}</p>
        <div v-if="setMetaData.value.setSize === sortedCards.value.length">
          <p>listed setSize matches actual size</p>
        </div>
        <div v-else>
          <p class="error">
            entered setSize does not match actual set size!
          </p>
        </div>
      </div>
      <div v-else>
        <p class="error">
          setSize not found!
        </p>
      </div>
    </div>
  </div>

  <div class="text-center">
    <p>Unless otherwise specified all copyrights mentioned on this page are licensed under <a href="https://creativecommons.org/licenses/by-sa/4.0/">CC-BY-SA 4.0</a></p>
  </div>

  <div v-if="sortedCards">
    <p class="text-center">
      Cards In This Set: {{ sortedCards.value.length }}
    </p>
    <div v-for="aCard in sortedCards.value" :key="aCard" class="zhone flex-container">
      <!-- <div v-if="aCard.image" class="card flex-child">
        <RouterLink :to="`/cards/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink>
      </div> -->
      <div v-if="foundCards.includes(aCard.uuid)" class="card flex-child">
        <RouterLink :to="`/cards/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink>
      </div>
      <div v-else class="card flex-child">
        <p>NOT YET COLLECTED</p>
        <p>
          foundCards: {{ foundCards[aCard.uuid] }}
          {{ aCard.uuid }}
        </p>
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

.error {
  color: red;
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
