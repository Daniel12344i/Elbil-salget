const timeline = document.getElementById("timeline");

const events = [
  {
    year: 1948,
    text: "Opprettelsen av staten Israel",
    image: "isra.jpg",
  },
  {
    year: 1967,
    text: "Seksdagerskrigen",
    image: "six_day_war.jpg",
  },
  {
    year: 2000,
    text: "Den andre intifadaen",
    image: "second_intifada.jpg",
  },
  {
    year: 2005,
    text: "Trekking av israelske bosettere fra Gaza",
    image: "gaza_withdrawal.jpg",
  },
  {
    year: 2020,
    text: "Utviklinger i Israel-Palestina-konflikten",
    image: "current_situation.jpg",
  },
];

events.forEach((event) => {
  const item = document.createElement("div");
  item.className = "timeline-item";
  item.innerHTML = `
        <h3>${event.year}</h3>
        <p>${event.text}</p>
        <img src="${event.image}" alt="${event.text}">
    `;
  timeline.appendChild(item);
});
