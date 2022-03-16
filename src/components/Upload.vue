<template>
  <div></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {}
</script>

<style scoped>
.image-preview {
  width: 250px;
  height: 250px;
  /* 画像の縦横比を維持したまま表示ができるプロパティ */
  object-fit: cover;
}
</style>

// // 今回はJSで記述 // export default { // data() { // return { // url: "", //
}; // }, // methods: { // show() { // const file = this.$refs.preview.files[0];
// console.log(this.$refs.preview.files[0]); // this.url =
URL.createObjectURL(file); // }, // }, // };
