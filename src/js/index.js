'use strict'

const arrow = document.querySelector('.arrow')
const header = document.querySelector('header')

window.addEventListener('scroll', (e) => {
    if (scrollY >= 650) header.classList.add('sticky')
    else header.classList.remove('sticky')
})

arrow.addEventListener('click', () => {
    header.classList.add('sticky')
})

const inputCurrency = document.querySelector('#input-currency')

function resizeInput() {
    this.style.width = this.value.length + "ch"
}

inputCurrency.addEventListener('input', resizeInput)
resizeInput.call(inputCurrency)