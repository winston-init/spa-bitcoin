'use strict'

function main() {
  function calculateInput() {
    const inputCurrency = document.querySelector('#input-currency')
    const outputCurrency = document.querySelector('.result-content')

    const output = inputCurrency.value * 0.00012

    outputCurrency.textContent = output

  }

  return {
    calculateInput
  }
}

export default main