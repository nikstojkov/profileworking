let sound = false;
const audio = new Audio('/Benny.mp3');

const runaway = (id) => {
  id.style.top = Math.round(Math.random() * 200) + 200 + "px";
  id.style.left = Math.round(Math.random() * 150) + 200 + "px";
  if (sound === false) {
    audio.play();
    sound = true;
  }
};
