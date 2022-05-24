<template>
  <div class="container">
    <aside class="left-menu">
      <div>
        <div class="friend">
          <h5>フレンド募集はこちらから</h5>
          <img class="img" src="/img/image8.png" /><br />
          <button type="button" v-on:click="moveToBbs1">ここをクリック</button>
        </div>
        <div class="report">
          <h5>ガチャ報告はこちらから</h5>
          <img src="/img/image9.jpeg" /><br />
          <button type="button" v-on:click="moveToBbs2">ここをクリック</button>
        </div>
        <div class="questionnaire">
          <h5>アンケートはこちらから</h5>
          <img src="/img/image10.jpeg" /><br />
          <button type="button" v-on:click="moveToQuestionnaire">
            ここをクリック
          </button>
        </div>
      </div>
    </aside>

    <article class="article">
      <div class="event">
        <h5>現在のイベント攻略</h5>
        <img src="/img/image5.jpeg" /><br />
        <button type="button" v-on:click="moveToEventCapture">
          ここをクリック
        </button>
      </div>
      <div class="checker">
        <h5>所持サーヴァントチェッカー</h5>
        <img src="/img/image6.jpeg" /><br />
        <button type="button" v-on:click="moveToCheckPage">
          ここをクリック
        </button>
      </div>
      <div class="calc">
        <h5>宝具威力計算ツール</h5>
        <img src="/img/image7.jpeg" /><br />
        <button type="button" v-on:click="moveToCalcTreasure">
          ここをクリック
        </button>
      </div>
    </article>

    <div class="sidebar-content">
      <div class="pickup">
        <h5>2022年シルエットサーヴァント</h5>
        <img class="img" src="/img/silhouette.jpeg" /><br />
        <button type="button" v-on:click="moveTosilhouette">
          ここをクリック
        </button>
      </div>
      <div class="twitter">
        <h5>公式Twitter</h5>
        <Twitter />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Twitter from "@/components/Twitter.vue";
@Component({
  components: {
    Twitter,
  },
})
export default class XXXComponent extends Vue {
  /**
   * 各画面へ遷移する機能.
   */
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
  moveTosilhouette(): void {
    this.$router.push("/silhouette");
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
  background-color: white;
}
.subtitle {
  font-weight: bold;
}
img {
  width: 425px;
  height: 160px;
  /* 画像の縦横比を維持したまま表示ができるプロパティ */
  object-fit: cover;
}
button {
  position: relative;
  border-radius: 4px;
  color: #fff;
  line-height: 20px;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: none;
  transition: none;
  text-shadow: 0px 1px 0px #f56778;
  margin-bottom: 10px;
}
button,
button:hover {
  border-bottom: 4px solid #cb5462;
  background-color: #f56778;
  background-image: -webkit-linear-gradient(top, #f997b0, #f56778);
  background-image: linear-gradient(to bottom, #f997b0, #f56778);
  box-shadow: inset 1px 1px 0 #fbc1d0;
}
button::before,
button::after {
  bottom: -1px;
  left: -1px;
  width: 200px;
  height: 50px;
  border: 1px solid #ee8090;
  border-bottom: 1px solid #b84d5a;
  border-radius: 4px;
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-transition: none;
  transition: none;
}
button::before {
  height: 48px;
  bottom: -4px;
  border-top: 0;
  border-radius: 0 0 4px 4px;
  box-shadow: 0 1px 1px 0px #bfbfbf;
}
button:hover {
  background: #f56778;
  background-image: -webkit-linear-gradient(top, #f56778, #f997b0);
  background-image: linear-gradient(to bottom, #f56778, #f997b0);
  color: #913944;
  text-shadow: 0px 1px 0px #f9a0ad;
}
button:active {
  bottom: -4px;
  margin-bottom: 4px;
  border: none;
  box-shadow: 1px 1px 0 #fff, inset 0 1px 1px rgba(0, 0, 0, 0.3);
}
button:active::before,
button:active::after {
  border: none;
  box-shadow: none;
}
.twitter {
  height: 560px;
}
</style>
