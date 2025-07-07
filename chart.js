const chart = document.getElementById("myChart")
const myChart = new Chart(chart, {
  type: "doughnut",
  data: {
    labels: ["correct", "wrong"],
    datasets: [
      {
        label: "Risposte",
        data: [75, 25],
      },
    ],
  },
})
