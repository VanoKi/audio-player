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
      artist = document.querySelector('.song-artist')


const songs = ['beyonce', 'dontstartnow'],
      dict = {'beyonce' : ['Beyonce', 'Don`t Hurt Yourself'], 
              'dontstartnow': ['Dua Lipa','Don`t start now']}  
let songIndex = 0

function loadSong(song) {
  title.innerHTML = dict[song][1]
  artist.innerHTML = dict[song][0]
  audio.src = `assets/audio/${song}.mp3`
  cover.src = `assets/img/${songIndex}.png`
  // backgr.src = `assets/img/${songIndex}.png`
}

loadSong(songs[songIndex])

function playSong() {
  player.classList.add('play')
  playBtn.src = 'assets/svg/pause.png'
  audio.play()
}

function pauseSong() {
  player.classList.remove('play')
  playBtn.src = 'assets/svg/play.png'
  audio.pause()
}

playBtn.addEventListener('click', () => {
  const isPlay = player.classList.contains('play')
  if (isPlay) {
    pauseSong()
  } else {
    playSong()
  }
})

function nextSong(){
  songIndex++
  if (songIndex > songs.length - 1) {
    songIndex = 0
  }
  loadSong(songs[songIndex])
  playSong()
}

nextBtn.addEventListener('click', nextSong)

function prevSong(){
  songIndex--
  if (songIndex > 0) {
    songIndex = songs.length - 1
  }
  loadSong(songs[songIndex])
  playSong()
}

prevBtn.addEventListener('click', prevSong)

function updateProgress(e){
  const {duration, currentTime} = e.srcElement
  // console.log(duration)
  // console.log(currentTime)
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

audio.addEventListener('timeupdate', updateProgress)