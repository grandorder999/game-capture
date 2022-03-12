<template>
  <div class="footer">
    <img src="/img/image0.jpeg" alt="#" />
    <div class="sample">
      <router-link to="/companyOverview">会社概要</router-link> |
      <router-link to="/employeeInfo">採用情報</router-link> |
      <router-link to="/inquiry">お問い合わせ</router-link> |
      <router-link to="/question">よくあるQ&amp;A</router-link> |
      <router-link to="/privacy">プライバシーポリシー</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class Footer extends Vue {}
</script>

<style scoped>
.footer {
  margin-top: 20px;
}
img {
  width: 10%;
  padding-left: 630px;
}
.sample {
  text-align: center;
}
</style>
