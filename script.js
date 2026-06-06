const songs = [
    { name: "Ve Kamleya", singer: "Arijit Singh", src: "assets/audio/audio.mp3/VE KAMLEYA - ARIJIT SINGH &  SHREYA GOSHAL ( Lyrics )  Lyrical 7.mp3", img: "assets/images/vekam.png"},
    { name: "Tum Hi Ho", singer: "Arijit Singh", src: "assets/audio/audio.mp3/Meri Aashiqui Ab Tum Hi Ho Full Song (Lyrics) - Arijit Singh  Lyrics Tube.mp3", img: "assets/images/tumhiho.png"},
    { name: "Kesariya", singer: "Arijit Singh", src: "assets/audio/audio.mp3/Kesariya (Lyrics) Full Song - Brahmastra  Arijit Singh  Kesariya Tera Ishq Hai Piya.mp3", img: "assets/images/kesa.png"}
];

let currentSongIndex = 0;
const audio = new Audio(songs[currentSongIndex].src);
const playPauseBtn = document.getElementById("play-pause");
const prevBtn = document.getElementById("prev-img");
const nextBtn = document.getElementById("next-img");
const volumeControl = document.getElementById("volume-range");
const songName = document.getElementById("song-name");
const songSinger = document.getElementById("song-singer");
const songImage = document.querySelector(".song-image");
const songDuration = document.getElementById("song-duration");

function loadSong(index) {
    console.log(`Loading song: ${songs[index].name}`); 
    audio.src = songs[index].src;
    songName.textContent = songs[index].name;
    songSinger.textContent = songs[index].singer;
    
    // Check if image path is correct
    console.log(`Image URL: ${songs[index].img}`);
    
    songImage.style.backgroundImage = `url(${songs[index].img})`;
    audio.load();
}

playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.src = "assets/icons/pause.svg"; 
    } else {
        audio.pause();
        playPauseBtn.src = "assets/icons/play.svg"; 
    }
});

prevBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.src = "assets/icons/pause.svg"; 
});

nextBtn.addEventListener("click", () => {
    currentSongIndex = (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    audio.play();
    playPauseBtn.src = "assets/icons/pause.svg"; 
});

volumeControl.addEventListener("input", (e) => {
    audio.volume = e.target.value / 100;
});

audio.addEventListener("timeupdate", () => {
    songDuration.value = (audio.currentTime / audio.duration) * 100;
});

songDuration.addEventListener("input", (e) => {
    audio.currentTime = (e.target.value / 100) * audio.duration;
});

loadSong(currentSongIndex); 
