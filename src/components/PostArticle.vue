<template>
  <div>
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
        <input type="file" ref="preview" v-on:change="showImage" />
      </div>
      <div class="preview-box" v-if="url">
        <img class="image-preview" v-bind:src="url" />
      </div>
    </div>

    <button class="post-button" type="button" v-on:click="addArticle">
      記事投稿</button
    ><br />
    <hr />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Article } from "@/types/article";
@Component
export default class XXXComponent extends Vue {
  // 画像のurl
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

  /**
   * 選択した画像のプレビュー表示を行う.
   */
  showImage(): void {
    const file = this.$refs.preview.files[0];
    this.url = URL.createObjectURL(file);
  }
  /**
   * 投稿を追加する.
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
    let articles = this.$store.getters.getArticles1;
    // 新しいIDを発行
    let newId = 0;
    // もし既に記事が1件でもあれば、最後の記事IDに１を足したものを記事IDとする
    if (articles.length >= 1) {
      newId = articles[0].id + 1;
    } else {
      newId = 0;
    }
    // フレンド募集掲示板
    this.$store.commit("addArticle1", {
      article: new Article(
        newId,
        this.articleName,
        this.articleContent,
        [],
        this.url
      ),
    });
    // ガチャ報告掲示板
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
.post-button {
  margin-top: 10px;
  min-width: 130px;
  height: 40px;
  color: #fff;
  padding: 5px 10px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  outline: none;
  overflow: hidden;
  border-radius: 5px;
  border: none;
  background-color: #80ed99;
}
.post-button:hover {
  border-radius: 5px;
  padding-right: 24px;
  padding-left: 8px;
}
.post-button:hover:after {
  opacity: 1;
  right: 10px;
}
.post-button:after {
  content: "\00BB";
  position: absolute;
  opacity: 0;
  font-size: 20px;
  line-height: 40px;
  top: 0;
  right: -20px;
  transition: 0.4s;
}
</style>
