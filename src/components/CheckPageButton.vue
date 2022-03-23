<template>
  <div class="container">
    <button value="未取得" type="button" v-if="!flag" v-on:click="preClick">
      未取得
    </button>
    <button
      class="button2"
      value="取得済"
      type="button"
      v-else
      v-on:click="preClick"
    >
      取得済
    </button>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  @Prop()
  private servantId!: number;

  private flag = false;

  @Emit()
  changeButtonText(flag: boolean): void {
    console.log(flag);
  }
  preClick(): void {
    if (this.flag === false) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    this.changeButtonText(this.flag);
  }
}
</script>

<style scoped>
button {
  margin-bottom: 5px;
}
.button2 {
  background-color: bisque;
  color: crimson;
}
</style>
