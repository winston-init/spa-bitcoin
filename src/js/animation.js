'use strict'

import interfaceUI from './ui.js'
import main from './app.js'

const ui = interfaceUI()
const app = main()

function stickyHeader() {
  function scrollWindow() {
    const header = document.querySelector('header')
    
    window.addEventListener('scroll', (e) => {
      if (scrollY >= window.innerHeight) header.classList.add('sticky')
      else header.classList.remove('sticky')
    })
  }

  function clickToScroll() {
    const arrow = document.querySelector('.scroll-arrow')

    arrow.addEventListener('click', () => {
      header.classList.add('sticky')
    })
  }

  function switchOrder() {
    const switchOrder = document.querySelector('.switch-order')

    switchOrder.addEventListener('click', () => {
      switchOrder.classList.add('animation')

      ui.toggleCurrency()
      app.calculateInput()

      setTimeout(() => {
        switchOrder.classList.remove('animation')
      }, 800)
    })
  }

  return {
    scrollWindow,
    clickToScroll,
    switchOrder
  }
}

export default stickyHeader