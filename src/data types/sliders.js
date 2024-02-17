let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let slides = document.getElementsByClassName("mySlides");
  if (n == slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  
  const slidewidth = slides[slideIndex].offsetWidth;
  document.querySelector('.images-container').scrollLeft = n * slidewidth;
//   for (let i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
}
