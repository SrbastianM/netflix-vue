<script setup lang="ts">
</script>

<template>
  <router-view></router-view>
  <br>
  <router-link to="/">home </router-link>
  <router-link to="/about">About</router-link>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
