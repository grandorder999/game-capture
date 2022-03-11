<template>
  <div class="header">
    <router-link to="/"> <img src="/img/image2.jpeg" alt="#" /> </router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Header extends Vue {}
</script>

<style scoped>
.header {
  margin-bottom: 20px;
}
img {
  width: 30%;
  padding-left: 500px;
}
</style>
