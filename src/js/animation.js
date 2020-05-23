'use strict'

import interfaceUI from './ui.js'
import main from './app.js'

const ui = interfaceUI()
const app = main()

function animationUI() {
  function scrollWindow() {
    const header = document.querySelector('header')

    function holdStickyHeader(e) {
      if (scrollY >= window.innerHeight) header.classList.add('sticky')
      else header.classList.remove('sticky')
    }

    window.addEventListener('scroll', holdStickyHeader)
  }

  function clickToScroll() {
    const header = document.querySelector('header')

    const arrow = document.querySelector('.scroll-arrow')

    arrow.addEventListener('click', () => {
      header.classList.add('sticky')
      window.scrollTo(0, window.innerHeight + 20)
    })
  }

  function switchOrder() {
    const switchOrder = document.querySelector('.switch-order')

    function holdSwitchOrder() {
      switchOrder.classList.add('animation')

      ui.toggleCurrency()
      app.calculateInput()

      setTimeout(() => {
        switchOrder.classList.remove('animation')
      }, 800)
    }

    switchOrder.addEventListener('click', holdSwitchOrder)
  }

  return {
    scrollWindow,
    clickToScroll,
    switchOrder
  }
}

export default animationUI