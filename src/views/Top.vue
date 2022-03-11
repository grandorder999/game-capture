<template>
  <div class="container">
    <aside class="left-menu">
      <div>
        <nav>
          <h2 class="subtitle">みんなで使おう！掲示板コーナー</h2>
          <div>フレンド募集はこちらから</div>
          <button type="button" v-on:click="moveToBbs1">ここをクリック</button>
          <div>ガチャ報告はこちらから</div>
          <button type="button" v-on:click="moveToBbs2">ここをクリック</button>
        </nav>
      </div>
    </aside>

    <article class="article">
      <h2>現在のイベント攻略</h2>
      <button type="button" v-on:click="moveToEventCapture">
        ここをクリック
      </button>
    </article>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  moveToBbs1(): void {
    this.$router.push("/friendRecruitmenBbs");
  }
  moveToBbs2(): void {
    this.$router.push("/reportBbs");
  }
  moveToEventCapture(): void {
    this.$router.push("/eventCapture");
  }
}
</script>

<style scoped>
.left-menu {
  text-align: left;
}
</style>
