<script setup>
import {
  getCardsFor,
} from '../allSets'

import {
  getCardsForPassCodeArray,
  getCircleForCircleCode,
  getCirclesForPassCode,
} from '../allCircles'

import {
  getSeedsForPassCode,
} from '../allSeeds'

const props = defineProps({ anyMyrKi: String })
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewMyrKi(props.anyMyrKi)
})

function navigateTo(aCode) {
  user.setNewMyrKi(aCode)
}

// BEGIN CARD LOOKUP /////////////////////////////////////
const foundCards = ref([
  ...getCardsFor(props.anyMyrKi),
])

const foundCirclesForPassCode = ref([
  ...getCirclesForPassCode(props.anyMyrKi),
])

const foundSeedsForPassCode = ref([
  ...getSeedsForPassCode(props.anyMyrKi),
])
// END CARD LOOKUP //////////////////////////////////////

// BEGIN CIRCLE LOOKUP //////////////////////////////////
const foundCircle = ref(getCircleForCircleCode(props.anyMyrKi))

const foundSeedsForCircleCode = ref([
  ...getSeedsForPassCode(props.anyMyrKi),
])

let foundCardsForCircle = ref([])

if (foundCircle
    && foundCircle.value
    && foundCircle.value.passCodes) {
  foundCardsForCircle = ref([
    ...getCardsForPassCodeArray(foundCircle.value.passCodes),
  ])
}
// END CIRCLE LOOKUP ////////////////////////////////////

// BEGIN CARD CAROUSEL //////////////////////////////////
const currentIndex = ref(0)

const currentCard = ref(foundCards.value[currentIndex.value])

function incrementIndex() {
  if (currentIndex.value >= foundCards.value.length - 1)
    currentIndex.value = 0
  else
    currentIndex.value++

  currentCard.value = foundCards.value[currentIndex.value]
}

function decrementIndex() {
  if (currentIndex.value <= 0)
    currentIndex.value = foundCards.value.length - 1
  else
    currentIndex.value--

  currentCard.value = foundCards.value[currentIndex.value]
}
// END CARD CAROUSEL //////////////////////////////////////
</script>

<template>
  <!-- BEGIN CARD DISPLAY ///////////////////////////////// -->
  <div v-if="currentCard">
    <div>
      <button @click="decrementIndex">
        -
      </button>
      <button @click="incrementIndex">
        +
      </button>
      <img class="card" :src="currentCard.image">
    </div>
    <div v-if="foundCirclesForPassCode.length">
      <p>Circles:</p>
      <ul>
        <li v-for="thisFoundCircle in foundCirclesForPassCode" :key="thisFoundCircle.circleCode">
          <RouterLink
            :to="`/circles/${thisFoundCircle.circleCode}`"
          >
            {{ `${thisFoundCircle.circleName}` }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div v-if="foundSeedsForPassCode.length">
      <p>Seeds:</p>
      <ul>
        <li v-for="foundSeed in foundSeedsForPassCode" :key="foundSeed.seedCode">
          <!-- <a
            target="_blank"
            :href="foundSeed.seedLinkHref"
            class="showlink"
          >
            {{ foundSeed.seedLinkText }}
          </a> -->
          <RouterLink :to="`/seeds/${foundSeed.seedCode}`" replace>
            {{ foundSeed.seedLinkText }}
          </RouterLink>
        </li>
      </ul>
    </div>
  </div>
  <!-- END CARD DISPLAY////////////////////////////////// -->
  <!-- BEGIN CIRCLE DISPLAY////////////////////////////// -->
  <div v-else-if="foundCircle">
    <p>Circle: {{ foundCircle.circleName }}</p>
    <div v-if="foundSeedsForCircleCode.length">
      <p>Seeds:</p>
      <ul>
        <li v-for="foundSeed in foundSeedsForCircleCode" :key="foundSeed.seedCode">
          <!-- <a
            target="_blank"
            :href="foundSeed.seedLinkHref"
            class="showlink"
          >
            {{ foundSeed.seedLinkText }}
          </a> -->
          <RouterLink :to="`/seeds/${foundSeed.seedCode}`" replace>
            {{ foundSeed.seedLinkText }}
          </RouterLink>
        </li>
      </ul>
    </div>
    <div v-for="aCard in foundCardsForCircle" :key="aCard" class="zhone flex-container">
      <div class="card flex-child">
        <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink>
      </div>
    </div>
  </div>
  <!-- END CIRCLE DISPLAY////////////////////////////// -->
  <!-- BEGIN NOT FOUND DISPLAY//////////////////////// -->
  <div v-else>
    <p>
      -
    </p>

    <div text-4xl>
      <div i-carbon-misuse-outline inline-block />
    </div>

    <p>
      -
    </p>

    <p text-sm opacity-75>
      <em>MYRKI '{{ props.anyMyrKi }}' NOT RECOGNIZED</em>
    </p>

    <p text-sm opacity-75>
      Please verify you entered it correctly.
    </p>

    <div v-if="user.otherMyrKis.length">
      <p mt-4 text-sm>
        <span opacity-75>Recently attempts:</span>
        <ul>
          <li v-for="otherMyrKi in user.otherMyrKis" :key="otherMyrKi">
            <RouterLink :to="`/myrKiSs/${otherMyrKi}`" replace>
              {{ otherMyrKi }}
            </RouterLink>
          </li>
        </ul>
      </p>
    </div>

    <div>
      <button
        m="3 t6" text-sm btn
        @click="router.back()"
      >
        Back
      </button>
    </div>
  </div>
  <!-- END NOT FOUND DISPLAY///////////////////////////// -->
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
