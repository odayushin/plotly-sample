<template>
  <div v-bind:id="graphId"></div>
</template>
<script>
import plotUtil from "~/modules/plotUtil";
export default {
  props: ["rows", "graphId"],
  watch: {
    rows: function () {
      console.log("graph" + this.rows);
      plotUtil.plot(this.rows, this.graphId);
    },
    deep: true,
  },
};
</script>