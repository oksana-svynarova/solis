const video = document.querySelector(".video"),
      playBtn = document.querySelector(".play-btn"),
      playBtnImg = document.querySelector(".play-btn__img"),
      pauseBtnImg = document.querySelector(".pause-btn__img");

function toggleVideoStatus() {
  if (video.paused) {
    video.play()
    playBtnImg.classList.add("hidden");
    pauseBtnImg.classList.remove("hidden");
  } else {
    video.pause()
    playBtnImg.classList.remove("hidden");
    pauseBtnImg.classList.add("hidden");
  }
}

playBtn.addEventListener("click", toggleVideoStatus);
video.addEventListener("click", toggleVideoStatus);

video.addEventListener("ended", () => {
  video.currentTime = 0;
  video.play();
});