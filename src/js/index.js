'use strict'

import stickyHeader from './animation.js'
import interfaceUI from './ui.js'

const animation = stickyHeader()
const ui = interfaceUI()

ui.dropdownFirstCurrency()
ui.dropdownSecondCurrency()

animation.scrollWindow()
animation.clickToScroll()

// Output logic
const inputCurrency = document.querySelector('#input-currency')
const outputCurrency = document.querySelector('#output-currency')

function calculateOutput() {
  const newValue = inputCurrency.value * 0.00012

  if (newValue.toString().length >= 10) outputCurrency.value = newValue.toFixed(14)
  else outputCurrency.value = newValue
}

calculateOutput()

inputCurrency.addEventListener('input', calculateOutput)

// increase length of input according with chracters
function resizeInput(e) {
  this.style.width = this.value.length + "ch"
}

const increaseOutputWidth = async () => {
  await calculateOutput()
  // asynchronous method

  outputCurrency.style.width = outputCurrency.value.length + 'ch'
}

inputCurrency.addEventListener('input', resizeInput)
resizeInput.call(inputCurrency)

inputCurrency.addEventListener('input', increaseOutputWidth)

outputCurrency.addEventListener('input', resizeInput)
resizeInput.call(outputCurrency)

// initialize input with 0
inputCurrency.value = 0;

// animation switch order