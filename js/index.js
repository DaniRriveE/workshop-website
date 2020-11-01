//Services Carousel

const prevBtn = document.getElementById('custom-carousel-control-prev');
const nextBtn = document.getElementById('custom-carousel-control-next');
const carouselInner = document.querySelector('.custom-carousel-inner');

const slides = document.getElementsByClassName('custom-carousel-item');
let activeSlides = document.getElementsByClassName('custom-active');

const visibleSlides = 3;



function nextByOne() {
    activeSlides[0].classList.remove('custom-active');
    carouselInner.appendChild(slides[0]);
    slides[visibleSlides - 1].classList.add('custom-active');
}

function prevByOne() {
    activeSlides[activeSlides.length - 1].classList.remove('custom-active');
    carouselInner.insertBefore(slides[slides.length - 1], slides[0]);
    slides[0].classList.add('custom-active');
}

nextBtn.addEventListener('click', nextByOne);
prevBtn.addEventListener('click', prevByOne);





//Gallery Carousel

const photoPrev = document.getElementById('photo-prev');
const photoNext = document.getElementById('photo-next');
const photosCarouselInner = document.querySelector('.photos-carousel-inner');

const photos = document.getElementsByClassName('photos-carousel-item');
let activePhotos = document.getElementsByClassName('photo-active');

const bigPicture = document.getElementById('big-picture');

const visiblePhotos = 5;



function nextByOnePhoto() {
    activePhotos[0].classList.remove('photo-active');
    photosCarouselInner.appendChild(photos[0]);
    photos[visiblePhotos - 1].classList.add('photo-active');
    updateBigPicture(photos[Math.floor(visiblePhotos/2)]);
}

function prevByOnePhoto() {
    activePhotos[activePhotos.length - 1].classList.remove('photo-active');
    photosCarouselInner.insertBefore(photos[photos.length - 1], photos[0]);
    photos[0].classList.add('photo-active');
    updateBigPicture(photos[Math.floor(visiblePhotos/2)]);
}

photoNext.addEventListener('click', nextByOnePhoto);
photoPrev.addEventListener('click', prevByOnePhoto);
updateBigPicture(photos[Math.floor(visiblePhotos/2)]);

function updateBigPicture(el) {
    bigPicture.src = el.querySelector('img').src;
}

//Header transformations

const logo = document.querySelector('.logo');
const shopName = document.querySelector('.logo h2');
const menu = document.querySelector('.menu');

function headerTransform() {
    
}