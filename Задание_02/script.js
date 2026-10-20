"use strict";

(() => {
  const table = document.querySelector("#skills-table");
  const button = document.querySelector("#invert-colors");

  if (!table || !button) return;

  button.addEventListener("click", () => {
    const inverted = table.classList.toggle("theme-inverted");
    table.classList.toggle("theme-light", !inverted);
    button.setAttribute("aria-pressed", String(inverted));
    button.textContent = inverted
      ? "Вернуть исходные цвета"
      : "Инвертировать цвета таблицы";
  });
})();
