// Create variables targetting the relevant DOM elements here 👇
let coverImage = document.querySelector('.js-cover-image');
let coverTitle = document.querySelector('.js-cover-title');
let tagline1 = document.querySelector('.js-tagline-1');
let tagline2 = document.querySelector('.js-tagline-2');


// We've provided a few variables below
// let savedCovers = [
//   new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
// ];
let currentCover = createCover();

// Add your event listeners here 👇
document.addEventListener('onload', loadMainCover());

// Create your event handlers and other functions here 👇
function loadMainCover() {
  updateCover(currentCover);
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function createCover() {
  let coverImgSrc = covers[getRandomIndex(covers)];
  let title = titles[getRandomIndex(titles)];
  let descriptor1 = descriptors[getRandomIndex(descriptors)];
  let descriptor2 = descriptors[getRandomIndex(descriptors)];
  
  return new Cover(coverImgSrc, title, descriptor1, descriptor2);
}

function updateCover() {
  coverImage.src = currentCover.cover;
  coverTitle.textContent = currentCover.title;
  tagline1.textContent = currentCover.tagline1;
  tagline2.textContent = currentCover.tagline2;
}