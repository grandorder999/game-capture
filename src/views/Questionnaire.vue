<template>
  <div class="container">
    <div class="description">
      いつもゲーム攻略サイトをご利用いただき、誠にありがとうございます。<br />
      この攻略サイトをより良いものにするため、アンケートのご協力をお願い致します。
    </div>
    <div></div>
    <div class="questionnaire">
      <h1>アンケートフォーム</h1>
      <div>
        年齢(数値のみ入力可)：<input type="text" v-model.number="age" />
      </div>
      <hr />

      <div>
        性別：<input type="radio" v-model="gender" value="男性" />男性
        <input type="radio" v-model="gender" value="女性" />女性
      </div>
      <hr />

      <div>
        趣味：<input type="checkbox" v-model="hobby" value="スイム" />スイム
        <input type="checkbox" v-model="hobby" value="バイク" />バイク
        <input type="checkbox" v-model="hobby" value="ラン" />ラン
      </div>
      <hr />

      <div>
        好きな言語：
        <select name="language" id="language" v-model="language">
          <option value="JavaScript">JavaScript</option>
          <option value="TypeScript">TypeScript</option>
        </select>
      </div>
      <hr />

      <div>
        その他：<textarea
          name="other"
          id="other"
          cols="30"
          rows="5"
          v-model.lazy="other"
        ></textarea
        ><br />
      </div>
      <hr />

      <div>
        私はロボットではありません。<input type="checkbox" v-model="agree" />
      </div>
      <hr />

      <button type="button" v-bind:disabled="!agree">送信する</button>
    </div>
    <div class="content">ご協力いただきありがとうございました！</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private age = 0;
  private gender = "男性";
  private hobby = [];
  private language = "JavaScript";
  private other = "";
  private agree = false;
}
</script>

<style scoped>
.questionnaire {
  text-align: center;
  border: solid 3px black;
}
.description,
.content {
  text-align: center;
  font-size: 20px;
}
</style>
