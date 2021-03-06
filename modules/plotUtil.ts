const Plotly = require("plotly.js-dist");
// import Plotly from "plotly.js-dist";
export default {
    async getData() {
        const url = "https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv";
        return await new Promise((resolve, reject) => {
            Plotly.d3.csv(url, (err: Error, rows: []) => {
                if (err) { reject(err) }
                if (rows) { resolve(rows) }
            });
        });
    },
    unpack(rows: [], key: string) {
        return rows.map((row) => row[key]);
    },
    async plot(rows: [], id: string) {
        const trace1 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL High",
            x: this.unpack(rows, "Date"),
            y: this.unpack(rows, "AAPL.High"),
            line: { color: "#17BECF" },
        };

        const trace2 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL Low",
            x: this.unpack(rows, "Date"),
            y: this.unpack(rows, "AAPL.Low"),
            line: { color: "#7F7F7F" },
        };

        const trace3 = {
            type: "scatter",
            mode: "lines",
            name: "AAPL close",
            x: this.unpack(rows, "Date"),
            y: this.unpack(rows, "AAPL.Close"),
            line: { color: "#000000" },
        };

        const data = [trace1, trace2, trace3];

        const layout = {
            title: "Basic Time Series",
        };

        Plotly.newPlot(id, data, layout);
    },
    downloadImage(id: string) {
        Plotly.downloadImage(id, {})
    }
}
