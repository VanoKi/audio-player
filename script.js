const player = document.querySelector('.main_container'),
      playBtn = document.querySelector('.play-pause'),
      prevBtn = document.querySelector('.previous'),
      nextBtn = document.querySelector('.forward'),
      audio = document.querySelector('.audio'),
      progressContainer = document.querySelector('.progress__container'),
      progress = document.querySelector('.progress'),
      cover = document.querySelector('.cover'),
      backgr = document.querySelector('.background'),
      title = document.querySelector('.song-title')


const songs = ['beyonce', 'dontstartnow']

let songIndex = 0

function loadSong(song) {
  title.innerHTML = song
  audio.src = `assets/audio/${song}.mp3`
  cover.src = `assets/img/${songIndex}.png`
  backgr.src = `assets/img/${songIndex}.png`
}

loadSong(songs[songIndex])

function playSong() {
  audio.play()
}

function pauseSong() {
  audio.pause()
}

playBtn.addEventListener('click', () => {
  playSong()
})