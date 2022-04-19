// main-visual slider 구현
const visualCarousel = tns({
  container: '.main-visual .slider-list',
  controlsContainer: '.main-visual .slider-controls',
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