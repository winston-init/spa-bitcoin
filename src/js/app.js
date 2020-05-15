'use strict'

function main() {
  function calculateInput() {
    const currency = document.querySelector('.currency-symbol').textContent

    const url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
    console.log(url)

    const inputCurrency = document.querySelector('#input-currency')
    const outputCurrency = document.querySelector('.result-content')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = function() {
      if (this.status == 200) {
        const res = JSON.parse(this.responseText)

        const worth = res.bpi[`${currency}`].rate
        console.log(currency)

        const output = inputCurrency.value / parseFloat(worth.replace(',', ''))

        if (output.toString().length > 7) outputCurrency.textContent = output.toFixed(7)
        else outputCurrency.textContent = output
      }
    }

    xhr.send()
  }

  return {
    calculateInput
  }
}

export default main