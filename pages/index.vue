<template>
  <div>
    <graph v-bind:rows="rows" graph-id="chart"></graph>
    <graph v-bind:rows="rows" graph-id="chart2"></graph>
    <button id="download" v-on:click="downloadImage">Download Image</button>
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
    downloadImage() {
      plotUtil.downloadImage("chart");
    },
  },
  async mounted() {
    this.rows = await plotUtil.getData();
  },
};
</script>