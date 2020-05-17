'use strict'

import { currencyStrategy, cryptocurrency, nonCryptocurrency } from './strategy.js'

function main() {
  function requestAPI(url, method) {
    return new Promise((resolve, reject) => {
      const request = new XMLHttpRequest()

      request.open(url, method, true)

      request.onload = () => {
        if (request.status == 200) {
          resolve(JSON.parse(request.responseText))
        }
      }

      request.onerror = () => reject('Oops... Something went wrong!')
      request.send()
    })
  }

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

    const url = `https://api.coindesk.com/v1/bpi/currentprice/${currencyString}.json`

    requestAPI('GET', url)
      .then(response => {
        const currencyType = currencyStrategy(type, response, currencyString)
        currencyType.calculate()
      })
      .catch(error => {
        console.error(error)
      })
  }

  return {
    calculateInput
  }
}

export default main