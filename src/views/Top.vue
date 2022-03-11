<template>
  <div class="container">
    <aside class="left-menu">
      <div>
        <nav>
          <h2 class="subtitle">みんなで使おう！掲示板コーナー</h2>
          <div class="friend">
            <div>フレンド募集はこちらから</div>
            <button type="button" v-on:click="moveToBbs1">
              ここをクリック
            </button>
          </div>
          <div class="report">
            <div>ガチャ報告はこちらから</div>
            <button type="button" v-on:click="moveToBbs2">
              ここをクリック
            </button>
          </div>
          <div class="questionnaire">
            <div>アンケートはこちらから</div>
            <button type="button" v-on:click="moveToQuestionnaire">
              ここをクリック
            </button>
          </div>
        </nav>
      </div>
    </aside>

    <article class="article">
      <div class="event">
        <h2>現在のイベント攻略</h2>
        <button type="button" v-on:click="moveToEventCapture">
          ここをクリック
        </button>
      </div>
      <div class="checker">
        <h2>所持サーヴァントチェッカー</h2>
        <button type="button" v-on:click="moveToCheckPage">
          ここをクリック
        </button>
      </div>
      <div class="calc">
        <h2>宝具威力計算ツール</h2>
        <button type="button" v-on:click="moveToCalcTreasure">
          ここをクリック
        </button>
      </div>
    </article>

    <div class="sidebar-content">
      <div class="pickup">
        <h2>人気記事PickUp</h2>
      </div>
      <div class="twitter">
        <h2>公式Twitter</h2>
      </div>
    </div>
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
  moveToQuestionnaire(): void {
    this.$router.push("/questionnaire");
  }
  moveToCheckPage(): void {
    this.$router.push("/checkPage");
  }
  moveToCalcTreasure(): void {
    this.$router.push("/calcTreasurePage");
  }
}
</script>

<style scoped>
.left-menu {
  text-align: center;
}
.sidebar-content {
  text-align: center;
}
.article {
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
}
.friend,
.report,
.questionnaire,
.event,
.checker,
.calc,
.pickup,
.twitter {
  border: solid 1px black;
}
</style>
