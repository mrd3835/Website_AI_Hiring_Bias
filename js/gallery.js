var images = [
  { src: "images/people_header.jpg", alt: "A diverse group of cartoon people smiling" },
  // { src: "images/scale_header.jpg", alt: "A man and a woman sit on a scale, showing inequality" }
];

var i = 0;
var slide = document.getElementById("slide");

// Show the first image immediately
slide.src = images[i].src;
slide.alt = images[i].alt;

function nextImage() {
  i = (i + 1) % images.length; // wrap around automatically
  slide.src = images[i].src;   // set the image source
  slide.alt = images[i].alt;   // set the alt text
}

// Change image every 3 seconds
setInterval(nextImage, 3000);
