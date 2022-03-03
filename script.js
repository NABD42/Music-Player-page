const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('#progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = ('Focus', 'Ultra', 'Reda Part.2', 'Acto de Calma', 'Intro 9', 'GP', 'Reda Part.3', 'Aguantando')

// Keep track of songs
let songIndex = 0

// Init load song info DOM
loadSong(songs[songIndex])


// Update song details
function loadSong(song) {
    title.innerText = song

}