<template>
  <div class="twitter-widget" style="width: 400px">
    <v-timeline
      :id="twitterId"
      :source-type="'profile'"
      :options="{ height: twitterHeight }"
    />
  </div>
</template>

<script>
import { Tweet, Moment, Timeline } from "vue-tweet-embed";

export default {
  components: {
    "v-timeline": Timeline,
  },
  data() {
    return {
      twitterId: "appmediafgo",
      twitterHeight: "400",
    };
  },
};
</script>
