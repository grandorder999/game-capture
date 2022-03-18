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
    articles: [
      new Article(
        1,
        "カルナ",
        "サポ編載せときます。",
        [new Comment(13, "アルジュナ", "いいですね！", 1)],
        "/img/image4.png"
      ),
    ],
    articles2: [
      new Article(
        1,
        "メリュジーヌ",
        "闇コヤンゲット。",
        [new Comment(13, "モルガン", "ずるい。", 1)],
        "/img/image3.png"
      ),
    ],
    servants: Array<Servant>(),
  },
  actions: {
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
    addArticle(state, payload) {
      state.articles.unshift(payload.article);
    },
    addArticle1(state, payload) {
      state.articles2.unshift(payload.article);
    },

    deleteArticle(state, payload) {
      state.articles.splice(payload.index, 1);
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
