const $quickMenu = document.querySelector('.quick-menu')
const $btnQuick = $quickMenu.querySelector('.quick-menu-btn')
const $quickMenuList = $quickMenu.querySelector('.quick-menu-list')
const $overlay = document.querySelector('.overlay')
const $body = document.querySelector('body')

function openQuickMenu() {
  this.classList.toggle('is-click')
  $quickMenuList.classList.toggle('is-active')
  $overlay.classList.toggle('is-active')
  $body.classList.toggle('is-fixed')
}

$overlay.addEventListener('click', function () {
  this.classList.remove('is-active')
  $btnQuick.classList.remove('is-click')
  $quickMenuList.classList.remove('is-active')
  $body.classList.remove('is-fixed')
})

$btnQuick.addEventListener('click', openQuickMenu)

function quickMenuApear() {
  if (window.scrollY > 0) {
    console.log('0')
    $quickMenu.classList.add('is-active')
  } else {
    $quickMenu.classList.remove('is-active')
  }
}

window.addEventListener('scroll', _.throttle(quickMenuApear, 100))