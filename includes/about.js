// myModule.js

const vmlayer = document.querySelectorAll('.mission_aboutus');
const vmtiltes = document.querySelectorAll('.vm');
const pillarSlides = document.querySelectorAll('.meaning');
const pillar = document.querySelectorAll('.pillars');
let currentImageIndex = 0;
let pillar_index = 0; // Added this to avoid undefined error
let currentSlide = 0; // Added this to avoid undefined error

// Function to show the next image
function showNextImage() {
  vmlayer[currentImageIndex].style.display = 'none';
  vmtiltes[currentImageIndex].style.color = 'white';
  currentImageIndex = (currentImageIndex + 1) % vmlayer.length;
  vmlayer[currentImageIndex].style.animation = "disolve 2s ease-in-out 1 reverse";
  vmlayer[currentImageIndex].style.display = 'block';
  vmtiltes[currentImageIndex].style.color = 'gold';
}

// Function to handle pillar slides
function PillarNext() {
  pillarSlides[pillar_index].style.animation = 'fad_out 1s linear';
  pillarSlides[pillar_index].style.display = 'none';
  pillar[pillar_index].style.color = "rgb(248, 241, 196)";
  pillar_index = (pillar_index + 1) % pillarSlides.length;
  pillar[pillar_index].style.color = "gold";
  pillarSlides[pillar_index].style.display = 'block';
  pillarSlides[pillar_index].style.animation = 'fad_in 1s linear';
}

// Initialize
function initialize() {
  // Show the first image and pillar initially
  pillarSlides[currentSlide].style.display = 'block';
  pillar[currentSlide].style.color = "gold";
  vmlayer[currentImageIndex].style.display = 'block';

  // Set intervals for animations
  setInterval(showNextImage, 7000);
  setInterval(PillarNext, 5000);
}

// Export the functions
document.addEventListener('DOMContentLoaded', initialize);
