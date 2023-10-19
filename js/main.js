const menuSlider1 = document.querySelector("#menuSlider1")
const slider1 = document.querySelector("#sliderFirst")
const about = document.querySelector('.about')
function target(el) {
  let condition1 = false
  for (let index = 0; index < menuSlider1.children.length; index++) {
    if (menuSlider1.children[index] == el) {
      condition1 = true
    }
  }
  if (condition1) {
    for (let index = 0; index < menuSlider1.children.length; index++) {
      if (menuSlider1.children[index] == el && !menuSlider1.children[index].classList.contains('about__benefits-li--active')) {
        menuSlider1.children[index].classList.add('about__benefits-li--active')
        slider1.children[index].classList.remove('ds-none')
      }
      else if (menuSlider1.children[index] == el && menuSlider1.children[index].classList.contains('about__benefits-li--active')) {
      }
      else {
        menuSlider1.children[index].classList.remove('about__benefits-li--active')
        slider1.children[index].classList.add('ds-none')
      }
    }
  }
}

about.addEventListener('click', e => target(e.target))
slider1.addEventListener('touchstart', handleTouchStart3, false)
slider1.addEventListener('touchmove', handleTouchMove3, false)
const styleSliderFirst = window.getComputedStyle(slider1);
let xF = null
let yF = null

function handleTouchStart3(event) {
  const firstTouch = event.touches[0]
  xF = firstTouch.clientX
  yF = firstTouch.clientY
}

function handleTouchMove3(event) {
  if (!xF || !yF) {
    return false
  }
  let x22 = event.touches[0].clientX
  let y22 = event.touches[0].clientY
  let xDiff = x22 - xF
  let yDiff = y22 - yF
  // slider1.style.left = '100px'
  console.log(styleSliderFirst.left)
  let leftPosition = Number(styleSliderFirst.left.slice(0, styleSliderFirst.left.length - 2))
  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      if (leftPosition < 10) {
        slider1.style.left = `${leftPosition + 100}px`
      }
    } else {
      if (leftPosition != -900) {
        slider1.style.left = `${leftPosition - 100}px`
      }
    }
  }
  xF = null
  yF = null
}

const disover1 = document.querySelector('#disover1')
disover1.addEventListener('touchstart', handleTouchStart, false)
disover1.addEventListener('touchmove', handleTouchMove, false)
const disover1Styles = window.getComputedStyle(disover1);
const slides1 = document.querySelectorAll('.slider1__item-img')
let slider = []
for (let index = 0; index < slides1.length; index++) {
  slider[index] = slides1[index].src
}

// console.log(slider)

var step1 = 1

let x = 0
let y = 0

// Отпущена клавиша мыши

let is_active = false

window.onmouseup = function () {
  is_active = false;
  x = 0
  y = 0
}

disover1.onmousedown = function (event) {
  is_active = true;
  x = event.clientX;
  y = event.clientY;
}

disover1.onmousemove = function (event) { myScript(event); };
function myScript(e) {
  if (is_active) {
    if (x < e.clientX - 200) {
      console.log("двигаемся вправо");
      x = e.clientX;
      is_active = false;
      disover1.click()
      step1 += 1
      if (step1 < 1 | step1 > 10) {
        step1 = 2
      }
      disover1.style.left = `${Number(disover1Styles.left.slice(0, disover1Styles.left.length - 2)) - 210}px`
      disover1.innerHTML = disover1.innerHTML + `
  <div class="slider1__item slider__item">
    <p class="slider1__item-title slider__item-title">
      ${step1 - 1}
    </p>
    <img class="slider1__item-img slider__item-img" src="images/dist/slider/grey/${step1 - 1}.png" alt="">
  </div>
  `
    }
    else if (x > e.clientX + 200) {
      console.log("двигаемся влево");
      x = e.clientX;
      myHtml = `
  <div class="slider1__item slider__item">
    <p class="slider1__item-title slider__item-title">
      ${step1}
    </p>
    <img class="slider1__item-img slider__item-img" src="images/dist/slider/grey/${step1}.png" alt="">
  </div>`
      for (let index = 0; index < disover1.children.length; index++) {
        myHtml += `<div class="slider1__item slider__item">` + disover1.children[index].innerHTML + `</div>`
      }
      is_active = false;
      disover1.click()
      step1 += 1

      if (step1 < 1 | step1 > 10) {
        step1 = 2
      }
      console.log(myHtml)
      console.log(disover1.innerHTML)
      disover1.innerHTML = myHtml
      disover1.style.left = `${Number(disover1Styles.left.slice(0, disover1Styles.left.length - 2))}px`
    }
    else {

    };
  }
};

let x1 = null
let y1 = null

function handleTouchStart(event) {
  const firstTouch = event.touches[0]
  x1 = firstTouch.clientX
  y1 = firstTouch.clientY
}

