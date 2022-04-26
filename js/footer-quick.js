const $button = document.querySelector('.footer-quick > button')

$button.addEventListener('click', function () {
  const $footerQuick = this.parentNode
  $footerQuick.classList.toggle('is-active')
  console.log($footerQuick)
})
