<template>
  <div>
    <graph v-bind:rows="rows" graph-id="chart"></graph>
    <graph v-bind:rows="rows" graph-id="chart2"></graph>
    <button id="download" v-on:click="toImage">Download Image</button>
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
  methods: {
    toImage() {
      console.log("toImage呼ばれました");
      plotUtil.downloadImage("chart");
    },
  },
  async mounted() {
    this.rows = await plotUtil.getData();
  },
};
</script>