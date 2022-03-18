<template>
  <div class="container">
    <h2>バトルインニューヨーク2022の攻略</h2>
    <div>開催期間について</div>
    <img src="/img/image11.jpeg" />
    <table border="1">
      <tr>
        <td>開催期間</td>
        <td>3月16日 18:00〜3月30日(水) 12:59</td>
      </tr>
      <tr>
        <td>参加条件</td>
        <td class="anastasia">2部1章「アナスタシア」クリア</td>
      </tr>
    </table>
    <div>フリークエスト一覧</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.container {
  text-align: center;
}
img {
  width: 350px;
  height: 350px;
  /* 画像の縦横比を維持したまま表示ができるプロパティ */
  object-fit: cover;
}
table {
  margin-left: auto;
  margin-right: auto;
  background-color: white;
}
.anastasia {
  color: red;
}
</style>
