export function initFlashlight(
  overlayElem,
  itemsLayer,
  roomElem,
  radius = 130,
) {
  let targetX = 0,
    targetY = 0;
  let currentX = 0,
    currentY = 0;
  let animationFrame = null;

  function update() {
    currentX += (targetX - currentX) * 0.3;
    currentY += (targetY - currentY) * 0.3;

    overlayElem.style.background = `radial-gradient(circle at ${currentX}px ${currentY}px,
      transparent 0px,
      transparent ${radius * 0.7}px,
      rgba(0,0,0,0.2) ${radius * 0.8}px,
      rgba(0,0,0,0.7) ${radius}px,
      rgba(0,0,0,0.85) ${radius * 1.2}px)`;
    itemsLayer.style.clipPath = `circle(${radius}px at ${currentX}px ${currentY}px)`;

    if (
      Math.abs(currentX - targetX) > 0.5 ||
      Math.abs(currentY - targetY) > 0.5
    ) {
      animationFrame = requestAnimationFrame(update);
    } else {
      animationFrame = null;
    }
  }

  function onMouseMove(e) {
    const rect = roomElem.getBoundingClientRect();
    targetX = e.clientX - rect.left;
    targetY = e.clientY - rect.top;

    if (!animationFrame) {
      if (currentX === 0 && currentY === 0) {
        currentX = targetX;
        currentY = targetY;
        update();
      }
      animationFrame = requestAnimationFrame(update);
    }
  }

  const rect = roomElem.getBoundingClientRect();
  targetX = currentX - rect.width / 2;
  targetY = currentY = rect.height / 2;
  update();

  roomElem.addEventListener("mousemove", onMouseMove);

  function disabled() {
    roomElem.removeEventListener("mousemove", onMouseMove);
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
      animationFrame = null;
    }
    overlayElem.style.background = "none";
    itemsLayer.style.clipPath = "none";
  }
  return { disabled };
}
