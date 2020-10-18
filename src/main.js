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
let createNewCoverBtn = document.querySelector('.js-create-new-book-btn')

let newCoverForm = document.querySelector('.js-new-cover-form');
let userCover = document.querySelector('.js-user-cover');
let userTitle = document.querySelector('.js-user-title');
let userDesc1 = document.querySelector('.js-user-desc1');
let userDesc2 = document.querySelector('.js-user-desc2');

let currentCover = createCover();
// let savedCovers = [new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];
let savedCovers = [];

function selectRandomCoverPropertyVals() {
  let coverImgSrc = covers[getRandomIndex(covers)];
  let title = titles[getRandomIndex(titles)];
  let descriptor1 = descriptors[getRandomIndex(descriptors)];
  let descriptor2 = descriptors[getRandomIndex(descriptors)];

  return [coverImgSrc, title, descriptor1, descriptor2];
}

function createCover(coverImgSrc, title, descriptor1, descriptor2) {  
  return new Cover(coverImgSrc, title, descriptor1, descriptor2);
}

function updateCover() {
  coverImage.src = currentCover.cover;
  coverTitle.textContent = currentCover.title;
  tagline1.textContent = currentCover.tagline1;
  tagline2.textContent = currentCover.tagline2;
}

function displayRandomCover() {
  let coverPropertyVals = selectRandomCoverPropertyVals();
  currentCover = createCover(...coverPropertyVals);
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
  displaySavedCovers()
}

function hideElements() {
  Array.from(arguments).forEach(elem => elem.classList.add('hidden'));
}

function revealElements() {
  Array.from(arguments).forEach(elem => elem.classList.remove('hidden'));
}

function clearForm() {
  newCoverForm.reset();
}

function displaySavedCovers() {
  console.log(savedCovers);
}

function createNewCover(e) {
  let coverPropertyVals = storeUserCoverData(e);
  currentCover = createCover(...coverPropertyVals);
  updateCover();
  showHomeView();
  clearForm();
}

function storeUserCoverData(e) {
  e.preventDefault();

  let coverImgSrc = userCover.value; 
  let title = userTitle.value;
  let descriptor1 = userDesc1.value;
  let descriptor2 = userDesc2.value;

  covers.push(coverImgSrc);
  titles.push(title);
  descriptors.push(descriptor1);
  descriptors.push(descriptor2);

  return [coverImgSrc, title, descriptor1, descriptor2];
}

function saveCurrentCover() {
  if (idAlreadyExists()) return;
  
  savedCovers.push(currentCover);
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function idAlreadyExists() {
  return savedCovers.map(cover => cover.id).includes(currentCover.id)
}

document.addEventListener('onload', displayRandomCover());
homeBtn.addEventListener('click', showHomeView);
randomCoverBtn.addEventListener('click', displayRandomCover);
saveCoverBtn.addEventListener('click', saveCurrentCover);
viewSavedBtn.addEventListener('click', showSavedView);
makeNewBtn.addEventListener('click', showFormView);
createNewCoverBtn.addEventListener('click', createNewCover);

// let savedCovers = [new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")];
