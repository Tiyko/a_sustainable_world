
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

// Refresh every 1 seconds
setInterval(randomizeImages, 1000);


const form = document.getElementById("contactForm");

if (form) {
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    document.querySelectorAll(".error").forEach(el => el.textContent = "");

    let isValid = true;

    // Name validation
    const name = document.getElementById("name").value.trim();
    if (name === "") {
      document.getElementById("nameError").textContent = "Name is required.";
      isValid = false;
    }

    // Email validation
    const email = document.getElementById("email").value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      document.getElementById("emailError").textContent = "Enter a valid email.";
      isValid = false;
    }

    // Phone validation (basic pattern)
    const phone = document.getElementById("phone").value.trim();
    const phonePattern = /^\+?\d{10,15}$/;
    if (!phonePattern.test(phone)) {
      document.getElementById("phoneError").textContent = "Enter a valid phone number (10-15 digits).";
      isValid = false;
    }

    // Age validation
    const age = parseInt(document.getElementById("age").value);
    if (isNaN(age) || age < 18 || age > 100) {
      document.getElementById("ageError").textContent = "Age must be between 18 and 100.";
      isValid = false;
    }

    if (isValid) {
      alert("Thank you for subscribing!\nKeep in touch!");
      // Clear the form fields
      form.reset();
    }
  });
}
/*
    IONUT - end
 */