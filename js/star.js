import { STORAGE_KEY } from "./constants.js";

export function getStars() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : {};
}
export function setStar(level, stars) {
  const all = getStars();
  all[level] = stars;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
}
export function calcStars(miss) {
  if (miss === 0) {
    return 3;
  }
  if (miss <= 5) {
    return 2;
  }
  return 1;
}
