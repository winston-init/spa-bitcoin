'use strict'

function currencyStrategy(strategy, api, currency) {
  const calculate = () => strategy(api, currency)

  return {
    calculate
  }
}

const inputCurrency = document.querySelector('#input-currency')
const outputCurrency = document.querySelector('.result-content')

let worth, output

function cryptocurrency(api, currency) {
  worth = api.bpi[`${currency}`].rate
  output = inputCurrency.value * parseFloat(worth.replace(',', ''))

  if (output === 0) outputCurrency.textContent = output
  else outputCurrency.textContent = output.toFixed(2)
}

function nonCryptocurrency(api, currency) {
  worth = api.bpi[`${currency}`].rate 
  output = inputCurrency.value / parseFloat(worth.replace(',', ''))

  let floatSplited = output.toString().split('.')

  if (floatSplited.length == 1) floatSplited.push("0")

  if (output.toString().length > 7 && floatSplited[1] !== "0") outputCurrency.textContent = output.toFixed(7)
  else outputCurrency.textContent = output
}

export { currencyStrategy, cryptocurrency, nonCryptocurrency }