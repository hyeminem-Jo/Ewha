const $title = document.querySelector('.related-site-box .title')
const $$title = document.querySelectorAll('.related-site-box .title')

let currentActiveItem = document.querySelector('.related-site.is-active')

function openRelatedSite() {
  const $relatedSite = this.parentNode.parentNode

  if (currentActiveItem !== $relatedSite) { 
    $relatedSite.classList.add('is-active') 
    if (currentActiveItem !== null) { 
      currentActiveItem.classList.remove('is-active')
    }
    currentActiveItem = $relatedSite
  } else if (currentActiveItem === $relatedSite) { // 이미 눌린 item 일 때
    currentActiveItem.classList.remove('is-active')
    currentActiveItem = null
  }
}

$$title.forEach((title) => {
  title.addEventListener('click', openRelatedSite)
})

// 조건 1. 그럼 열 때는 title 버튼에만 이벤트 적용
// 조건 2. 닫을 때는 title 버튼 외에 전부 이벤트 적용 
// 부가 조건. 만약 닫을 때 그냥 title 외 window 영역이 아닌, 또 다른 title 버튼일 때, 이전 버튼의 활성화를 끄고 이번에 누른 버튼에 활성화

// let currentActiveItem = document.querySelector('.related-site.is-active')

// function openRelatedSite() {
//   const $relatedSite = this.parentNode.parentNode

//   if (currentActiveItem !== $relatedSite) { // 아예 처음 새롭게 누르는 item 이거나 기존에 눌린게 있고 새롭게 누르는 item 일 때
//     $relatedSite.classList.add('is-active') 
//     console.log('add is-active')

//     if (currentActiveItem !== null) { // 기존에 눌린 item 이 있는 경우
//       currentActiveItem.classList.remove('is-active')
//     }
//     currentActiveItem = $relatedSite
//   } else if (currentActiveItem === $relatedSite) { // 이미 눌린 item 일 때
//     currentActiveItem.classList.remove('is-active')
//     currentActiveItem = null
//   }

//   // 시험
//   if (currentActiveItem !== null) {
//     if (currentActiveItem.classList.contains('is-active')) {
//       // is-active 가 안되어있을 때(닫혀있을 때) 클릭하면 window 이벤트(닫는 이벤트) 활성화
//       console.log('contain is active')
//       setTimeout(() => {
//         console.log('start window click event')
//         window.addEventListener('click', closeRelatedSite)
//       }, 0)
//     }
//   }

// }

// function closeRelatedSite(e) {
//   // alert('hi')
//   $$title.forEach((title) => {
//     if (!title.contains(e.target)) {
//       if (currentActiveItem !== null) {
//         currentActiveItem.classList.remove('is-active')
//         currentActiveItem = null
//         window.removeEventListener('click', closeRelatedSite)
//       }
//     }
//   })
//   console.log('remove is-active')
//   console.log(currentActiveItem)
// }

// $$title.forEach((title) => {
//   title.addEventListener('click', openRelatedSite)
// })
