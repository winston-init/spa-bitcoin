'use strict'

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
    const resultSymbol = document.querySelector('.result-symbol').textContent

    let url

    if (currency !== 'BTC') {
      url = `https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`
    } else {
      url = `https://api.coindesk.com/v1/bpi/currentprice/${resultSymbol}.json`
    }

    const inputCurrency = document.querySelector('#input-currency')
    const outputCurrency = document.querySelector('.result-content')

    requestAPI('GET', url)
      .then(response => {
        let worth

        if (currency !== 'BTC') {
          worth = response.bpi[`${currency}`].rate
        } else {
          worth = response.bpi[`${resultSymbol}`].rate
        }

        let output

        if (currency !== 'BTC') {
          output = inputCurrency.value / parseFloat(worth.replace(',', ''))
        } else {
          output = inputCurrency.value * parseFloat(worth.replace(',', ''))
        }

        if (currency !== 'BTC') {
          if (output.toString().length > 7) outputCurrency.textContent = output.toFixed(7)
          else outputCurrency.textContent = output
        } else {
          if (output === 0) {
            outputCurrency.textContent = output
          } else {
            outputCurrency.textContent = output.toFixed(2)
          }
        }
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