<template>
  <div class="container">
    <h3>フレンド募集掲示板</h3>
    <p>
      サポート枠に強力なサーヴァントやお気に入りのサーヴァントを設定することで<br />
      ストーリーやイベントの攻略が楽になったり、周回効率をアップさせることができます。<br />
      この掲示板を利用して、たくさんのマスターとフレンドになることをお勧めします！
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
    this.currentArticleList = this.$store.getters.getArticles;
  }
  /**
   * 記事を削除する.
   * @param articleIndex - 記事のIndex番号
   */
  deleteArticle(articleIndex: number): void {
    this.$store.commit("deleteArticle1", { index: articleIndex });
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
