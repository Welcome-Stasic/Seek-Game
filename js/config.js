export const items = [
  { id: "1", name: "Ключ", img: "img/items/key.png" },
  { id: "2", name: "Часы", img: "img/items/clock.png" },
  { id: "3", name: "Книга", img: "img/items/book.png" },
  { id: "4", name: "Кольцо", img: "img/items/ring.png" },
  { id: "5", name: "Зеркало", img: "img/items/mirror.png" },
];
export const levels = {
  easy: {
    name: "Лёгкий",
    itemSize: 200,
    timeLimit: null,
    bg_img: "../img/background1.webp",
    radius: 200,
  },
  medium: {
    name: "Средний",
    itemSize: 100,
    timeLimit: 120,
    bg_img: "../img/background2.jpg",
    radius: 160,
  },
  hard: {
    name: "Сложный",
    itemSize: 50,
    timeLimit: 60,
    bg_img: "../img/background3.jpg",
    radius: 130,
  },
};
