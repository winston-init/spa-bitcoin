'use strict'

function currencyStrategy(strategy, api, currency) {
  function calculate() {
    strategy(api, currency)
  }

  return {
    calculate
  }
}

function cryptocurrency(api, currency) {
  const inputCurrency = document.querySelector('#input-currency')
  const outputCurrency = document.querySelector('.result-content')

  const worth = api.bpi[`${currency}`].rate
  const output = inputCurrency.value * parseFloat(worth.replace(',', ''))

  if (output === 0) outputCurrency.textContent = output
  else outputCurrency.textContent = output.toFixed(2)
}

function nonCryptocurrency(api, currency) {
  const inputCurrency = document.querySelector('#input-currency')
  const outputCurrency = document.querySelector('.result-content')

  const worth = api.bpi[`${currency}`].rate 
  const output = inputCurrency.value / parseFloat(worth.replace(',', ''))

  let floatSplited = output.toString().split('.')

  if (floatSplited.length == 1) floatSplited.push("0")

  if (output.toString().length > 7 && floatSplited[1] !== "0") {
    outputCurrency.textContent = output.toFixed(7)
  } else {
    outputCurrency.textContent = output
  }
}

export { currencyStrategy, cryptocurrency, nonCryptocurrency }