import Vue from "vue";
import Vuex from "vuex";
import { Article } from "@/types/article";
import { Comment } from "@/types/comment";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    articles: [
      new Article(
        1,
        "カルナ",
        "こんばんは。",
        [new Comment(13, "アルジュナ", "こんばんは、カルナ。", 1)],
        "/img/image0.jpeg"
      ),
    ],
  },
  actions: {},
  mutations: {
    addArticle(state, payload) {
      state.articles.unshift(payload.article);
      console.log(state.articles);
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
  },
});
