import { sound } from "./sounds.js";
import { levels } from "./config.js";
import { getStars } from "./star.js";
import { initGame } from "./main.js";

document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  if (!startScreen) return;

  function updateStarDisplay() {
    const starsData = getStars();
    ["easy", "medium", "hard"].forEach((lvl) => {
      const box = document.getElementById(`stars-${lvl}`);
      if (!box) return;
      const starCount = starsData[lvl] || 0;
      box.innerHTML = "";
      for (let i = 0; i < 3; i++) {
        const starDiv = document.createElement("div");
        starDiv.className = `star ${i < starCount ? "gold" : "gray"}`;
        box.appendChild(starDiv);
      }
    });
  }
  document.querySelectorAll(".level-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const level = btn.dataset.level;
      const params = levels[level];
      if (!params) return;

      sound.startMusic();
      startScreen.classList.add("opacity");
      setTimeout(() => startScreen.classList.add("hidden"), 200);
      sound.playGo();

      import("./main.js").then((module) => {
        module.initGame(level, params);
      });
    });
  });

  updateStarDisplay();
  window.addEventListener("starsUpdated", updateStarDisplay);
});
