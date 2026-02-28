import { items } from "./config.js";
import { generateItems } from "./itemGenerate.js";
import { createGameState } from "./gameState.js";
import { createUI } from "./ui.js";
import { initItemManager } from "./itemManager.js";
import { initFlashlight } from "./flashlight.js";
import { sound } from "./sounds.js";
import { startTimer, stopTimer, hideTimer, resetTimer } from "./timer.js";
import { calcStars, setStar } from "./star.js";

const room = document.getElementById("room");
const itemsLayer = document.getElementById("itemsLayer");
const overlay = document.getElementById("overlay");
const panel = document.getElementById("panel");
const counter = document.getElementById("counter");
const victoryMess = document.getElementById("victory-mess");
const startScreen = document.getElementById("start-screen");
let counterMiss = document.getElementById("counterMiss");

let currentLevel = null;
let miss = 0;

export function initGame(level, params) {
  currentLevel = level;
  miss = 0;
  resetTimer();

  function gameOver() {
    stopTimer();
    itemsLayer.innerHTML = "";
    startScreen.classList.remove("hidden");
    startScreen.classList.remove("opacity");
    sound.stopMusic();
    sound.playTimeEnd();
    alert("Время вышло!");
  }

  const onMiss = () => {
    miss += 1;
    counterMiss.textContent = miss;
  };

  generateItems(itemsLayer, items, params.itemSize);

  if (params.timeLimit) {
    startTimer(params.timeLimit, gameOver);
  } else {
    hideTimer();
  }

  const gameState = createGameState(items);

  const ui = createUI(panel, counter, victoryMess);
  ui.renderPanel(gameState.getItems());

  const flashlight = initFlashlight(overlay, itemsLayer, room, params.radius);

  const onAllFound = () => {
    const stars = calcStars(miss);
    stopTimer();
    hideTimer();
    ui.showVictory();
    flashlight.disabled();
    sound.playVictory();
    sound.stopMusic();
    setStar(currentLevel, stars);
    window.dispatchEvent(new CustomEvent("starsUpdated"));
    startScreen.classList.remove("hidden");
    startScreen.classList.remove("opacity");
    itemsLayer.innerHTML = "";
  };

  initItemManager(room, gameState, ui, onAllFound, sound, onMiss);
}
