const musicContainer = document.getElementById("music-container")
const prevBtn = document.getElementById("prev")
const playBtn = document.getElementById("play")
const nextBtn = document.getElementById("forward")
const audio = document.getElementById("audio")
const progress = document.getElementById("progress")
const progressContainer = document.getElementById("progress-container")
const title = document.getElementById("title")
const cover = document.getElementById("cover")
const text = document.getElementById("text")


// Song titles (rename as the song name)
const songs = ['Again', 'Gidi', 'Ololufe', 'Baby']

// Keep track of songs
let songIndex = 1


// Initiall load song info DOM
loadSong(songs[songIndex])


// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = `media/${song}.mp3`
    cover.src = `media/images/${song}.jpg`
    text.innerText = song
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');
    

    audio.play()
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');

    audio.pause()
}

function prevSong() {
    songIndex--  // decreases by 1

    if(songIndex < 0) {
        songIndex = songs.length - 1
    }

    loadSong(songs[songIndex])

    playSong()
}

function nextSong() {
    songIndex++  // increases by 1
    if(songIndex > songs.length  -  1) {
        songIndex = 0
    }

    loadSong(songs[songIndex])

    playSong()

}

function updateProgress(e) {
    // console.log(e.srcElement.duration)
    const {duration, currentTime} = e.srcElement;
    const progressPercent = (currentTime/ duration) * 100
    progress.style.width = `${progressPercent}%`
}

function setProgress(e) {
    const width = this.clientWidth
    // console.log(width)
    const clickX = e.offsetX
    // console.log(clickX)
    const duration = audio.duration

    audio.currentTime = (clickX / width )  * duration
}

// Event Listners
playBtn.addEventListener("click", function(){
    const isPlaying = musicContainer.classList.contains('play');

    
    if(isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
})


// Change song events
prevBtn.addEventListener("click", prevSong);
nextBtn.addEventListener("click", nextSong);

audio.addEventListener("timeupdate", updateProgress)

progressContainer.addEventListener("click", setProgress)

audio.addEventListener("ended", nextSong)