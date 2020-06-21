'use strict'

import { currencyStrategy, cryptocurrency, nonCryptocurrency } from './strategy.js'

function main() {
  function calculateInput() {
    const currency = document.querySelector('.currency-symbol').textContent

    let currencyString, type

    if (currency !== 'BTC') {
      currencyString = currency
      type = nonCryptocurrency
    } else {
      currencyString = document.querySelector('.result-symbol').textContent
      type = cryptocurrency
    }

    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currencyString}.json`)
      .then(response => response.json())
      .then(data => {
        const currencyType = currencyStrategy(type, data, currencyString)
        currencyType.calculate()
      })
      .catch(() => {
        console.log('Oops... something went wrong!!!')
      })
  }

  return {
    calculateInput
  }
}

export default main