'use strict'

import animationUI from './animation.js'
import interfaceUI from './ui.js'
import main from './app.js'

const animation = animationUI()
const ui = interfaceUI()
const app = main()

ui.eventDropdown()

animation.scrollWindow()
animation.clickToScroll()
animation.switchOrder()

const inputCurrency = document.querySelector('#input-currency')

inputCurrency.value = 0;

app.calculateInput()

inputCurrency.addEventListener('input', () => {
  app.calculateInput()
  ui.resizeDueChar()
})


