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
  text-align: center;
}
img {
  width: 30%;
}
img:hover {
  opacity: 0.8;
}
</style>
