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
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  created(): void {
    // スクロールトップボタン
    scrollTop(1); // 遅すぎるとガクガクになるので注意
    function scrollTop(duration: number) {
      let currentY = window.pageYOffset; // 現在のスクロール位置を取得
      let step = duration / currentY > 1 ? 10 : 100; // 三項演算子
      let timeStep = (duration / currentY) * step; // スクロール時間
      let intervalId = setInterval(scrollUp, timeStep);
      // timeStepの間隔でscrollUpを繰り返す。
      // clearItervalのために返り値intervalIdを定義する。
      function scrollUp() {
        currentY = window.pageYOffset;
        if (currentY === 0) {
          clearInterval(intervalId); // ページ最上部に来たら終了
        } else {
          scrollBy(0, -step); // step分上へスクロール
        }
      }
    }
  }
}
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
