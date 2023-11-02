<script setup>
import { testValue, testValues } from './testFile.md'
</script>

<template>
  <div>
    <p>testValue: {{ testValue }}</p>
    <p v-for="tVal in testValues" :key="tVal">
      {{ tVal }}
    </p>
  </div>
</template>
