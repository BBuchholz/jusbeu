<script setup>
import {
  getCreditsForCard,
} from '../allSets'

import { setMetaTMPLT1, setTMPLT1 } from '../setTMPLT1'
import { setCG1, setMetaCG1 } from '../setCG1'
import { setJBU1, setMetaJBU1 } from '../setJBU1'
import { setMetaSFG1, setSFG1 } from '../setSFG1'

const performSetAudit = ref(false)
const selectedSet = ref('cg1')

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
  }

  return null
})
</script>

<template>
  <div class="selector text-center">
    <select
      v-model="selectedSet"
      name="set-selection"
      class="text-center"
      @change="onSelectedSetChange"
    >
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
        <div
          v-if="setMetaData.value.setSize === sortedCards.value.length"
        >
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
    <p>Unless otherwise specified all copyrights mentioned on this page are licensed under CC-BY-SA 4.0</p>
  </div>

  <div v-if="sortedCards">
    <p class="text-center">
      Cards In This Set: {{ sortedCards.value.length }}
    </p>
    <div v-for="aCard in sortedCards.value" :key="aCard" class="zhone flex-container">
      <div class="card flex-child">
        <RouterLink :to="`/cards/${aCard.passCode}`" replace>
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
