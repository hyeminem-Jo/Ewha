const $sidebarNav = document.querySelector('.sidebar-nav')
const $$sidebarNavItem = $sidebarNav.querySelectorAll('.nav-item')

function activeNavItem() {
  if (currentActiveItem !== this) {
    this.classList.add('is-active')
    currentActiveItem.classList.remove('is-active')
    currentActiveItem = this
  }
}

let currentActiveItem = document.querySelector('.nav-list .nav-item.is-active');

$$sidebarNavItem.forEach((item) => {
  item.addEventListener('click', activeNavItem)
});

const $$drawerMenuBtn = $sidebarNav.querySelectorAll('.menu .menu-item > a');
let currentOpenedItem = document.querySelector('.menu .menu-item.is-open');

function openDrawerMenuItem() {
  const $clickedBtn = this.parentNode
  if (currentOpenedItem !== $clickedBtn) {
    $clickedBtn.classList.toggle('is-open')
    if (currentOpenedItem !== null) {
      currentOpenedItem.classList.remove('is-open')
    }
    currentOpenedItem = $clickedBtn
  } else {
    $clickedBtn.classList.remove('is-open')
    currentOpenedItem = null
  }
}

$$drawerMenuBtn.forEach((item) => {
  item.addEventListener('click', openDrawerMenuItem)
})