import { MARGIN } from "./constants.js";
export function generateItems(container, itemsConf, itemSize = 50) {
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;

  itemsConf.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.className = "item " + item.id;
    img.dataset.itemId = item.id;

    const maxLeft = containerWidth - itemSize - 2 * MARGIN;
    const maxTop = containerHeight - itemSize - 2 * MARGIN;
    const left = Math.random() * maxLeft + MARGIN;
    const top = Math.random() * maxTop + MARGIN;

    img.style.position = "absolute";
    img.style.left = left + "px";
    img.style.top = top + "px";
    img.style.width = itemSize + "px";
    img.style.height = itemSize + "px";

    container.appendChild(img);
  });
}
