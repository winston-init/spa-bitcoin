'use strict'

function main() {
  function calculateInput() {
    const url = 'https://api.coindesk.com/v1/bpi/currentprice/USD.json'

    const inputCurrency = document.querySelector('#input-currency')
    const outputCurrency = document.querySelector('.result-content')

    const xhr = new XMLHttpRequest()

    xhr.open('GET', url, true)

    xhr.onload = function() {
      if (this.status == 200) {
        const currency = JSON.parse(this.responseText)

        const worth = currency.bpi['USD'].rate

        const output = inputCurrency.value / parseFloat(worth.replace(',', ''))

        if (output.toString().length > 5) outputCurrency.textContent = output.toFixed(5)
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