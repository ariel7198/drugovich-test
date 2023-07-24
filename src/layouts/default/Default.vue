<template>
  <v-app>
    <default-bar />
    <default-view class="default-view"/>
  </v-app>
</template>

<script setup>
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
</script>

<style>
.default-view{
  margin-top: 100px;
}
</style>
