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

// BEGIN SENTIMENT LOOKUP //////////////////////////////////

const foundSentimentsForUuid = ref([
  ...getSentimentsForUuid(props.anyMyrKi),
])
// END SENTIMENT LOOKUP ////////////////////////////////////

// BEGIN CARD CAROUSEL //////////////////////////////////

const currentCard = ref(getCardForUuid(props.anyMyrKi))

// END CARD CAROUSEL //////////////////////////////////////
</script>

<template>
  <div v-if="currentCard">
    <!-- BEGIN Sentiment DISPLAY////////////////////////////// -->

    <div v-if="foundSentimentsForUuid.length">
      <ul>
        <li v-for="foundSentiment in foundSentimentsForUuid" :key="foundSentiment.sentimentCode">
          <div class="scs">
            <div class="i-carbon-phrase-sentiment" />
            <p>{{ `${foundSentiment.sentimentContent} - ${foundSentiment.sentimentSource}` }}</p>
          </div>
        </li>
      </ul>
    </div>

    <!-- END Sentiment DISPLAY////////////////////////////// -->
    <!-- BEGIN CARD DISPLAY ///////////////////////////////// -->
    <div>
      <RouterLink :to="`/cards/${currentCard.passCode}`">
        <img class="card" :src="currentCard.image">
        <p>UUID: {{ currentCard.uuid }}</p>
      </RouterLink>
    </div>
    <!-- END CARD DISPLAY////////////////////////////////// -->
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

  button {
    padding: 20px;
    margin: 20px;
    border: solid;
    border-radius: 10px;
  }

  .i-carbon-phrase-sentiment {
    --un-icon: url("data:image/svg+xml;utf8,%3Csvg viewBox='0 0 32 32' width='1.2em' height='1.2em' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath fill='currentColor' d='M18.303 10a2.662 2.662 0 0 0-1.908.806l-.393.405l-.397-.405a2.662 2.662 0 0 0-3.816 0a2.8 2.8 0 0 0 0 3.896L16.002 19l4.209-4.298a2.8 2.8 0 0 0 0-3.896A2.662 2.662 0 0 0 18.303 10Z'/%3E%3Cpath fill='currentColor' d='M17.736 30L16 29l4-7h6a1.997 1.997 0 0 0 2-2V8a1.997 1.997 0 0 0-2-2H6a1.997 1.997 0 0 0-2 2v12a1.997 1.997 0 0 0 2 2h9v2H6a4 4 0 0 1-4-4V8a3.999 3.999 0 0 1 4-4h20a3.999 3.999 0 0 1 4 4v12a4 4 0 0 1-4 4h-4.835Z'/%3E%3C/svg%3E");
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

  .scs {
    padding: 20px;
    width: 300px;
    margin: 10% auto;
    border: none;
    border-radius: 20px;
    background-color: lightgrey;
    color: darkslategrey;
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
