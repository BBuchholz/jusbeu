<script setup>
import { getZhoneFor } from './allZhones'

const sortedZhones = ref([
  getZhoneFor('SC'),
  getZhoneFor('SCA'),
  getZhoneFor('COVENTRY'),
])
</script>

<template>
  <div class="text-center">
    <h3>Zhones</h3>
  </div>

  <div v-for="aZhone in sortedZhones" :key="aZhone" class="zhone flex-container">
    <div class="content flex-child">
      <li>
        <em>{{ aZhone.zhoneCode }}</em> - {{ aZhone.zhoneName }}
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
</style>
