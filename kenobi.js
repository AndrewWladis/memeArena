const amount = 127;
let currentMeme = 127;
//change this

const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const meme = document.getElementById("meme");
const memeNumHtml = document.getElementById("memeNumber");

updateMeme()

forward.addEventListener("click", nextMeme);
backward.addEventListener("click", backMeme);

function updateMeme() {
    meme.src = `memes/starwars/${currentMeme}.jpeg`;
    memeNumHtml.innerText = currentMeme;
    if (currentMeme >= amount) {
        forward.style.opacity = '0%';
    } else if (currentMeme <= 0){
        backward.style.opacity = '0%';
    } else if (currentMeme != amount && currentMeme != 0) {
        forward.style.opacity = '100%';
        backward.style.opacity = '100%';
    }
}

function nextMeme() {
    currentMeme++
    updateMeme()
}

function backMeme() {
    currentMeme -= 1;
    updateMeme()
}

updateMeme()