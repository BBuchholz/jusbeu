<script setup>
import {
  getCreditsForCard,
  mdSet2RMXCards,
  mdSet2RMXMeta,
  set2RMX,
  setMeta2RMX,
} from '../set2RMX'

import {
  mDinDex,
} from '../mdindex.md'

// TODO: adapt this to load from mdindex.md
//       which is patterned to be a wxrdType lookup file
// TODO: display different templates based on wxrdtype
// TODO: clicking on a wxrd instance should load the
//       appropriate template (cards, seeds, circles, etc.)
// TODO: seeds, circles, sentiments, and cards are wxrdTypes

const performSetAudit = ref(false)
const selectedSet = ref('2rmx')

function onSelectedSetChange(e) {
  selectedSet.value = e.target.value
}

const setMetaData = computed(() => {
  switch (selectedSet.value) {
    case '2rmx':
      return ref(setMeta2RMX.value)
    case 'md2rmx':
      return ref(mdSet2RMXMeta.value)
  }
})

const sortedCards = computed(() => {
  switch (selectedSet.value) {
    case '2rmx':
      return ref([
        ...set2RMX.value,
      ])
    case 'md2rmx':
      return ref([
        ...mdSet2RMXCards.value,
      ])
  }

  return null
})
</script>

<template>
  <div v-if="mDinDex">
    <p class="text-center">
      entries In mDinDex: {{ mDinDex.length }}
    </p>
    <div v-for="aWxrd in mDinDex" :key="aWxrd" class="zhone flex-container">
      <div class="card flex-child">
        <p>{{ aWxrd }}</p>
      </div>
      <div class="flex-child content">
        <p>{{ aWxrd }}</p>
      </div>
    </div>
  </div>
  <div class="selector text-center">
    <select
      v-model="selectedSet"
      name="set-selection"
      class="text-center"
      @change="onSelectedSetChange"
    >
      <option value="2rmx">
        2B Remixed (Set)
      </option>
      <option value="md2rmx">
        md version of 2B Remixed (Set)
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
