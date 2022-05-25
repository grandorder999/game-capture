<template>
  <div class="container">
    <h4>ガチャ報告掲示板</h4>
    <p>
      恒常、イベント、福袋など様々なガチャを回して出たサーヴァントたちをみんなで共有しよう！<br />
      ルールを守って、誰もが楽しく利用できる掲示板になるようご協力をお願いいたします。<br />
      ※この掲示板ではネタバレに関して一切の責任を負いません。自己判断でのご利用をお願いします。
    </p>

    <PostArticle></PostArticle>

    <div
      v-for="(article, articleIndex) of currentArticleList"
      v-bind:key="article.id"
      class="list"
    >
      <div>投稿者名：{{ article.name }}</div>
      <div>
        投稿内容：
        <pre>{{ article.content }}</pre>
        <span
          ><img
            class="image-preview2"
            ref="preview2"
            v-bind:src="article.image"
            alt="#"
        /></span>
      </div>

      <button
        class="btn"
        type="button"
        v-on:click="deleteArticle(articleIndex)"
      >
        記事削除</button
      ><br />

      <div v-for="comment of article.commentList" v-bind:key="comment.id">
        <div>コメント者名：{{ comment.name }}</div>
        <div>
          コメント内容：
          <pre>{{ comment.content }}</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Article } from "@/types/article";
import PostArticle from "@/components/PostArticle.vue";
@Component({
  components: {
    PostArticle,
  },
})
export default class XXXComponent extends Vue {
  // 現在の投稿一覧
  private currentArticleList = new Array<Article>();

  /**
   * 非同期処理.
   */
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
    this.currentArticleList = this.$store.getters.getArticles1;
  }
  /**
   * 記事を削除する.
   * @param articleIndex - 記事のIndex番号
   */
  deleteArticle(articleIndex: number): void {
    this.$store.commit("deleteArticle2", { index: articleIndex });
  }
}
</script>

<style scoped>
.image-preview2 {
  width: 500px;
  height: 250px;
  /* 画像の縦横比を維持したまま表示ができるプロパティ */
  object-fit: cover;
}
.list {
  border: solid 3px black;
  margin-bottom: 5px;
  background-color: white;
}
</style>
