<template>
  <div>
    <graph v-bind:rows="rows" graph-id="chart"></graph>
    <graph v-bind:rows="rows" graph-id="chart2"></graph>
  </div>
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