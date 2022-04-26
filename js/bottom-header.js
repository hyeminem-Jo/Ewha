const $bottomHeader = document.querySelector('.bottom-header')
const $bottomHeaderWrap = $bottomHeader.querySelector('.bottom-header-wrap')
const $btnSearch = $bottomHeaderWrap.querySelector('.util-box button')
const $inputSearch = $bottomHeaderWrap.querySelector('.util-box .input-group')
const $$gnbItem = $bottomHeaderWrap.querySelectorAll('.gnb .gnb-item')

const GLOBAL_HEADER_HEIGHT = 250;
const BOTTOM_HEADER_HEIGHT = 92;

// 스크롤 시 상단 고정
function fixBottomHeader() {
  if (window.scrollY >= GLOBAL_HEADER_HEIGHT) {
    $bottomHeader.classList.add('is-fixed')
  } else if (window.scrollY >= BOTTOM_HEADER_HEIGHT) {
    $bottomHeader.classList.remove('is-fixed')
  }
}

window.addEventListener('scroll', _.throttle(fixBottomHeader, 50))

// btn-search 클릭이벤트
$btnSearch.addEventListener('click', function () {
  $inputSearch.classList.toggle('is-active')
})

// gnb-item 클릭이벤트
let currentActiveItem = $bottomHeaderWrap.querySelector('.gnb-item.is-active')

function clickGnbItem() {
  if (currentActiveItem !== this) { // 지금 누를려는게 이미 클릭된 item 이 아닐 때
    this.classList.add('is-active')
    if (currentActiveItem !== null) {
      currentActiveItem.classList.remove('is-active')
    }
    currentActiveItem = this
  } else if (currentActiveItem === this) { // 지금 누를려는게 이미 클릭된 item 일 때
    currentActiveItem.classList.remove('is-active')
    currentActiveItem = null
  }
}

$$gnbItem.forEach((item) => {
  item.addEventListener('click', clickGnbItem)
})