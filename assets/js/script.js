
/**
 * IONUT - Random image display Script for A Sustainable World
 * This script randomizes the images displayed on the landing page.
 */
let itemsInHtml = document.getElementsByClassName('randomiseImgs');

let images = [  './assets/img/solar1.jpg',
                './assets/img/solar2.jpg',
                './assets/img/solar3.jpg',
                './assets/img/windmill1.jpg',
                './assets/img/windmill2.jpg',
                './assets/img/windmill3.jpg',
                './assets/img/ev1.jpg',
                './assets/img/ev2.jpg',
                './assets/img/ev3.jpg',]

function randomizeImages() {
  // Shuffle the images array using Fisher-Yates algorithm
  let shuffled = images.slice(); // make a copy
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Assign shuffled images to HTML elements
  for (let i = 0; i < itemsInHtml.length; i++) {
    if (shuffled[i]) {
      itemsInHtml[i].src = shuffled[i];
    }
  }
}

// Call the function
randomizeImages();

// Refresh every 1 seconds (3000 milliseconds)
setInterval(randomizeImages, 1000);

/*
    IONUT - end
 */