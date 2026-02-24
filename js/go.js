import { sound } from "./sounds.js";

document.addEventListener("DOMContentLoaded", () => {
  const startScreen = document.getElementById("start-screen");
  if (!startScreen) return;

  const go = () => {
    sound.startMusic();
    startScreen.classList.add("opacity");
    setTimeout(() => startScreen.classList.add("hidden"), 200);
  };

  startScreen.addEventListener("click", go);
});
