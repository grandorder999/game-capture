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
    <div class="footer-copyright">
      <div class="copyright">Copyright&copy; 株式会社Challenger</div>
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
  background-color: lightgrey;
  text-align: center;
}
img {
  width: 10%;
  padding-top: 10px;
}
.sample,
.copyright {
  text-align: center;
}
</style>
