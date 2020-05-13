'use strict'

function interfaceUI() {
  const currency = {
    firstCurrency: document.querySelector('.first-currency'),
    secondCurrency: document.querySelector('.second-currency')
  }

  const { firstCurrency, secondCurrency } = currency

  function selectCurrency(currency) {
    const currencyItems = currency.querySelectorAll('.select-currency-container li')
    const select = currency.querySelector('.select-currency-container')
    const currencySymbol = currency.querySelector('.currency-symbol')


    currencyItems.forEach(currencyItem => {
      currencyItem.addEventListener('click', () => {
        currencySymbol.textContent = currencyItem.textContent
        select.classList.remove('show')
      })
    })
  }

  function eventDropdown(currency) {
    const dropdown = currency.querySelector('.currency-symbol-wrapper')
    const select = currency.querySelector('.select-currency-container')

    dropdown.addEventListener('click', () => {
      if (dropdown.classList.contains('active')) {
        select.classList.toggle('show')
        selectCurrency(currency)
      }
    })
  }

  function dropdownFirstCurrency() {
    eventDropdown(firstCurrency)
  }

  function dropdownSecondCurrency() {
    eventDropdown(secondCurrency)
  }

  function activeDropdown(currency) {
    currency.querySelector('.currency-symbol-wrapper').classList.toggle('active')
    currency.querySelector('.select-currency-container').classList.toggle('active')
  }

  function toggleInput(currentCurrency, newCurrency) {
    const content = {
      newSymbol: newCurrency.querySelector('.currency-symbol').textContent,
      currentSymbol: currentCurrency.querySelector(".currency-symbol").textContent
    }

    const { newSymbol, currentSymbol } = content

    newCurrency.querySelector('.currency-symbol').textContent = currentSymbol
    currentCurrency.querySelector('.currency-symbol').textContent = newSymbol

    newCurrency.querySelector('.arrow-down').classList.add('show')
    currentCurrency.querySelector('.arrow-down').classList.remove('show')
  }

  return {
    dropdownFirstCurrency,
    dropdownSecondCurrency,
    activeDropdown,
    toggleInput
  }
}

export default interfaceUI