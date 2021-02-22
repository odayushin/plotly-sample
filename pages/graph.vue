<template>
  <no-ssr>
    <div id="chart"></div>
  </no-ssr>
</template>
<script>
import * as Plotly from "plotly.js-dist";
export default {
  data() {
    return {
      graphData: {},
    };
  },
  methods: {
    plot() {
      Plotly.d3.csv(
        "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv",
        function (err, rows) {
          function unpack(rows, key) {
            return rows.map(function (row) {
              return row[key];
            });
          }

          const trace1 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL High",
            x: unpack(rows, "Date"),
            y: unpack(rows, "AAPL.High"),
            line: { color: "#17BECF" },
          };

          const trace2 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL Low",
            x: unpack(rows, "Date"),
            y: unpack(rows, "AAPL.Low"),
            line: { color: "#7F7F7F" },
          };

          const trace3 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL close",
            x: unpack(rows, "Date"),
            y: unpack(rows, "AAPL.Close"),
            line: { color: "#000000" },
          };

          const data = [trace1, trace2, trace3];

          const layout = {
            title: "Basic Time Series",
          };

          Plotly.newPlot("chart", data, layout);
        }
      );
    },
  },
  mounted() {
    this.plot();
  },
};
</script>