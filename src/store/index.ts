import Vue from "vue";
import Vuex from "vuex";
import { Article } from "@/types/article";
import { Comment } from "@/types/comment";
import { Servant } from "@/types/Servant";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    // 投稿１
    articles: [
      new Article(
        1,
        "カルナ",
        "サポ編載せときます。",
        [new Comment(13, "アルジュナ", "いいですね！", 1)],
        "/img/image4.png"
      ),
    ],
    // 投稿２
    articles2: [
      new Article(
        1,
        "メリュジーヌ",
        "闇コヤンゲット。",
        [new Comment(13, "モルガン", "ずるい。", 1)],
        "/img/image3.png"
      ),
    ],
    // サーヴァント一覧
    servants: Array<Servant>(),
  },
  actions: {
    // APIからデータを取得する
    async getServants(context) {
      const responce = await axios.get(
        "https://api.atlasacademy.io/export/JP/basic_servant.json"
      );
      console.dir("responce:" + JSON.stringify(responce));
      const payload = responce.data;
      context.commit("showServants", payload);
    },
  },
  mutations: {
    // サーヴァントを表示する
    showServants(state, payload) {
      state.servants = new Array<Servant>();
      for (const servant of payload) {
        state.servants.push(
          new Servant(
            servant.id,
            servant.collectionNo,
            servant.name,
            servant.type,
            servant.flag,
            servant.className,
            servant.attribute,
            servant.rarity,
            servant.atkMax,
            servant.hpMax,
            servant.face,
            servant.costume
          )
        );
      }
    },
    // 投稿する（フレンド募集掲示板）
    addArticle(state, payload) {
      state.articles.unshift(payload.article);
    },
    // 投稿する（ガチャ報告掲示板）
    addArticle1(state, payload) {
      state.articles2.unshift(payload.article);
    },
    // 投稿を削除する（フレンド募集掲示板）
    deleteArticle1(state, payload) {
      state.articles.splice(payload.index, 1);
    },
    // 投稿を削除する（ガチャ報告掲示板）
    deleteArticle2(state, payload) {
      state.articles2.splice(payload.index, 1);
    },
  },
  modules: {},
  getters: {
    getServants(state) {
      return state.servants;
    },
    getArticles(state) {
      return state.articles;
    },
    getArticles1(state) {
      return state.articles2;
    },
  },
});
