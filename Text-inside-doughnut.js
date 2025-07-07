const ctx = document.getElementById("myChart").getContext("2d")
const myChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Risposte giuste", "Risposte sbagliate"],
    datasets: [
      {
        label: "Risposte",
        data: [75, 25],
        backgroundColor: ["rgba(0, 255, 0, 0.2)", "rgba(255, 0, 0, 0.2)"],
        borderColor: ["rgba(0, 255, 0, 1)", "rgba(255, 0, 0, 1)"],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "80%",
    plugins: {
      legend: {
        display: false,
      },
    },
  },
  plugins: [
    {
      id: "centerText",
      afterDraw: function (chart) {
        const ctx = chart.ctx
        ctx.save()
        const text =
          "Questo è un testo molto lungo che deve andare a capo automaticamente eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeeeeeeeeeeeee eeeeeeeeeeeeeeee"
        const maxWidth = chart.canvas.width * 0.6 // larghezza massima del testo
        const fontSize = 16 // dimensione del font
        // ctx.font = ${fontSize}px Arial;
        ctx.textAlign = "center"
        ctx.textBaseline = "middle"
        const lines = []
        let line = ""
        const words = text.split(" ")
        for (let i = 0; i < words.length; i++) {
          const word = words[i]
          if (ctx.measureText(line + " " + word).width > maxWidth) {
            lines.push(line)
            line = word
          } else {
            line += (line === "" ? "" : " ") + word
          }
        }
        lines.push(line)
        const x = chart.canvas.width / 2
        let y = chart.canvas.height / 2 - (lines.length * fontSize) / 2
        for (let i = 0; i < lines.length; i++) {
          ctx.fillText(lines[i], x, y)
          y += fontSize
        }
        ctx.restore()
      },
    },
  ],
})
