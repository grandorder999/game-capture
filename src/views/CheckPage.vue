<template>
  <div class="container">
    <div v-for="servant of currentServants" :key="servant.id">
      <div>{{ servant.name }}</div>
      <img :src="servant.face" />
    </div>
  </div>
</template>

<script lang="ts">
import { Servant } from "@/types/Servant";
import { Component, Vue } from "vue-property-decorator";
@Component
export default class XXXComponent extends Vue {
  private currentServants: Array<Servant> = [];

  async created(): Promise<void> {
    await this.$store.dispatch("getServants");
    this.currentServants = this.$store.getters.getServants;
  }
}
</script>

<style scoped></style>
