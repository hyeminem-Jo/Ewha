const $btnTop = document.querySelector('.btn-top');

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
}

$btnTop.addEventListener('click', scrollToTop)