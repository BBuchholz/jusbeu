<script setup>
import {
  getSeedForSeedCode,
} from '../allSeeds'

const sortedSeeds = ref([
  getSeedForSeedCode('SC1'),
  getSeedForSeedCode('SC2'),
  getSeedForSeedCode('SC3'),
])
</script>

<template>
  <p class="display">
    COMING SOON: MuSicK OVthA SPheReS
  </p>
  <div>
    <!-- <a href="#" target="_blank"> -->
    <img class="card" src="https://madamadam.s3.us-east-2.amazonaws.com/SC-08ef_CARD.png">
    <!-- </a> -->
  </div>
  <p class="display">
    card attribution info here
  </p>
  <div v-for="aSeed in sortedSeeds" :key="aSeed" class="display flex-container">
    <div class="content flex-child">
      <a
        target="_blank"
        :href="aSeed.seedLinkHref"
        class="showlink"
      >
        {{ aSeed.seedLinkText }}
      </a>
    </div>
    <div class="flex-child content">
      SEED SOURCE:
      <a
        target="_blank"
        :href="aSeed.seedSourceLink"
        class="showlink"
      >
        this {{ aSeed.seedSourceType }}
      </a>
    </div>
  </div>
</template>

<style>
  .display {
    margin: 40px;
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
  .flex-container {
    display: flex;
    border: solid;
    border-radius: 20px;
    padding: 20px;
  }

  .flex-child {
    flex: 1;
  }

  .showlink {
    color: red;
  }
</style>
