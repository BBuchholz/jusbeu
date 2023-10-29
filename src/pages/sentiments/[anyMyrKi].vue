<script setup>
import {
  getCardForUuid,
} from '../allSets'

import {
  getSentimentsForUuid,
} from '../allSentiments'

const props = defineProps({ anyMyrKi: String })
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewMyrKi(props.anyMyrKi)
})

// BEGIN CARD LOOKUP /////////////////////////////////////
// const foundCards = ref([
//   ...getCardsFor(props.anyMyrKi),
// ])

// const foundCirclesForPassCode = ref([
//   ...getCirclesForPassCode(props.anyMyrKi),
// ])

// const foundSeedsForPassCode = ref([
//   ...getSeedsForPassCode(props.anyMyrKi),
// ])
// END CARD LOOKUP //////////////////////////////////////

// BEGIN CIRCLE LOOKUP //////////////////////////////////
// const foundCircle = ref(getCircleForCircleCode(props.anyMyrKi))

const foundSentimentsForUuid = ref([
  ...getSentimentsForUuid(props.anyMyrKi),
])
// END CIRCLE LOOKUP ////////////////////////////////////

// BEGIN CARD CAROUSEL //////////////////////////////////
// const currentIndex = ref(0)

const currentCard = ref(getCardForUuid(props.anyMyrKi))

// function incrementIndex() {
//   if (currentIndex.value >= foundCards.value.length - 1)
//     currentIndex.value = 0
//   else
//     currentIndex.value++

//   currentCard.value = foundCards.value[currentIndex.value]
// }

// function decrementIndex() {
//   if (currentIndex.value <= 0)
//     currentIndex.value = foundCards.value.length - 1
//   else
//     currentIndex.value--

//   currentCard.value = foundCards.value[currentIndex.value]
// }
// END CARD CAROUSEL //////////////////////////////////////
</script>

<template>
  <!-- BEGIN CARD DISPLAY ///////////////////////////////// -->
  <div v-if="currentCard">
    <div>
      <!-- <button @click="decrementIndex">
        -
      </button>
      <button @click="incrementIndex">
        +
      </button> -->
      <img class="card" :src="currentCard.image">
      <p>UUID: {{ currentCard.uuid }}</p>
    </div>
    <!-- <div v-if="foundCirclesForPassCode.length">
      <p>Circles:</p>
      <ul>
        <li
          v-for="thisFoundCircle in foundCirclesForPassCode"
          :key="thisFoundCircle.circleCode"
          @click="go(thisFoundCircle.circleCode)"
        >
          {{ `${thisFoundCircle.circleName}` }}
        </li>
      </ul>
    </div>
    <div v-if="foundSeedsForPassCode.length">
      <p>Seeds:</p>
      <ul>
        <li v-for="foundSeed in foundSeedsForPassCode" :key="foundSeed.seedCode">
          <a
            target="_blank"
            :href="foundSeed.seedLinkHref"
            class="showlink"
          >
            {{ foundSeed.seedLinkText }}
          </a>
        </li>
      </ul>
    </div> -->

    <!-- END CARD DISPLAY////////////////////////////////// -->
    <!-- BEGIN CIRCLE DISPLAY////////////////////////////// -->

    <div v-if="foundSentimentsForUuid.length">
      <p>Sentiments:</p>
      <ul>
        <li v-for="foundSentiment in foundSentimentsForUuid" :key="foundSentiment.sentimentCode">
          <p>{{ `${foundSentiment.sentimentContent} - ${foundSentiment.sentimentSource}` }}</p>
        </li>
      </ul>
    </div>

    <!-- END CIRCLE DISPLAY////////////////////////////// -->
  </div>
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
