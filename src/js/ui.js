'use strict'

import main from './app.js'

const app = main()

function interfaceUI() {
  function selectCurrency() {
    const select = document.querySelector('.select-currency-container')
    const currencyItems = document.querySelectorAll('.select-currency-container li')
    const currencySymbol = document.querySelector('.currency-symbol')

    currencyItems.forEach(currencyItem => {
      currencyItem.addEventListener('click', () => {
        currencySymbol.textContent = currencyItem.textContent
        select.classList.remove('show')
        app.calculateInput()
      })
    })
  }

  function eventDropdown() {
    const dropdown = document.querySelector('.currency-symbol-wrapper')
    const select = document.querySelector('.select-currency-container')

    dropdown.addEventListener('click', () => {
      if (dropdown.classList.contains('active')) {
        select.classList.toggle('show')
        selectCurrency()
      }
    })
  }

  function toggleCurrency() {
    const dropdown = document.querySelector('.currency-symbol-wrapper')
    const currencySymbol = document.querySelector('.currency-symbol')

    const currencyBTC = document.querySelector('.result-symbol').textContent
    const currencyDefault = currencySymbol.textContent

    document.querySelector('.result-symbol').textContent = currencyDefault
    currencySymbol.textContent = currencyBTC

    dropdown.classList.toggle('active')
    document.querySelector('.arrow-down').classList.toggle('show')
  }

  function resizeDueChar() {
    const inputCurrency = document.querySelector('#input-currency')

    inputCurrency.style.width = inputCurrency.value.length + 'ch'
  }

  return {
    eventDropdown,
    toggleCurrency,
    resizeDueChar
  }
}

export default interfaceUI