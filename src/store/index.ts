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
  actions: {},
  mutations: {
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
    getArticles(state) {
      return state.articles;
    },
    getArticles1(state) {
      return state.articles2;
    },
  },
});
