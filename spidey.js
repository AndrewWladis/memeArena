let currentMeme = 37;
//change this

const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const meme = document.getElementById("meme");
const memeNumHtml = document.getElementById("memeNumber");

updateMeme()

forward.addEventListener("click", nextMeme);
backward.addEventListener("click", backMeme);

function updateMeme() {
    meme.src = `memes/spiderman/${currentMeme}.jpeg`;
    memeNumHtml.innerText = currentMeme;
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