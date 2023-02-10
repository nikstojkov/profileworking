const playAudio = () => {
  const media = new Audio('https://www.televisiontunes.com/uploads/audio/Benny%20Hill%20Show.mp3')
  media.play()
}

let sound = false;
// const audio = new Audio('https://www.televisiontunes.com/uploads/audio/Benny%20Hill%20Show.mp3');

const runaway = (id) => {
  id.style.top = Math.round(Math.random() * 200) + 200 + "px";
  id.style.left = Math.round(Math.random() * 150) + 200 + "px";
  if (sound === false) {
    playAudio()
  }
};
