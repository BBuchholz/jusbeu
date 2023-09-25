<template>
  <p class="display">
    "WEWALKS"
  </p>
  <div class="flex-container">
    <!-- <a href="#" target="_blank"> -->
    <img
      class="card flex-child"
      src="https://madamadam.s3.us-east-2.amazonaws.com/WEWALKS-9071_20230821_115243_0000.png"
    >
    <p class="flex-child display">
      testing
    </p>
    <!-- </a> -->
  </div>
  <div class="flex-container">
    <!-- <a href="#" target="_blank"> -->

    <p class="flex-child display">
      testing
    </p>
    <img class="card flex-child" src="https://madamadam.s3.us-east-2.amazonaws.com/LPI-60fc_CARD.png">
    <!-- </a> -->
  </div>
  <div class="flex-container">
    <!-- <a href="#" target="_blank"> -->
    <img class="card flex-child" src="https://madamadam.s3.us-east-2.amazonaws.com/SYLFAN-857a_CARD.png">

    <p class="flex-child display">
      testing
    </p>
    <!-- </a> -->
  </div>
  <p class="display">
    card attribution info here
  </p>
</template>

<style>
  .flex-container {
    display: flex;
    margin: 40px;
  }

  .flex-child {
      flex: 1;
  }
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
</style>
