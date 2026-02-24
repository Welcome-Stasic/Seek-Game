export function initItemManager(roomElem, gameState, ui, onAllFound, sound) {
  roomElem.addEventListener("click", (e) => {
    const itemElem = e.target.closest(".item");
    if (!itemElem) {
      sound.playWrong();
      return;
    }

    const itemId = itemElem.dataset.itemId;
    if (!itemId) {
      sound.playWrong();
      return;
    }

    if (itemElem.classList.contains("found")) {
      sound.playWrong();
      return;
    }

    if (gameState.itemFound(itemId)) {
      const allFound = gameState.allCheckFound();
      if (!allFound) {
        sound.playFound();
      }
      itemElem.classList.add("found", "flash");
      ui.flashItem(itemId);
      ui.markFound(itemId);
      ui.updateCounter(gameState.getItemFound());

      if (allFound) {
        onAllFound();
      }
    }
  });
}
