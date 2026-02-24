export function createUI(panel, counter, victoryMessElem) {
  let totalItems = 0;

  function renderPanel(items) {
    totalItems = items.length;
    panel.innerHTML = "";

    items.forEach((item) => {
      const img = document.createElement("img");
      const li = document.createElement("li");
      img.src = item.img;
      img.alt = item.name;
      img.style.width = "50px";
      img.style.height = "50px";
      img.style.objectFit = "contain";
      li.dataset.id = item.id;
      const text = document.createTextNode(item.name);

      li.appendChild(img);
      li.appendChild(text);
      if (item.found) {
        li.className.add("found");
      }
      panel.appendChild(li);
    });
    updateCounter(0);
  }

  function markFound(id) {
    const li = panel.querySelector(`[data-id="${id}"]`);
    if (li) {
      li.classList.add("found");
    }
  }
  function flashItem(id) {
    const li = panel.querySelector(`[data-id="${id}"]`);
    if (li) {
      li.classList.add("flash");
      setTimeout(() => li.classList.remove("flash"), 600);
    }
  }
  function updateCounter(foundCount) {
    counter.textContent = foundCount + "/" + totalItems;
  }

  function showVictory() {
    counter.classList.add("hidden");
    victoryMessElem.classList.remove("hidden");
  }

  return {
    renderPanel,
    markFound,
    updateCounter,
    showVictory,
    flashItem,
  };
}
