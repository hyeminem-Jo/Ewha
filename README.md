# Ewha Woman's University Site
> 이화여자대학교 사이트를 클론한 반응형 웹사이트 프로젝트 입니다. 레이아웃으로 모바일, 태블릿, 데스크탑 형식으로 구성되어있습니다.  

![image](https://user-images.githubusercontent.com/83049523/169684766-764c6e80-5fc7-4272-8df7-52668e6de991.png)


## 개요
본 프로젝트는 반응형 웹으로 약간의 리뉴얼을 거쳤으며 본인 만의 방식으로 마크업 및 scss 를 작성하였습니다. 또한 여러 기능들을 순수 자바스크립트로 하드코딩하여 작업 해보았습니다.

### 사용된 언어 및 플러그인
- html / scss / javascript
- tiny-slider


## 주요 기능

### 1. 스크롤에 따른 header 변화
해당 사이트는 헤더 영역이 꽤 크고 복잡하게 구성이 되어있습니다. 이대로 fixed 를 주게 되면 다른 section content 를 볼 때 시각적으로 방해가 되기 때문에 스크롤을 하게 되면 일정 부분에서 헤더 영역이 심플한 모양으로 변화하도록 구현하였습니다. 

![image](https://user-images.githubusercontent.com/83049523/169683767-0747e731-f85c-4b39-8e87-043fa9cca257.png)

``` javascript
const $bottomHeader = document.querySelector('.bottom-header')

const GLOBAL_HEADER_HEIGHT = 250;
const BOTTOM_HEADER_HEIGHT = 92;

function fixBottomHeader() {
  if (window.scrollY >= GLOBAL_HEADER_HEIGHT) {
    $bottomHeader.classList.add('is-fixed')
  } else if (window.scrollY >= BOTTOM_HEADER_HEIGHT) {
    $bottomHeader.classList.remove('is-fixed')
  }
}

window.addEventListener('scroll', _.throttle(fixBottomHeader, 50))
```

---

### 2. gnb 사이드바 탭 메뉴

PC 버전에서의 gnb 메뉴와 모바일 버전에서의 gnb 탭 메뉴 입니다. PC 버전에서는 하위 메뉴들이 한눈에 보이는 레이아웃으로 이루어져있지만, 모바일 버전에서는 구성범위가 작아 하위메뉴들이 사이드바 내에서 열었다 닫았다 하는 탭 메뉴 형식으로 구현하였습니다.

![image](https://user-images.githubusercontent.com/83049523/169683644-9a7b99fa-9947-4417-be84-f190cf0e0eba.png)

``` javascript
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
```

---

### 3. 학교 소개 탭 슬라이드
원본 사이트에는 없는 새롭게 제작한 부분으로, 학교에 대한 역사를 소개하는 section 입니다. 플러그인을 사용한 슬라이드이며 클릭 버튼으로 이미지를 눌러 그와 관련된 글이 슬라이드 되도록 제작해보았습니다. 

![image](https://user-images.githubusercontent.com/83049523/169683794-7f79ed6b-6d20-45c1-a5cb-0c8edd056d54.png)

``` javascript
const historyCarousel = tns({
  container: '.history-carousel-slider .slider-list',
  mode: 'gallery',
  navContainer: '.history-carousel-thumbnail .thumbnail-list',
  navAsThumbnails: true,
  controlsContainer: '.history-carousel-slider .slider-controls',
  arrowKeys: true,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',
})
```
---

### 4. 반응형 footer 슬라이드
데스크탑 화면에서는 footer 의 quick 아이템들이 한 눈에 보이지만, 모바일에서는 슬라이드를 통해 보여지도록 해야했습니다. tiny-slider 에 반응형 옵션을 추가하여 슬라이드 기능은 모바일에서만 작동되도록 구현하였습니다.

![image](https://user-images.githubusercontent.com/83049523/169683814-7f4bcf6e-0710-42c8-8e1b-b4ce0c639aa6.png)

``` javascript
const footerCarousel = tns({
  disable: false,
  container: '.footer-quick-carousel .slider-list',
  items: 4,
  gutter: 25,
  controls: false,
  arrowKeys: true,
  autoplay: true,
  autoplayHoverPause: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  preventScrollOnTouch: 'auto',

  responsive: {
    1200: {
      disable: true,
    },
  }
})
```

## 프로젝트 의의
오늘의 집(리뉴얼-프렌독) 프로젝트를 통해 그리드 시스템과 실제로 실무와 근접한 형태의 코드 관리 방법을 배웠는데, 이를 이화여대라는 사이트를 클론하면서 재정리 하는 시간을 가졌습니다. 더 복잡한 레이아웃 구조를 가진 사이트를 선택하여 작업하고자하였고, 대학교 사이트가 그 조건에 맞았습니다. 하드코딩하는 연습을 위해 순수 자바스크립트로 작성하려 노력했으며 본 프로젝트는 이제껏 배워온 지식과 내용 전부를 쏟은 프로젝트라 할 수 있습니다.
