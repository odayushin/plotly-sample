<template>
  <graph v-bind:rows="rows"></graph>
</template>
<script>
import plotUtil from "~/modules/plotUtil";
export default {
  data() {
    return {
      rows: [],
    };
  },
  async mounted() {
    this.rows = await plotUtil.getData();
  },
};
</script>