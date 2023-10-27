<script setup lang="ts">
import {
  getCardsFor,
} from '../allSets'

import {
  getTopicsForPassCode,
} from '../allTopics'

import {
  getSeedsForPassCode,
} from '../allSeeds'

const props = defineProps<{ anyMyrKi: string }>()
const router = useRouter()
const user = useUserStore()

watchEffect(() => {
  user.setNewMyrKi(props.anyMyrKi)
})

const foundCards = ref([
  ...getCardsFor(props.anyMyrKi),
])

const foundTopicsForPassCode = ref([
  ...getTopicsForPassCode(props.anyMyrKi),
])

const foundSeedsForPassCode = ref([
  ...getSeedsForPassCode(props.anyMyrKi),
])

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
</script>

<template>
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
    <div v-if="foundTopicsForPassCode.length">
      <p>Topics:</p>
      <ul>
        <li v-for="foundTopic in foundTopicsForPassCode" :key="foundTopic.topicCode">
          {{ `${foundTopic.topic}` }}
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
    </div>
  </div>
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