function handleTouchMove(event) {
  if (!x1 || !y1) {
    return false
  }
  let x2 = event.touches[0].clientX
  let y2 = event.touches[0].clientY
  let xDiff = x2 - x1
  let yDiff = y2 - y1

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      console.log('left')
      // console.log(`${Number(disover1Styles.left.slice(0, disover1Styles.left.length - 2)) + 210}px`)
      disover1.style.left = `${Number(disover1Styles.left.slice(0, disover1Styles.left.length - 2)) - 210}px`
    } else {
      console.log('right')
      // console.log(`${Number(disover1Styles.left.slice(0, disover1Styles.left.length - 2)) + 210}px`)
      disover1.style.left = `${Number(disover1Styles.left.slice(0, disover1Styles.left.length - 2)) + 210}px`
    }
  }
  x1 = null
  y1 = null
}

// 2 слайдер \\\\\\\\\\\\\\\\\\\\\\\\\\\\

const disover2 = document.querySelector('#disover2')
const disover1Styles2 = window.getComputedStyle(disover2);
const slides2 = document.querySelectorAll('.slider1__item-img')
let slider2 = []
for (let index = 0; index < slides2.length; index++) {
  slider2[index] = slides2[index].src
}

// console.log(slider)

var step2 = 1

let xSecond = 0
let ySecond = 0

// Отпущена клавиша мыши

let is_activeSecond = false

window.onmouseup = function () {
  is_activeSecond = false;
  xSecond = 0
  ySecond = 0
}

disover2.onmousedown = function (event) {
  is_activeSecond = true;
  xSecond = event.clientX;
  ySecond = event.clientY;
}

disover2.onmousemove = function (event) { myScript2(event); };
function myScript2(e) {
  if (is_activeSecond) {
    if (xSecond < e.clientX - 200) {
      console.log("двигаемся вправо");
      xSecond = e.clientX;
      is_activeSecond = false;
      disover2.click()
      step2 += 1
      if (step1 < 1 | step1 > 10) {
        step2 = 2
      }
      disover2.style.left = `${Number(disover1Styles2.left.slice(0, disover1Styles2.left.length - 2)) - 210}px`
      disover2.innerHTML = disover2.innerHTML + `
  <div class="slider1__item slider__item">
    <p class="slider1__item-title slider__item-title">
      ${step2 - 1}
    </p>
    <img class="slider1__item-img slider__item-img" src="images/dist/slider/grey/${step2 - 1}.png" alt="">
  </div>
  `
    }
    else if (xSecond > e.clientX + 200) {
      console.log("двигаемся влево");
      xSecond = e.clientX;
      myHtml = `
  <div class="slider1__item slider__item">
    <p class="slider1__item-title slider__item-title">
      ${step2}
    </p>
    <img class="slider1__item-img slider__item-img" src="images/dist/slider/grey/${step2}.png" alt="">
  </div>`
      for (let index = 0; index < disover2.children.length; index++) {
        myHtml += `<div class="slider1__item slider__item">` + disover2.children[index].innerHTML + `</div>`
      }
      is_activeSecond = false;
      disover2.click()
      step2 += 1

      if (step2 < 1 | step2 > 10) {
        step2 = 2
      }
      disover2.innerHTML = myHtml
      disover2.style.left = `${Number(disover1Styles2.left.slice(0, disover1Styles2.left.length - 2))}px`
    }
    else {

    };
  }
};

disover2.addEventListener('touchstart', handleTouchStart2, false)
disover2.addEventListener('touchmove', handleTouchMove2, false)

let x11 = null
let y11 = null

function handleTouchStart2(event) {
  const firstTouch = event.touches[0]
  x11 = firstTouch.clientX
  y11 = firstTouch.clientY
}

function handleTouchMove2(event) {
  if (!x11 || !y11) {
    return false
  }
  let x22 = event.touches[0].clientX
  let y22 = event.touches[0].clientY
  let xDiff = x22 - x11
  let yDiff = y22 - y11

  if (Math.abs(xDiff) > Math.abs(yDiff)) {
    if (xDiff > 0) {
      console.log('left')
      console.log(`${Number(disover1Styles2.left.slice(0, disover1Styles2.left.length - 2)) + 210}px`)
      disover2.style.left = `${Number(disover1Styles2.left.slice(0, disover1Styles2.left.length - 2)) - 210}px`
    } else {
      console.log('right')
      console.log(`${Number(disover1Styles2.left.slice(0, disover1Styles2.left.length - 2)) + 210}px`)
      disover2.style.left = `${Number(disover1Styles2.left.slice(0, disover1Styles2.left.length - 2)) + 210}px`
    }
  }
  x11 = null
  y11 = null
}