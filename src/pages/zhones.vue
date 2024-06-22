<script setup>
import {
  sortedZhones,
} from './allZhones'
</script>

<template>
  <div class="text-center">
    <h3>Zhones</h3>
  </div>

  <div v-for="aZhone in sortedZhones" :key="aZhone" class="zhone flex-container">
    <div class="content flex-child">
      <li>
        <em>{{ aZhone.zhoneCode }}</em> - {{ aZhone.zhoneName }}
        <a
          v-if="aZhone.zhoneHref"
          target="_blank"
          :href="aZhone.zhoneHref"
        >
          (site here)
        </a>
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
