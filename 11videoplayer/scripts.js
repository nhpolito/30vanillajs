/* get our elements */

const player = document.querySelector('.player')

const play = player.querySelector('.viewer')

/* set up our functions */

function togglePlay() {
    if (video.paused) {
        video.play()
    } else {
        video.pause()
    }
}

/* hook up event listeners */