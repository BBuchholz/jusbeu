<script setup>
import {
  getCardsForPassCodeArray,
  getCircleForCircleCode,
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
</script>

<template>
  <!-- BEGIN CIRCLE DISPLAY////////////////////////////// -->
  <div v-if="foundCircle">
    <p>Circle: {{ foundCircle.circleName }}</p>
    <div v-if="foundSeedsForCircleCode.length">
      <p>Seeds:</p>
      <ul>
        <li v-for="foundSeed in foundSeedsForCircleCode" :key="foundSeed.seedCode">
          <a
            target="_blank"
            :href="foundSeed.seedLinkHref"
            class="showlink"
          >
            {{ foundSeed.seedLinkText }}
          </a>
        </li>
      </ul>
    </div>
    <div v-for="aCard in foundCardsForCircle" :key="aCard" class="zhone flex-container">
      <div class="card flex-child">
        <!-- <RouterLink :to="`/myrKiSs/${aCard.passCode}`" replace>
          <img :src="aCard.image">
        </RouterLink> -->
        <RouterLink :to="`/cards/${aCard.passCode}`" replace>
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
