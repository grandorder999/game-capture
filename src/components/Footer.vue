<template>
  <div class="footer">
    <img src="/img/image0.jpeg" alt="#" />
    <div class="scroll">
      <a class="return" href="#" id="page-top">ページ上部へ戻る</a>
    </div>
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
  padding-top: 20px;
}
.sample,
.copyright {
  text-align: center;
}
.scroll {
  text-align: right;
  margin-right: 50px;
}
.return {
  color: white;
  padding: 15px;
  background-color: lightpink;
  cursor: pointer;
  border-radius: 5px;
}
.return:hover {
  opacity: 0.8;
}
</style>
