<template>
  <div class="container">
    <button
      value="未取得"
      type="button"
      v-if="!flag"
      v-on:click="changeButtonText"
    >
      未取得
    </button>
    <button
      value="取得済"
      type="button"
      v-if="flag"
      v-on:click="changeButtonText"
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
    if (this.flag) {
      this.flag = true;
    } else {
      this.flag = false;
    }
    // this.changeButtonText(this.flag);
  }
}
</script>

<style scoped></style>
