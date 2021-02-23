<template>
  <div id="chart"></div>
</template>
<script>
import * as Plotly from "plotly.js-dist";
import sample from "~/modules/sample";
console.log(sample());
export default {
  data() {
    return {
      rows: [],
    };
  },
  methods: {
    async getData() {
      const url =
        "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";
      this.rows = await new Promise((resolve, reject) => {
        Plotly.d3.csv(url, (err, rows) => {
          if (err) {
            reject(err);
          }
          if (rows) {
            resolve(rows);
          }
        });
      });
    },
    unpack(rows, key) {
      return rows.map((row) => row[key]);
    },
    async plot() {
      const trace1 = {
        type: "scatter",
        mode: "lines",
        name: "AAPL High",
        x: this.unpack(this.rows, "Date"),
        y: this.unpack(this.rows, "AAPL.High"),
        line: { color: "#17BECF" },
      };

      const trace2 = {
        type: "scatter",
        mode: "lines",
        name: "AAPL Low",
        x: this.unpack(this.rows, "Date"),
        y: this.unpack(this.rows, "AAPL.Low"),
        line: { color: "#7F7F7F" },
      };

      const trace3 = {
        type: "scatter",
        mode: "lines",
        name: "AAPL close",
        x: this.unpack(this.rows, "Date"),
        y: this.unpack(this.rows, "AAPL.Close"),
        line: { color: "#000000" },
      };

      const data = [trace1, trace2, trace3];

      const layout = {
        title: "Basic Time Series",
      };

      Plotly.newPlot("chart", data, layout);
    },
  },
  watch: {
    rows: function () {
      this.plot();
    },
  },
  mounted() {
    this.getData();
  },
};
</script>