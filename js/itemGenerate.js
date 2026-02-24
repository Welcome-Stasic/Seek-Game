export function generateItems(container, itemsConf) {
  const containerRect = container.getBoundingClientRect();
  const containerWidth = containerRect.width;
  const containerHeight = containerRect.height;

  const item_size = 50;
  const margin = 20;

  itemsConf.forEach((item) => {
    const img = document.createElement("img");
    img.src = item.img;
    img.alt = item.name;
    img.className = "item " + item.id;
    img.dataset.itemId = item.id;

    const maxLeft = containerWidth - item_size - 2 * margin;
    const maxTop = containerHeight - item_size - 2 * margin;
    const left = Math.random() * maxLeft + margin;
    const top = Math.random() * maxTop + margin;

    img.style.position = "absolute";
    img.style.left = left + "px";
    img.style.top = top + "px";
    img.style.width = item_size + "px";
    img.style.height = item_size + "px";

    container.appendChild(img);
  });
}
