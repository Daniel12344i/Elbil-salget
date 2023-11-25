var ctx = document.getElementById("elbilChart").getContext("2d");
var elbilChart = new Chart(ctx, {
  type: "bar",
  data: {
    labels: ["2019", "2020", "2021", "2022"],
    datasets: [
      {
        label: "Antall elbiler",
        data: [60246, 76791, 113715, 138283],
        backgroundColor: ["#007BFF", "#007BFF", "#007BFF", "#007BFF"],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
