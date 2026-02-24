const bgMusic = new Audio("../sounds/background.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;

export const sound = {
  playFound: () => {
    const audio = new Audio("../sounds/found.mp3");
    audio.volume = 0.4;
    audio.play();
  },
  playWrong: () => {
    const audio = new Audio("../sounds/wrong.mp3");
    audio.volume = 0.3;
    audio.play();
  },
  playVictory: () => {
    const audio = new Audio("../sounds/victory.mp3");
    audio.volume = 0.5;
    audio.play();
  },
  startMusic: () => bgMusic.play(),
  stopMusic: () => {
    bgMusic.pause();
    bgMusic.currentTime = 0;
  },
};
