<template>
  <div>
    <div>
      <input type="file" ref="preview" v-on:change="show" />
    </div>
    <div class="preview-box" v-if="url">
      <img class="image-preview" v-bind:src="url" />
    </div>
  </div>
</template>

<script>
// 今回はJSで記述
export default {
  data() {
    return {
      url: "",
    };
  },
  methods: {
    show() {
      const file = this.$refs.preview.files[0];
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>

<style scoped>
.image-preview {
  width: 250px;
  height: 250px;
  /* 画像の縦横比を維持したまま表示ができるプロパティ */
  object-fit: cover;
}
</style>
