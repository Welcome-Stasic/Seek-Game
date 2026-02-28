const bgMusic = new Audio("sounds/background.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.1;

export const sound = {
  playFound: () => {
    const audio = new Audio("sounds/found.mp3");
    audio.volume = 0.1;
    audio.play();
  },
  playGo: () => {
    const audio = new Audio("sounds/go.mp3");
    audio.volume = 0.3;
    audio.play();
  },
  playTimeEnd: () => {
    const audio = new Audio("sounds/timeEnd.mp3");
    audio.volume = 0.1;
    audio.play();
  },
  playWrong: () => {
    const audio = new Audio("sounds/wrong.mp3");
    audio.volume = 0.1;
    audio.play();
  },
  playVictory: () => {
    const audio = new Audio("sounds/victory.mp3");
    audio.volume = 0.1;
    audio.play();
  },
  startMusic: () => bgMusic.play(),
  stopMusic: () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  },
};
