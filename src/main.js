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
let createNewBookBtn = document.querySelector('.js-create-new-book-btn')

let userCover = document.querySelector('.js-user-cover');
let userTitle = document.querySelector('.js-user-title');
let userDesc1 = document.querySelector('.js-user-desc1');
let userDesc2 = document.querySelector('.js-user-desc2');

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

function saveUserCoverData(e) {
  e.preventDefault();

  covers.push(userCover.value);
  titles.push(userTitle.value);
  descriptors.push(userDesc1.value);
  descriptors.push(userDesc2.value);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

document.addEventListener('onload', updateCover(currentCover));
randomCoverBtn.addEventListener('click', displayRandomCover);
homeBtn.addEventListener('click', showHomeView);
makeNewBtn.addEventListener('click', showFormView);
viewSavedBtn.addEventListener('click', showSavedView);
createNewBookBtn.addEventListener('click', saveUserCoverData);