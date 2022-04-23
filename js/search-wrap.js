const $btnSearch = document.querySelector('.middle-header .btn-search-37');
const $searchWrap = document.querySelector('.search-wrap');

$btnSearch.addEventListener('click', function () {
  $searchWrap.classList.toggle('is-active');
})