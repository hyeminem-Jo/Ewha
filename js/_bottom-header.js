const $bottomHeader = document.querySelector('.bottom-header')
const $bottomHeaderWrap = $bottomHeader.querySelector('.bottom-header-wrap')

const GLOBAL_HEADER_HEIGHT = 250;
const BOTTOM_HEADER_HEIGHT = 92;

// 스크롤 시 상단 고정
function fixBottomHeader() {
  console.log(111)
  if (window.scrollY >= GLOBAL_HEADER_HEIGHT) {
    $bottomHeader.classList.add('is-fixed')
  } else if (window.scrollY >= BOTTOM_HEADER_HEIGHT) {
    $bottomHeader.classList.remove('is-fixed')
  }
}

window.addEventListener('scroll', _.throttle(fixBottomHeader, 50))