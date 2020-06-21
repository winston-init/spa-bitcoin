'use strict'

import interfaceUI from './ui.js'
import main from './app.js'

const ui = interfaceUI()
const app = main()

function animationUI() {
  function animateSticky(element) {
    element.classList.add('sticky')
  }

  function unanimateSticky(element) {
    element.classList.remove('sticky')
  }

  function showStickyHeader() {
    const header = document.querySelector('header')

    window.addEventListener('scroll', () => {
      scrollY >= window.innerHeight
      ? animateSticky(header)
      : unanimateSticky(header)
    })
  }

  function animateScroll() {
    window.scrollTo(0, window.innerHeight + 20)
  }

  function clickOnArrowToScroll() {
    const arrow = document.querySelector('.scroll-arrow')

    arrow.addEventListener('click', animateScroll)
  }

  function animateSwitch(element) {
    element.classList.add('animation')

    setTimeout(() => {
      element.classList.remove('animation')
    }, 800)
  }

  function switchOrder() {
    const switchOrder = document.querySelector('.switch-order')

    switchOrder.addEventListener('click', () => {
      animateSwitch(switchOrder)

      ui.toggleCurrency()
      app.calculateInput()
    })
  }

  return {
    showStickyHeader,
    clickOnArrowToScroll,
    switchOrder
  }
}

export default animationUI