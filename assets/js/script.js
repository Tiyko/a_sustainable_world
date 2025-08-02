
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

//Shane Start
// RANDOM FACT BOX 

(function () {
  // Get the parts of the page we need: the text where the fact goes, the card itself, and the refresh button
  const factText = document.getElementById("factText");
  const factCard = document.getElementById("factCard");
  const refreshBtn = document.getElementById("refreshFact");

  // If theres no fact box on the page (maybe we are on a diffrent page) then stop the code here
  if (!factText || !factCard) return;

  // A bunch of facts about wind energy to pick from
  const facts = [
    "Wind energy is one of the fastest-growing renewable energy sources worldwide.",
    "A single wind turbine can power up to 1,400 homes.",
    "Wind farms take up less space than many other energy sources.",
    "Wind power produces no greenhouse gas emissions during operation.",
    "The largest offshore wind farm can power over 1 million homes."
  ];

  // Some different border colours so the box looks a bit more intresting when it changes
  const borderColors = [
    "border-primary",
    "border-success",
    "border-warning",
    "border-danger",
    "border-info"
  ];

  // A quick helper that picks a random thing from a list
  function pickRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  // This does the main work of changing the fact and colour
  function updateFact() {
    // While the fact is "changing", show loading text so it looks like its doing somthing
    factText.textContent = "Loading fact...";
    factText.classList.add("text-muted", "fst-italic");

    // After a short pause (0.25s) change to a new random fact
    setTimeout(() => {
      factText.textContent = pickRandom(facts);
      factText.classList.remove("text-muted", "fst-italic");

      // Remove any old border colour and then pick a new random one
      borderColors.forEach(c => factCard.classList.remove(c));
      factCard.classList.add(pickRandom(borderColors));
    }, 250);
  }

  // If the button exists, make it so clicking it updates the fact
  if (refreshBtn) {
    refreshBtn.addEventListener("click", updateFact);
  }

  // Show the first fact straight away when the page loads
  updateFact();

  // Change the fact every 8 seconds so it feels alive
  setInterval(updateFact, 8000);
})();



   // WIND TURBINE SAVINGS CALCULATOR

document.getElementById("windForm").addEventListener("submit", function(event) {
  // Stop the form from reloading the page when you hit submit
  event.preventDefault();

  // Clear any old error messages or results from the last time
  document.getElementById("billError").textContent = "";
  document.getElementById("peopleError").textContent = "";
  document.getElementById("windError").textContent = "";
  document.getElementById("landError").textContent = "";
  document.getElementById("result").textContent = "";

  // Get the values the user typed in (make sure they are numbers)
  const bill = parseFloat(document.getElementById("bill").value);
  const people = parseInt(document.getElementById("people").value);
  const wind = parseFloat(document.getElementById("wind").value);
  const land = parseFloat(document.getElementById("land").value);

  // Assume everything is okay at first
  let isValid = true;

  // Check each field and if its wrong, show an error next to it
  if (isNaN(bill) || bill <= 0) {
    document.getElementById("billError").textContent = "Enter your monthly bill.";
    isValid = false;
  }
  if (isNaN(people) || people < 1) {
    document.getElementById("peopleError").textContent = "Enter number of people.";
    isValid = false;
  }
  if (isNaN(wind) || wind < 4) {
    document.getElementById("windError").textContent = "Wind speed must be at least 4 m/s for savings.";
    isValid = false;
  }
  if (isNaN(land) || land < 10) {
    document.getElementById("landError").textContent = "Enter land size (at least 10 sq meters).";
    isValid = false;
  }

  // If something was wrong, stop the calculation here
  if (!isValid) return;

  // Work out the savings: yearly bill times 35% (this is a simple guess for now)
  const savings = bill * 12 * 0.35;

  // Show the result on the page, rounded to 2 decimal places so it looks neat
  document.getElementById("result").textContent =
    "Estimated annual savings with a wind turbine: €" + savings.toFixed(2);
});
// Shane End