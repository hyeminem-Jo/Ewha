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

const $$drawerMenuItem = $sidebarNav.querySelectorAll('.menu .menu-item');
let currentOpenedItem = document.querySelector('.menu .menu-item.is-open');

// 한탭을 두번 누른 후 다시 다른탭을 누르면 이전 탭이 안접히는 버그
function openDrawerMenuItem() {
  if (currentOpenedItem !== this) {
    this.classList.toggle('is-open')
    if (currentOpenedItem !== null) {
      currentOpenedItem.classList.remove('is-open')
    }
    currentOpenedItem = this
  } else {
    this.classList.remove('is-open')
    currentOpenedItem = null
  }
}

$$drawerMenuItem.forEach((item) => {
  item.addEventListener('click', openDrawerMenuItem)
})