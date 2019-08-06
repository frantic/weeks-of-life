const birthday = new Date(1989, 1, 14);

function main() {
  const weeksOld = Math.ceil(
    (Date.now() - birthday) / (7 * 24 * 60 * 60 * 1000)
  );
  console.log({ weeksOld });
  const table = document.createElement("div");
  table.className = "calendar";
  for (let year = 0; year < 75; year++) {
    const row = document.createElement("div");
    row.className = "year";
    const label = document.createElement("div");
    label.className = "age";
    if (year % 5 === 0) {
      label.innerText = year;
    }
    row.appendChild(label);
    for (let week = 0; week < 52; week++) {
      const cell = document.createElement("div");
      cell.className = "week";
      if (weeksOld === year * 52 + week) {
        cell.className = "week now";
      } else if (weeksOld > year * 52 + week) {
        cell.className = "week gone";
      }
      row.appendChild(cell);
    }
    table.appendChild(row);
  }
  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", event => {
  main();
});
