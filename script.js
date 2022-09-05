//Variable Declarations
let audio = document.getElementById('player');
let progress = document.getElementById('progBar');
let muted = false;
let composer = true;

//Audio playback functions

function audioPlay() {
    document.getElementById("player").play();
};

function audioPause() {
    document.getElementById("player").pause();
};

function audioVolumePlus() {
    document.getElementById("player").volume += 0.1;
    document.getElementById("player").volume = 1;
    document.getElementById("muteIcon").style.display = "none";
    document.getElementById("soundIcon").style.display = "";
    muted = false;
};

function audioVolumeMinus() {
    document.getElementById("player").volume -= 0.1;
};

function audioMute() {
    if (muted) {
        document.getElementById("player").volume = 1;
        document.getElementById("muteIcon").style.display = "none";
        document.getElementById("soundIcon").style.display = "";
        muted = false;
    } else {
        document.getElementById("player").volume = 0;
        document.getElementById("soundIcon").style.display = "none";
        document.getElementById("muteIcon").style.display = "";
        muted = true;
    }
};

//progressbar functions

audio.addEventListener('timeupdate', function(event) {
    progress.style.width = ((audio.currentTime / audio.duration) * 100) + '%';
    console.log(progress.style.width)
})

// header button function

function careerToggle() {
    if (composer) {
        document.getElementById("composer").innerText = "Composer";
        composer = false;
    } else {
        document.getElementById("composer").innerText = "Developer";
        composer = true;
    }
};


