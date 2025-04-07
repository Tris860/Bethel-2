// main.js



// Call the initialize function when the DOM is fully loaded



let currentSlide = 0;
let pillar_index=0;
const slides = document.querySelectorAll('.slider');


let navbar = document.getElementById('navigation');
const anime_text=document.querySelectorAll('.text');



function closeNav() {
    navbar.style.animation='none';
    navbar.style.animation='slide_out 2s forwards';
}
function openNav() {
    navbar.style.animation='slide_in 2s forwards';   
}
function searching() {
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("inputbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("stories");
    li = ul.getElementsByTagName("div");
    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("p")[0];
        txtValue = a.textContent || a.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}


function startSlideshow() {
    const slides = document.querySelectorAll('.slider');
    let currentSlide = 0;
    slides[currentSlide].style.display = 'block';

    setInterval(function playNextSlide() {
    
        slides[currentSlide].style.animation='fad_out 1s linear';
        slides[currentSlide].style.display = 'none';
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].style.display = 'block';
        slides[currentSlide].style.animation='fad_in 1s linear';
    }, 3000); // Change slide every 3 seconds
}
function gallerySlideshow() {
    let currentSlider=0;
    const slide = document.querySelectorAll('.slide_set');
    slide[currentSlider].style.display = 'block';
    setInterval(function NextSlide() {
        slide[currentSlider].style.animation='fad_out 1s linear';
        slide[currentSlider].style.display = 'none';
        currentSlider = (currentSlider+ 1) % slide.length;
        slide[currentSlider].style.display = 'block';
        slide[currentSlider].style.animation='fad_in 1s linear';
     }, 3000); // Change slide every 3 seconds
}
window.addEventListener('scroll', function() {
    const stickyDiv = document.getElementById('navbar');
    const referenceDiv = document.getElementById('image');
    const stickyRect = stickyDiv.getBoundingClientRect();
    const referenceRect = referenceDiv.getBoundingClientRect();

    if (stickyRect.top <= 0) {
        stickyDiv.style.position = 'fixed';
        stickyDiv.style.top = '0';
        stickyDiv.style.transform = 'none';
    }

    if (referenceRect.bottom >= stickyRect.top) {
        stickyDiv.style.position = 'relative';
        stickyDiv.style.top = '0px';
        stickyDiv.style.transform = 'none';
    }
});
function NextHistorySlide() {
    const images = document.querySelectorAll('.history_image');
      
      let Index=0;
      let currentImageIndex = 0;
    setInterval(() =>{//an error on this one
      
      images[currentImageIndex].style.display = 'none';
      currentImageIndex = (currentImageIndex + 1) % images.length;
      images[currentImageIndex].style.animation= "slide_down 2s ease-in-out 1 ";
      images[currentImageIndex].style.display = 'block';
     
   }, 3000);
 
 }
document.getElementById('logo').addEventListener('click',open);
// Start the slideshow

function showNextImage() {
    const images = document.querySelectorAll('.img_slide');
    const definition = document.querySelectorAll('.definition');
    
    let currentImageIndex = 0;
    definition[currentImageIndex].style.display = 'block';
    images[currentImageIndex].style.display = 'block';
    setInterval(() => {
        images[currentImageIndex].style.animation= "slideLeft 2s ease-in-out 1 reverse";
        definition[currentImageIndex].style.animation= "slideRight 2s ease-in-out 1 reverse";
        images[currentImageIndex].style.display = 'none';
        definition[currentImageIndex].style.display = 'none';
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.animation= "slideLeft 2s ease-in-out 1 reverse";
        definition[currentImageIndex].style.animation= "slideRight 2s ease-in-out 1 ";
        images[currentImageIndex].style.display = 'block';
        definition[currentImageIndex].style.display = 'block';
    }, 5000);


}
// let currentIndex = 0;

// function move_event(direction) {
//     const slides = document.querySelectorAll('.event_slide');
//     const totalSlides = slides.length;

//     // Calculate the new index for the first visible slide
//     currentIndex = (currentIndex + direction + totalSlides) % totalSlides;

//     // Hide all slides and then show the next three slides
//     slides.forEach((slide, index) => {
//         slide.classList.add('hide');
//         slide.classList.remove('active');
//     });

//     for (let i = 0; i < 3; i++) {
//         const indexToShow = (currentIndex + i) % totalSlides;
//         slides[indexToShow].classList.add('active');
//         slides[indexToShow].classList.remove('hide');
//     }
// }

// // Initialize the slideshow by showing the first three slides
// document.addEventListener('DOMContentLoaded', () => {
//     move_event(0);
// });


startSlideshow();







