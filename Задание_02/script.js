"use strict";

const table = document.querySelector("#profile-table");
const button = document.querySelector("#invert-colors");

button.addEventListener("click", () => {
  const inverted = table.classList.toggle("colors-inverted");
  button.setAttribute("aria-pressed", String(inverted));
});
