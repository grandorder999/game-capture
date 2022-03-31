<template>
  <div class="container">
    <button type="button" class="select" v-on:click="selectServant">
      サーヴァントを選択する
    </button>
    <div class="check-servant">
      <img class="img1" :src="servantImg" />
      <div class="servant-name">{{ servantName }}</div>
    </div>
    <div class="list" v-if="flag">
      <div
        v-for="(servant, index) of servantList"
        :key="servant.id"
        class="servant"
      >
        <img class="img2" :src="servant.face" /><br />
        <button type="button" class="check" v-on:click="check(index)">
          選択
        </button>
      </div>
    </div>
    <table border="1" align="center" class="table1">
      <tr>
        <th>ATK</th>
        <th>宝具レベル</th>
      </tr>
      <tr>
        <td>{{ atk }}</td>
        <td>
          <select
            name="servant"
            id="servant"
            v-on:change="calcTreasureLevel"
            v-model="level"
          >
            <option value="1">Lv.1</option>
            <option value="2">Lv.2</option>
            <option value="3">Lv.3</option>
            <option value="4">Lv.4</option>
            <option value="5">Lv.5</option>
          </select>
        </td>
      </tr>
    </table>
    <div class="result">
      <div class="sub">計算結果</div>
      <table border="1" align="center" class="table2">
        <tr>
          <th>最小</th>
          <th>最大</th>
        </tr>
        <tr>
          <td>{{ minAtk }}</td>
          <td>{{ maxAtk }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import { Servant } from "@/types/Servant";
@Component
export default class XXXComponent extends Vue {
  // サーヴァント一覧
  private servantList = Array<Servant>();
  // atk
  private atk = 0;
  // フラッグ
  private flag = false;
  // 選択したサーヴァントの画像
  private servantImg = "";
  // 選択したサーヴァントの名前
  private servantName = "";
  // 最小威力
  private minAtk = 0;
  // 最大威力
  private maxAtk = 0;
  // 宝具レベル
  private level = "1";
  // インデックス
  private initIndex = 0;

  /**
   * 非同期処理.
   * @param Promiseオブジェクト
   */
  async created(): Promise<void> {
    this.$store.dispatch("getServants");
    this.servantList = this.$store.getters.getServants;
  }
  /**
   * フラッグを変更.
   */
  selectServant(): void {
    this.flag = true;
  }
  /**
   * サーヴァントを選択する.
   * @param インデックス
   */
  check(index: number): void {
    this.flag = false;
    this.servantName = this.servantList[index].name;
    this.servantImg = this.servantList[index].face;
    this.atk = this.servantList[index].atkMax;
    this.minAtk = Math.floor(this.servantList[index].atkMax * 1.35);
    this.maxAtk = Math.floor(this.minAtk * 1.22);
    this.initIndex = index;
  }
  /**
   * 宝具レベルごとに威力が変わる機能.
   */
  calcTreasureLevel(): void {
    this.minAtk = Math.floor(this.servantList[this.initIndex].atkMax * 1.35);
    this.maxAtk = Math.floor(this.minAtk * 1.22);
    if (this.level === "2") {
      this.minAtk = Math.floor(this.minAtk * 1.25);
      this.maxAtk = Math.floor(this.minAtk * 1.22);
    } else if (this.level === "3") {
      this.minAtk = Math.floor(this.minAtk * 1.3);
      this.maxAtk = Math.floor(this.minAtk * 1.22);
    } else if (this.level === "4") {
      this.minAtk = Math.floor(this.minAtk * 1.4);
      this.maxAtk = Math.floor(this.minAtk * 1.22);
    } else if (this.level === "5") {
      this.minAtk = Math.floor(this.minAtk * 1.5);
      this.maxAtk = Math.floor(this.minAtk * 1.22);
    } else if (this.level === "1") {
      this.minAtk;
      this.maxAtk;
    }
  }
}
</script>

<style scoped>
.container {
  text-align: center;
}
.result {
  margin-top: 20px;
}
.servant {
  text-align: center;
}
.list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-right: 250px;
  margin-left: 250px;
}
.img1 {
  width: 100px;
  margin-left: 5px;
}
.img2 {
  width: 50px;
  margin-right: 5px;
  margin-left: 3px;
  margin-bottom: 0;
}
table {
  background-color: white;
}
th {
  padding: 10px;
}
td {
  padding: 10px;
}
.select {
  margin-bottom: 20px;
}
.table1 {
  margin-top: 20px;
}
.servant-name {
  font-weight: bold;
}
</style>
