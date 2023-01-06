function resetControls() {
  if (buttonPause.classList != "hide") {
    buttonPause.classList.add("hide");
    buttonPlay.classList.remove("hide");
  }
  buttonStop.classList.add("hide");
  buttonSet.classList.remove("hide");
}

export default resetControls