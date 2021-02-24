<template>
  <div id="chart"></div>
</template>
<script>
import plotUtil from "~/modules/plotUtil";
export default {
  props: ["rows"],
  watch: {
    rows: function () {
      console.log("graph" + this.rows);
      plotUtil.plot(this.rows);
    },
    deep: true,
  },
};
</script>