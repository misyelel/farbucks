var slideIndex = 1;
var slideIndex2 = 1;

showSlides(slideIndex);
showSlides(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

function plusSlides2(n) { 
    showSlides(slideIndex2 += n);
  }

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slider");
  var slides_desk = document.getElementsByClassName("slider-desk");

  if (n > slides.length) {slideIndex = 1}
  if (n > slides_desk.length) {slideIndex2 = 1}

  if (n < 1) {slideIndex = slides.length}
  if (n < 1) {slideIndex2 = slides_desk.length}

  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      slides_desk[i].style.display = "none";
  }
  
  if(slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
  if(slides_desk[slideIndex2-1]) slides_desk[slideIndex2-1].style.display = "block";
}

