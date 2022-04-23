const $$tabItem = document.querySelectorAll('.notice02 .notice-tab-item')

let currentActiveItem = document.querySelector('.notice-tab-item.is-active')

function clickTabItem() {
  if (currentActiveItem !== this) {
    this.classList.add('is-active')
    currentActiveItem.classList.remove('is-active')
    currentActiveItem = this
  }
}

$$tabItem.forEach((item) => {
  item.addEventListener('click', clickTabItem)
})
