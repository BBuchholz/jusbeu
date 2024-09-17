<script setup>
import {
  sortedZhones,
} from '../allZhones.js'
</script>

<template>
  <div class="text-center">
    <h3>Zhones</h3>
  </div>

  <div v-for="aZhone in sortedZhones" :key="aZhone" class="zhone flex-container">
    <div class="content flex-child">
      <li>
        Pending Zhone Transfer for myrKi: {{ aZhone.zhoneCode }}<br>
        ---<br>
        mdFileAt: {{ aZhone.zhoneZtlFileName }}<br>
        ---<br>
        <a
          v-if="aZhone.zhoneHref"
          target="_blank"
          :href="aZhone.zhoneHref"
        >
          {{ aZhone.zhoneName }}
        </a>
        <p v-else>
          {{ aZhone.zhoneName }}
        </p>
        <div v-if="aZhone.zhoneImgSrc" class="card">
          <RouterLink :to="`/cards/${aZhone.zhoneCode}`" replace>
            <img :src="aZhone.zhoneImgSrc">
          </RouterLink>
        </div>
      </li>
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
