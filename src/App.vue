<script setup>

import LauchesPreview from './components/LaunchesPreview.vue'
</script>

<template>
  <div class="main__container">
    <input type="text" class="search-launch" placeholder="Enter keywords">
    <LauchesPreview/>
  </div>
</template>

<style scoped>
  .main__container {
    width: 948px;
    margin: 0 auto;
  }

  .search-launch {
    margin-bottom: 31px;
    width: 100%;
    background: #FFFFFF;
    border: 1px solid #E1E1E1;
    padding: 14px 22px;
    border-radius: 4px;
  }

  .search-launch::-webkit-input-placeholder { /* Edge */
    font-style: italic;
  }

  .search-launch:-ms-input-placeholder { /* Internet Explorer 10-11 */
    font-style: italic;
  }

  .search-launch::placeholder {
    font-style: italic;
  }

  
</style>
