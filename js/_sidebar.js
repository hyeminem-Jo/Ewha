const $sidebar = document.querySelector('.sidebar')
const $btnClose = $sidebar.querySelector('.btn-close-37')
const $btnMenu = document.querySelector('.middle-header-sm .btn-menu-37')

function openSidebar() {
  $sidebar.classList.add('is-active')
}

function closeSidebar() {
  $sidebar.classList.remove('is-active')
}

$btnMenu.addEventListener('click', openSidebar)
$btnClose.addEventListener('click', closeSidebar)