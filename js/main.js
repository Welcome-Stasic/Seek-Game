import { items } from "./config.js";
import { generateItems } from "./itemGenerate.js";
import { createGameState } from "./gameState.js";
import { createUI } from "./ui.js";
import { initItemManager } from "./itemManager.js";
import { initFlashlight } from "./flashlight.js";
import { sound } from "./sounds.js";

const room = document.getElementById("room");
const itemsLayer = document.getElementById("itemsLayer");
const overlay = document.getElementById("overlay");
const panel = document.getElementById("panel");
const counter = document.getElementById("counter");
const victoryMess = document.getElementById("victory-mess");

function initGame() {
  generateItems(itemsLayer, items);

  const gameState = createGameState(items);

  const ui = createUI(panel, counter, victoryMess);
  ui.renderPanel(gameState.getItems());

  const flashlight = initFlashlight(overlay, itemsLayer, room, 130);

  const onAllFound = () => {
    ui.showVictory();
    flashlight.disabled();
    sound.playVictory();
    sound.stopMusic();
  };

  initItemManager(room, gameState, ui, onAllFound, sound);
}

window.addEventListener("load", initGame);
