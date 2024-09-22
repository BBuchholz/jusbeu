<script setup>
import {
  getCardsFor,
} from '../allSets'

import {
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
      <RouterLink
        :to="`/sentiments/${currentCard.uuid}`"
      >
        <img class="card" :src="currentCard.image">
      </RouterLink>
    </div>
    <div class="page-center">
      <div v-if="foundCirclesForPassCode.length">
        <ul>
          <li v-for="thisFoundCircle in foundCirclesForPassCode" :key="thisFoundCircle.circleCode">
            <div class="scs">
              <RouterLink
                :to="`/circles/${thisFoundCircle.circleCode}`"
              >
                <div class="i-icon-park-solid-ring" />
                {{ `${thisFoundCircle.circleName}` }}
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="foundSeedsForPassCode.length">
        <ul>
          <li v-for="foundSeed in foundSeedsForPassCode" :key="foundSeed.seedCode">
            <div class="scs">
              <RouterLink :to="`/seeds/${foundSeed.seedCode}`" replace>
                <div class="i-ri-seedling-line" />
                {{ foundSeed.seedLinkText }}
                <p v-if="foundSeed.seedLinkDesc">
                  {{ foundSeed.seedLinkDesc }}
                </p>
              </RouterLink>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <!-- END CARD DISPLAY////////////////////////////////// -->
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
      </p>
      <ul>
        <li v-for="otherMyrKi in user.otherMyrKis" :key="otherMyrKi">
          <RouterLink :to="`/myrKiSs/${otherMyrKi}`" replace>
            {{ otherMyrKi }}
          </RouterLink>
        </li>
      </ul>
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

  .i-ri-seedling-line {
    --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 24 24' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M5.998 3a7.002 7.002 0 0 1 6.913 5.895A6.479 6.479 0 0 1 17.498 7h4.5v2.5a6.5 6.5 0 0 1-6.5 6.5h-2.5v5h-2v-8h-2a7 7 0 0 1-7-7V3h4Zm14 6h-2.5a4.5 4.5 0 0 0-4.5 4.5v.5h2.5a4.5 4.5 0 0 0 4.5-4.5V9Zm-14-4h-2v1a5 5 0 0 0 5 5h2v-1a5 5 0 0 0-5-5Z'/%3E%3C/svg%3E");
    -webkit-mask: var(--un-icon) no-repeat;
    mask: var(--un-icon) no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    background-color: currentColor;
    color: inherit;
    width: 2.4em;
    height: 2.4em;
    margin: 0% auto 10% auto;
  }

  .i-icon-park-solid-ring {
    --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 48 48' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cmask id='ipSRing0'%3E%3Cg fill='none' stroke='%23fff' stroke-linejoin='round' stroke-width='4'%3E%3Cpath fill='%23fff' d='M24 11.619c2.093 0 3.79-1.706 3.79-3.81C27.79 5.707 26.093 4 24 4s-3.79 1.706-3.79 3.81c0 2.103 1.697 3.809 3.79 3.809ZM9.79 40.19c2.092 0 3.789-1.705 3.789-3.809s-1.697-3.81-3.79-3.81C7.697 32.572 6 34.278 6 36.382s1.697 3.81 3.79 3.81Zm28.42 0c2.093 0 3.79-1.705 3.79-3.809s-1.697-3.81-3.79-3.81s-3.79 1.706-3.79 3.81s1.697 3.81 3.79 3.81Z'/%3E%3Cpath stroke-linecap='round' d='M33.143 10.314A18.105 18.105 0 0 1 42 25.904c0 .578-.027 1.148-.08 1.711v0m-10.906 14.96A17.863 17.863 0 0 1 24 44c-2.488 0-4.858-.507-7.014-1.425M6.08 27.615a18.416 18.416 0 0 1-.08-1.71a18.105 18.105 0 0 1 8.857-15.59'/%3E%3C/g%3E%3C/mask%3E%3Cpath fill='currentColor' d='M0 0h48v48H0z' mask='url(%23ipSRing0)'/%3E%3C/svg%3E");
    -webkit-mask: var(--un-icon) no-repeat;
    mask: var(--un-icon) no-repeat;
    -webkit-mask-size: 100% 100%;
    mask-size: 100% 100%;
    background-color: currentColor;
    color: inherit;
    width: 2.4em;
    height: 2.4em;
    margin: 0% auto 10% auto;
  }

  .page-center {
    width: 400px;
    margin: 0 auto;
    border: none;
  }

  .scs {
    padding: 20px;
    width: 300px;
    margin: 10% auto;
    border: none;
    border-radius: 20px;
    background-color: lightgrey;
    color: darkslategrey;
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
    border-radius: 2%;
  }
</style>
