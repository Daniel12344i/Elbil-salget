// Dine tidligere data
const data = {
  labels: [
    "Personbiler",
    "Elbiler",
    "Varebiler",
    "Lastebiler",
    "Busser",
    "Traktorer",
    "Kranbiler",
    "Moped",
    "Lett motorsykkel",
    "Tung motorsykkel",
    "Snøscootere",
    "Tilhengere",
  ],
  antall: [
    2917435, 599169, 508674, 68407, 14697, 311945, 5911, 141858, 27612, 156859,
    95934, 1582931,
  ],
  prosentEndring: [
    0.8, 30.0, 0.2, -2.2, -1.2, 1.7, -5.0, -7.9, -12.8, -14.6, -0.1, 1.8,
  ],
  prosentEndring2017: [
    6.5, 331.1, 8.0, -7.3, -8.4, 11.1, -18.5, -17.5, 6.4, 2.8, 9.0, 12.5,
  ],
};

// Filtret data for søylediagram
const filteredData = {
  labels: ["Personbiler", "Elbiler", "Varebiler", "Busser"],
  prosentEndring: data.prosentEndring.slice(0, 4), // Endring i 2022 for de spesifikke kategoriene
  prosentEndring2017: data.prosentEndring2017.slice(0, 4), // Endring 2017 - 2022 for de spesifikke kategoriene
};

// Opprett søylediagram
const ctx = document.getElementById("barChart").getContext("2d");

const columnChart = new Chart(ctx, {
  type: "bar", // Bruk "bar" for søylediagram
  data: {
    labels: filteredData.labels,
    datasets: [
      {
        label: "Endring i 2022",
        data: filteredData.prosentEndring,
        backgroundColor: "#007BFF",
        borderWidth: 1,
      },
      {
        label: "Endring 2017 - 2022",
        data: filteredData.prosentEndring2017,
        backgroundColor: "#00FF7B",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  },
});
