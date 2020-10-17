let coverImage = document.querySelector('.js-cover-image');
let coverTitle = document.querySelector('.js-cover-title');
let tagline1 = document.querySelector('.js-tagline-1');
let tagline2 = document.querySelector('.js-tagline-2');

let homeView = document.querySelector('.js-home-view');
let formView = document.querySelector('.js-form-view');
let savedView = document.querySelector('.js-saved-view');

let homeBtn = document.querySelector('.js-home-button'); 
let randomCoverBtn = document.querySelector('.js-random-cover-btn'); 
let makeNewBtn = document.querySelector('.js-make-new-btn');
let viewSavedBtn = document.querySelector('.js-view-saved-btn');
let saveCoverBtn = document.querySelector('.js-save-cover-btn');

let currentCover = createCover();
// let savedCovers = [new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];

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

function displayRandomCover() {
  currentCover = createCover();
  updateCover();
}

function showFormView() {
  hideElements(homeView, savedView, randomCoverBtn, saveCoverBtn);
  revealElements(formView, homeBtn);
}

function showHomeView() {
  hideElements(formView, savedView, homeBtn);
  revealElements(homeView, randomCoverBtn, saveCoverBtn);
}

function showSavedView() {
  hideElements(homeView, formView, randomCoverBtn, saveCoverBtn);
  revealElements(savedView, homeBtn);
}

function hideElements() {
  Array.from(arguments).forEach(elem => elem.classList.add('hidden'));
}

function revealElements() {
  Array.from(arguments).forEach(elem => elem.classList.remove('hidden'));
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

document.addEventListener('onload', updateCover(currentCover));
randomCoverBtn.addEventListener('click', displayRandomCover);
makeNewBtn.addEventListener('click', showFormView);
viewSavedBtn.addEventListener('click', showSavedView);
homeBtn.addEventListener('click', showHomeView);