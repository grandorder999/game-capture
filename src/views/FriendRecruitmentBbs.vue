<template>
  <div class="container">
    <h1>フレンド募集掲示板</h1>
    <p>
      サポート枠に強力なサーヴァントやお気に入りのサーヴァントを設定することで<br />
      ストーリーやイベントの攻略が楽になったり、周回効率をアップさせることができます。<br />
      この掲示板を利用して、たくさんのマスターとフレンドになることをお勧めします！
    </p>
    <div class="articleNameErrorMessage">{{ articleNameErrorMessage }}</div>
    <div>
      投稿者名：<input type="text" v-model="articleName" maxlength="20" />
    </div>
    <div class="articleContentErrorMessage">
      {{ articleContentErrorMessage }}
    </div>
    <div>
      投稿内容：<textarea
        name="textarea"
        cols="30"
        rows="5"
        v-model="articleContent"
      ></textarea>
    </div>
    <div class="upload">
      <div>
        <input type="file" ref="preview" v-on:change="show" />
      </div>
      <div class="preview-box" v-if="url">
        <img class="image-preview" v-bind:src="url" />
      </div>
    </div>
    <button type="button" v-on:click="addArticle">記事投稿</button><br />
    <hr />

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

      <button type="button" v-on:click="deleteArticle(articleIndex)">
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
import Upload from "@/components/Upload.vue";
@Component({
  components: {
    Upload,
  },
})
export default class XXXComponent extends Vue {
  private url = "";
  // 投稿者名
  private articleName = "";
  // 投稿内容
  private articleContent = "";
  // 投稿者名のエラー
  private articleNameErrorMessage = "";
  // 投稿内容のエラー
  private articleContentErrorMessage = "";
  // 現在の投稿一覧
  private currentArticleList = new Array<Article>();

  created(): void {
    console.log("createdイベント発生");
    this.currentArticleList = this.$store.getters.getArticles;
  }

  show(): void {
    const file = this.$refs.preview.files[0];
    this.url = URL.createObjectURL(file);
  }

  /**
   * 記事を追加する.
   */
  addArticle(): void {
    // エラーチェック
    let existError = false;
    if (this.articleName === "") {
      this.articleNameErrorMessage = "名前を入力してください";
      existError = true;
    }
    if (this.articleName.length > 20) {
      this.articleNameErrorMessage = "名前は20字以内で入力してください";
      existError = true;
    }
    if (this.articleContent === "") {
      this.articleContentErrorMessage = "投稿内容を入力してください";
      existError = true;
    }
    if (existError) {
      return;
    }

    // 記事一覧
    let articles = this.$store.getters.getArticles;
    // 新しいIDを発行
    let newId = 0;
    // もし既に記事が1件でもあれば、最後の記事IDに１を足したものを記事IDとする
    if (articles.length >= 1) {
      newId = articles[0].id + 1;
    } else {
      newId = 0;
    }
    console.log(newId);
    this.$store.commit("addArticle", {
      article: new Article(
        newId,
        this.articleName,
        this.articleContent,
        [],
        this.url
      ),
    });
    // 入力値をフォームからクリアする
    this.articleName = "";
    this.articleContent = "";
    this.articleNameErrorMessage = "";
    this.articleContentErrorMessage = "";
    this.url = "";
  }
  /**
   * 記事を削除する.
   * @param articleIndex - 記事のIndex番号
   */
  deleteArticle(articleIndex: number): void {
    this.$store.commit("deleteArticle", { index: articleIndex });
  }
}
</script>

<style scoped>
.articleNameErrorMessage,
.articleContentErrorMessage {
  color: red;
}
.image-preview2,
.image-preview {
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
