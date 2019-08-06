function main(birthday, maxAge) {
  const weeksOld = Math.ceil(
    (Date.now() - birthday) / (7 * 24 * 60 * 60 * 1000)
  );
  const table = document.createElement("div");
  table.className = "calendar";
  for (let year = 0; year < maxAge; year++) {
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

document.addEventListener("DOMContentLoaded", () => {
  const [_, date, maxAge] = location.pathname.split("/");
  console.log({ date, maxAge });
  main(new Date(date), Number(maxAge));
});
