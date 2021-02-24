<template>
  <div id="chart"></div>
</template>
<script>
import plotUtil from "~/modules/plotUtil";
export default {
  data() {
    return {
      rows: [],
    };
  },
  watch: {
    rows: function () {
      plotUtil.plot(this.rows);
    },
  },
  async mounted() {
    this.rows = await plotUtil.getData();
  },
};
</script>