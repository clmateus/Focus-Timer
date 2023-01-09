import Controls from "./controls.js";
import Timer from "./timer.js";
import { elements } from "./elements.js";
import Sound from "./sounds.js";
import Events from "./events.js";

const {
  buttonPlay,
  buttonPause,
  buttonSet,
  buttonStop,
  buttonSoundOff,
  buttonSoundOn,
  minutesDisplay,
  secondsDisplay,
} = elements;

const controls = Controls({
  buttonPause,
  buttonPlay,
  buttonSet,
  buttonStop,
});

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  resetControls: controls.reset,
});

const sound = Sound();

const events = Events({
  controls,
  timer,
  sound,
});
