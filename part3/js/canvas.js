import { imgs } from "./images.js";

let canvas;
let ctx;

let fadeAlphaDelta = 0.03;
let slideXDelta = 10;

let playBtn;
let prevBtn;
let nextBtn;
let pauseBtn;
let randomBtn;
let randomPressedBtn;

let transition = "none";
let isPaused = true;
let isRandom = false;

window.onload = function () {
  canvas = document.querySelector("#canvas");

  canvas.width = canvas.clientWidth;
  canvas.height = canvas.clientHeight;

  if (!canvas) {
    throw new Error("Canvas could not be initialized");
  }

  ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Context could not be initialized");
  }

  console.log("Canvas Initialized!");

  playBtn = document.querySelector("#play");
  prevBtn = document.querySelector("#prev");
  nextBtn = document.querySelector("#next");
  pauseBtn = document.querySelector("#pause");
  randomBtn = document.querySelector("#random");
  randomPressedBtn = document.querySelector("#random-pressed");

  playBtn.addEventListener("click", play);
  pauseBtn.addEventListener("click", pause);
  prevBtn.addEventListener("click", prev);
  nextBtn.addEventListener("click", next);
  randomBtn.addEventListener("click", toggleRandom);
  randomPressedBtn.addEventListener("click", toggleRandom);

  let transitionSelect = document.querySelector("#transition");

  transitionSelect.addEventListener("change", () => {
    transition = transitionSelect.value;
  });

  // let all the images load, and then draw the first one
  setTimeout(() => drawImg(imgs.getCurrent()), 1000);
};

function play() {
  if (isPaused) {
    isPaused = false;
    continueSlideShow();
  }

  pauseBtn.style.display = "inline";
  playBtn.style.display = "none";
}

function pause() {
  isPaused = true;

  pauseBtn.style.display = "none";
  playBtn.style.display = "inline";
}

function prev() {
  if (!prevBtn.classList.contains("disabled")) {
    drawImg(imgs.getPrevious());
  }
}

function next() {
  if (!nextBtn.classList.contains("disabled")) {
    drawImg(imgs.getNext());
  }
}

function toggleRandom() {
  isRandom = !isRandom;

  if (isRandom) {
    randomBtn.style.display = "none";
    randomPressedBtn.style.display = "inline";

    nextBtn.classList.add("disabled");
    prevBtn.classList.add("disabled");
  } else {
    randomBtn.style.display = "inline";
    randomPressedBtn.style.display = "none";

    nextBtn.classList.remove("disabled");
    prevBtn.classList.remove("disabled");
  }
}

function continueSlideShow() {
  if (!isPaused) {
    let currImg = imgs.getCurrent();
    let nextImg;

    if (isRandom == true) {
      nextImg = imgs.getRandom();
    } else {
      nextImg = imgs.getNext();
    }

    if (transition == "none") {
      drawImg(nextImg);
    } else if (transition == "slide") {
      slideIn(nextImg);
    } else if (transition == "fade") {
      fadeOut(currImg, nextImg);
    }

    setTimeout(continueSlideShow, 2000);
  }
}

function drawImg(img, x = 0, y = 0) {
  ctx.drawImage(img, x, y, canvas.width, canvas.height);

  ctx.font = "35pt Calibri";
  ctx.textAlign = "center";
  ctx.fillStyle = "white";
  ctx.fillText(img.caption, canvas.width / 2, canvas.height - 10);
}

function slideIn(currImg, x = -canvas.width) {
  x += slideXDelta;

  if (x < 0) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImg(currImg, x, 0);

    requestAnimationFrame(() => slideIn(currImg, x));
  }
}

function fade(currImg, nextImg) {
  fadeOut(currImg, nextImg);
}

function fadeOut(currImg, nextImg, alpha = 1) {
  if (alpha > 0) {
    alpha -= fadeAlphaDelta;
    ctx.globalAlpha = alpha;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImg(currImg);

    requestAnimationFrame(() => fadeOut(currImg, nextImg, alpha));
  } else {
    fadeIn(nextImg);
  }
}

function fadeIn(img, alpha = 0) {
  if (alpha < 1) {
    alpha += fadeAlphaDelta;
    ctx.globalAlpha = alpha;
    ctx.imageSmoothingEnabled = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawImg(img);

    requestAnimationFrame(() => fadeIn(img, alpha));
  }
}
