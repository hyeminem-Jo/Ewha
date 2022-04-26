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

// footer-quick slider 구현
const footerCarousel = tns({
  disable: false,
  container: '.footer-quick-carousel .slider-list',
  items: 4,
  gutter: 25,
  controls: false,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',

  responsive: {
    1200: {
      disable: true,
    },
  }
})