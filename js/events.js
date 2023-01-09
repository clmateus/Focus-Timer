import { elements } from "./elements.js";

export default function Events({ controls, timer, sound }) {
  elements.buttonPlay.addEventListener("click", function () {
    controls.play();
    timer.countdown();
    sound.pressButton();
  });

  elements.buttonPause.addEventListener("click", function () {
    controls.pause();
    timer.hold();
    sound.pressButton();
  });

  elements.buttonStop.addEventListener("click", function () {
    controls.reset();
    timer.reset();
    sound.pressButton();
  });

  elements.buttonSoundOff.addEventListener("click", function () {
    elements.buttonSoundOn.classList.remove("hide");
    elements.buttonSoundOff.classList.add("hide");
    sound.bgAudio.pause();
  });

  elements.buttonSoundOn.addEventListener("click", function () {
    elements.buttonSoundOn.classList.add("hide");
    elements.buttonSoundOff.classList.remove("hide");
    sound.bgAudio.play();
  });

  elements.buttonSet.addEventListener("click", function () {
    let newMinutes = controls.getMinutes();

    if (!newMinutes) {
      timer.reset();
      return;
    }

    timer.updateDisplay(newMinutes, 0);
    timer.updateMinutes(newMinutes);
  });
}
