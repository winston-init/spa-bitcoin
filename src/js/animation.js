'use strict'

import interfaceUI from './ui.js'

const ui = interfaceUI()

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

    let count = 0

    switchOrder.addEventListener('click', () => {
      switchOrder.classList.add('animation')

      const firstCurrency = document.querySelector('.first-currency')
      const secondCurrency = document.querySelector('.second-currency')

      count++

      ui.activeDropdown(firstCurrency)
      ui.activeDropdown(secondCurrency)

      if (count % 2 === 1) {
        ui.toggleInput(firstCurrency, secondCurrency)
      } else if (count % 2 === 0) {
        ui.toggleInput(secondCurrency, firstCurrency)
      }

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