import { Chart, LinearScale, PointElement } from 'chart.js';
import { ForceDirectedGraphController, EdgeLine } from 'chartjs-chart-graph';
import { ForceDirectedGraphChart } from 'chartjs-chart-graph';


const data = `https://raw.githubusercontent.com/sgratzl/chartjs-chart-graph/master/samples/tree.json`;

function createChart(nodes, id, type, orientation) {
  return Chart(document.getElementById(id).getContext("2d"), {
    type,
    data: {
      labels: nodes.map((d) => d.name),
      datasets: [
        {
          pointBackgroundColor: "steelblue",
          pointRadius: 5,
          data: nodes.map((d) => Object.assign({}, d)),
        },
      ],
    },
    options: {
      dragData: true,
      dragX: true,
      tree: {
        orientation,
      },
      layout: {
        padding: {
          top: 5,
          left: 5,
          right: 40,
          bottom: 20,
        },
      },
      plugins: {
        legend: {
          display: false,
        },
        datalabels: {
          align: orientation === "vertical" ? "bottom" : "right",
          offset: 6,
          backgroundColor: "white",
          formatter: (v) => {
            return v.name;
          },
        },
      },
    },
  });
}

fetch(data)
  .then((r) => r.json())
  .then((nodes) => {
    createChart(nodes, "dh", "dendogram", "horizontal");
});

export default Map;
