// Create variables targetting the relevant DOM elements here 👇
let coverImage = document.querySelector('.js-cover-image');
let title = document.querySelector('.js-cover-title');
let tagline1 = document.querySelector('.js-tagline-1');
let tagline2 = document.querySelector('.js-tagline-2');


// We've provided a few variables below
// let savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
// let currentCover;

// Add your event listeners here 👇
document.addEventListener('onload', loadMainCoverData());

// Create your event handlers and other functions here 👇
function loadMainCoverData() {
  coverImage.src = covers[getRandomIndex(covers)];
  title.textContent = titles[getRandomIndex(titles)];
  tagline1.textContent = descriptors[getRandomIndex(descriptors)];
  tagline2.textContent = descriptors[getRandomIndex(descriptors)];
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}
