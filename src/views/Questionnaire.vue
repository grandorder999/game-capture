<template>
  <div class="container">
    <div class="description">
      いつもゲーム攻略サイトをご利用いただき、誠にありがとうございます。<br />
      この攻略サイトをより良いものにするため、アンケートのご協力をお願い致します。
    </div>
    <div></div>
    <div class="questionnaire">
      <h4>アンケートフォーム</h4>
      <div>
        年齢(数値のみ入力可)：<input type="text" v-model.number="age" />
      </div>
      <hr />

      <div>
        性別：<label
          ><input type="radio" v-model="gender" value="男性" />
          <span>男性</span></label
        >
        <label
          ><input type="radio" v-model="gender" value="女性" /><span
            >女性</span
          ></label
        >
      </div>
      <hr />

      <div>
        1日あたりのプレイ時間はどのくらいですか？：
        <select style="display: block" name="time" id="time" v-model="time">
          <option value="0">選択する</option>
          <option value="1">ログインのみ</option>
          <option value="2">30分以内</option>
          <option value="3">1時間以内</option>
          <option value="4">2時間以内</option>
          <option value="5">3時間以内</option>
          <option value="6">それ以上</option>
        </select>
      </div>
      <hr />

      <div>
        どのくらいの頻度でゲームをしますか？：
        <select style="display: block" name="game" id="game" v-model="game">
          <option value="0">選択する</option>
          <option value="1">毎日する</option>
          <option value="2">週に4〜5回</option>
          <option value="3">週に2〜3回</option>
          <option value="4">1週間に1回ペース</option>
          <option value="5">1ヶ月に数回ペース</option>
          <option value="6">1ヶ月丸々やらないこともある</option>
        </select>
      </div>
      <hr />

      <div>
        ゲーム開始時期はいつ頃ですか？：
        <select style="display: block" name="start" id="start" v-model="start">
          <option value="0">選択する</option>
          <option value="1">1ヶ月以内</option>
          <option value="2">3ヶ月以内</option>
          <option value="3">半年以内</option>
          <option value="4">1年以内</option>
          <option value="5">2年以内</option>
          <option value="6">3年以内</option>
          <option value="7">それ以前からやっている</option>
        </select>
      </div>
      <hr />

      <div>
        1番好きなメインストーリーは？：
        <select style="display: block" name="story" id="story" v-model="story">
          <option value="0">選択する</option>
          <option value="1">1部 炎上汚染都市 冬木</option>
          <option value="2">1部 邪竜百年戦争 オルレアン</option>
          <option value="3">1部 永続狂気帝国 セプテム</option>
          <option value="4">1部 封鎖終局四海 オケアノス</option>
          <option value="5">1部 死界魔霧都市 ロンドン</option>
          <option value="6">1部 北米神話大戦 イ・プルーリバス・ウナム</option>
          <option value="7">1部 神聖円卓領域 キャメロット</option>
          <option value="8">1部 絶対魔獣戦線 バビロニア</option>
          <option value="9">1部 冠位時間神殿 ソロモン</option>
          <option value="10">1.5部 悪性隔絶魔境 新宿</option>
          <option value="11">1.5部 伝承地底世界 アガルタ</option>
          <option value="12">1.5部 屍山血河舞台 下総国</option>
          <option value="13">1.5部 禁忌降臨庭園 セイレム</option>
          <option value="14">2部 永久凍土帝国 アナスタシア</option>
          <option value="15">2部 無間氷焔世紀 ゲッテルデメルング</option>
          <option value="16">2部 人智統合真国 シン</option>
          <option value="17">2部 創世滅亡輪廻 ユガ・クシェートラ</option>
          <option value="18">2部 神代巨神海洋 アトランティス</option>
          <option value="19">2部 星間都市山脈 オリュンポス</option>
          <option value="20">2部 妖精円卓領域 アヴァロン・ル・フェ</option>
        </select>
      </div>
      <hr />

      <div>
        好きなサーヴァントは？（複数回答可）：
        <textarea
          name="like"
          id="like"
          cols="30"
          rows="3"
          v-model.lazy="like"
        ></textarea>
      </div>
      <hr />

      <div>
        他にやっているゲームはありますか？（複数選択可）：
        <label
          ><input type="checkbox" v-model="hobby" value="パズドラ" />
          <span class="game-name">パズドラ</span></label
        >
        <label
          ><input type="checkbox" v-model="hobby" value="モンスト" /><span
            class="game-name"
            >モンスト</span
          ></label
        >
        <label
          ><input type="checkbox" v-model="hobby" value="ウマ娘" /><span
            class="game-name"
            >ウマ娘</span
          ></label
        >
        <label>
          <input type="checkbox" v-model="hobby" value="あんすた" /><span
            class="game-name"
            >あんすた</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="アイナナ" /><span
            class="game-name"
            >アイナナ</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="原神" /><span
            class="game-name"
            >原神</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="ポケモンGO" /><span
            class="game-name"
            >ポケモンGO</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="ツイステ" /><span
            class="game-name"
            >ツイステ</span
          >
        </label>
        <label
          ><input
            type="checkbox"
            v-model="hobby"
            value="ディズニーツムツム"
          /><span class="game-name">ディズニーツムツム</span></label
        >
        <label>
          <input type="checkbox" v-model="hobby" value="マリオカート" /><span
            class="game-name"
            >マリオカート</span
          >
        </label>
        <label>
          <input
            type="checkbox"
            v-model="hobby"
            value="キャンディークラッシュ"
          /><span class="game-name">キャンディークラッシュ</span>
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="COD" /><span
            class="game-name"
            >COD</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="遊戯王" /><span
            class="game-name"
            >遊戯王</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="ぷよぷよ" /><span
            class="game-name"
            >ぷよぷよ</span
          >
        </label>
        <label>
          <input type="checkbox" v-model="hobby" value="テトリス" /><span
            class="game-name"
            >テトリス</span
          >
        </label>
        <div>
          その他：
          <textarea
            name="other"
            id="other"
            cols="30"
            rows="3"
            v-model.lazy="other1"
          ></textarea>
          <br />
        </div>
      </div>
      <hr />

      <div>
        そのほかご要望などございましたらこちらにお気軽にご記入ください！：
        <textarea
          name="other"
          id="other"
          cols="50"
          rows="5"
          v-model.lazy="other2"
        ></textarea>
      </div>
      <hr />

      <label>
        <input type="checkbox" v-model="agree" /><span
          >私はロボットではありません。</span
        ></label
      >
      <hr />

      <button
        class="btn"
        type="button"
        v-bind:disabled="!agree"
        v-on:click="submit"
      >
        送信する
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private age = 0;
  private gender = "男性";
  private time = "0";
  private hobby = [];
  private start = "0";
  private game = "0";
  private story = "0";
  private other1 = "";
  private other2 = "";
  private like = "";
  private agree = false;

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
  }

  /**
   * アンケート内容を送信する.
   */
  submit(): void {
    console.log("発生");
    this.$router.push("/success");
  }
}
</script>

<style scoped>
.questionnaire {
  text-align: center;
  border: solid 3px black;
  background-color: snow;
}
.description {
  text-align: center;
  font-size: 20px;
}
.game-name {
  margin-right: 10px;
}
textarea {
  background-color: white;
}
.btn {
  margin-bottom: 10px;
}
</style>
