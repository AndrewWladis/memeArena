const amount = 538;
let currentMeme = 538;
//change this

const forward = document.getElementById("forward");
const backward = document.getElementById("backward");
const meme = document.getElementById("meme");
const memeNumHtml = document.getElementById("memeNumber");
const random = document.getElementById("randButton");

let memes = [];

forward.addEventListener("click", nextMeme);
backward.addEventListener("click", backMeme);
random.addEventListener("click", randomMeme)

function updateMeme() {
    meme.src = `memes/main/${currentMeme}.jpeg`;
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

function randomMeme() {
    let randomNum = Math.floor(Math.random() * amount);
    currentMeme = randomNum;
    updateMeme()
}

function preloadImages(array) {
    if (!preloadImages.list) {
        preloadImages.list = [];
    }
    var list = preloadImages.list;
    for (var i = 0; i < array.length; i++) {
        var img = new Image();
        img.onload = function() {
            var index = list.indexOf(this);
            if (index !== -1) {
                // remove image from the array once it's loaded
                // for memory consumption reasons
                list.splice(index, 1);
            }
        }
        list.push(img);
        img.src = array[i];
    }
}

function memeArrayReady() {
    for (let i = 0; i < amount; i++) {
        memes.push(`memes/main/${currentMeme - 1}.jpeg`)
        console.log(memes)
    }
}

memeArrayReady()

preloadImages(memes);

updateMeme()
