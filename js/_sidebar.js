const $body = document.querySelector('body')
const $sidebar = document.querySelector('.sidebar')
const $btnClose = $sidebar.querySelector('.btn-close-37')
const $btnMenu = document.querySelector('.middle-header-sm .btn-menu-37')

function openSidebar() {
  $sidebar.classList.add('is-active')
  $body.style.overflow = 'hidden'
}

function closeSidebar() {
  $sidebar.classList.remove('is-active')
  $body.style.overflow = 'auto'
}

$btnMenu.addEventListener('click', openSidebar)
$btnClose.addEventListener('click', closeSidebar)