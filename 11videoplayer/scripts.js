/* get our elements */

const player = document.querySelector(".player");
const video = player.querySelector(".viewer");
const progress = player.querySelector(".progress");
const progressBar = player.querySelector(".progress__filled");
const toggle = player.querySelector(".toggle");
const skipButtons = player.querySelectorAll("[data-skip]");
const ranges = player.querySelectorAll(".player__slider");

/* set up our functions */

function togglePlay() {
  if (video.paused) {
    video.play();
  } else {
    video.pause();
  }
}

function buttonChange() {
  const icon = this.paused ? "►" : "❚ ❚";
  toggle.textContent = icon;

  // code i ccould not get to work
  //     if (this.pause) {
  //         toggle.textContent = '►'
  //     } if (this.play
  // ) {
  //         toggle.textContent = '❚ ❚'

  //     }
}

// i added a spacebar because i like that functionality
document.body.onkeyup = function (e) {
  if (e.keyCode == 32) {
    togglePlay();
  }
};

function sliders() {
    video[this.name] = this.value
    console.log(this.value)
}

function skip() {
  console.log(this.dataset);
  let time = parseFloat(this.dataset.skip) ;
  console.log(time)
  video.currentTime += time;
}

function scrub(e) {
let scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
video.currentTime = scrubTime
console.log(e.offsetX)
}

function handleProgress() {
    // create a decimal for the current time divided by the druation and convert it to apercent
    let progress = (video.currentTime / video.duration) * 100
    console.log(progress)
    progressBar.style.flexBasis = `${progress}%`
}
// icons
// '►' : '❚ ❚';
// add buttons that listen to click on the button and the video, runs toggle play
toggle.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
// add buttons that listen to the status of video, runs buttons changer
video.addEventListener("play", buttonChange);
video.addEventListener("pause", buttonChange);
/* hook up event listeners */
skipButtons.forEach((x) => {
  x.addEventListener("click", skip);
});
ranges.forEach(x => {
    x.addEventListener("change",sliders)
})
// listen to the video for timeupdate to run handlepprogress
video.addEventListener('timeupdate', handleProgress)
progress.addEventListener('click', scrub)
 
// create a flag for mousedown
let mousedown = false
progress.addEventListener('mousemove', () => { if (mousedown == true) {scrub} }
)
// flag continued
progress.addEventListener(
  'mousedown', () => mousedown = true
)
progress.addEventListener(
  'mouseup', () => mousedown = false
)