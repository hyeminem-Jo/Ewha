// main-visual slider 구현
const visualCarousel = tns({
  container: '.main-visual .slider-list',
  controls: false,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
})

const $btnPause = document.querySelector('.main-visual .tns-outer>button')
$btnPause.addEventListener('click', function () {
  this.classList.toggle('is-start');
})

// main-history slider 구현
const historyCarousel = tns({
  container: '.history-carousel-slider .slider-list',
  mode: 'gallery',
  navContainer: '.history-carousel-thumbnail .thumbnail-list', 
  navAsThumbnails: true,
  controlsContainer: '.history-carousel-slider .slider-controls',
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
})