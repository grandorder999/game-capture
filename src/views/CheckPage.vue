<template>
  <div class="sample">
    <h2>所持サーヴァントチェッカー</h2>
    <div class="container">
      <div class="servants">
        <div v-for="servant of currentServants" :key="servant.id">
          <img :src="servant.face" /><br />
          <CheckPageButton
            servant-id="servant.id"
            v-on:change-button-text="onChange"
          ></CheckPageButton>
        </div>
        <table border="1" width="250">
          <tr>
            <td>現在の所持数</td>
            <td>
              <span class="red">{{ possession }}</span
              >/336
            </td>
          </tr>
          <tr>
            <td>現在コンプリート率</td>
            <td>
              <span class="blue">{{ complete.toFixed(digit) }}</span
              >%
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Servant } from "@/types/Servant";
import { Component, Vue } from "vue-property-decorator";
import CheckPageButton from "@/components/CheckPageButton.vue";
@Component({
  components: {
    CheckPageButton,
  },
})
export default class XXXComponent extends Vue {
  private currentServants: Array<Servant> = [];
  private possession = 0;
  private complete = 0;
  private digit = 1;

  async created(): Promise<void> {
    await this.$store.dispatch("getServants");
    this.currentServants = this.$store.getters.getServants;
  }

  onChange(flag: boolean): void {
    if (flag) {
      this.possession++;
      this.calcRate(this.possession);
    } else {
      this.possession--;
      this.calcRate(this.possession);
    }
  }

  calcRate(possession: number): void {
    this.complete = (possession / 336) * 100;
  }
}
</script>

<style scoped>
h2 {
  text-align: center;
}
.container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}
.servants {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 50%;
}
img {
  width: 50px;
  margin-right: 5px;
  margin-left: 3px;
}
button {
  margin-bottom: 5px;
  margin-right: 5px;
}
table {
  margin-top: 15px;
  background-color: white;
}
.red {
  color: red;
}
.blue {
  color: blue;
}
</style>
