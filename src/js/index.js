'use strict'

// sticky animation

const arrow = document.querySelector('.arrow')
const header = document.querySelector('header')

window.addEventListener('scroll', (e) => {
    if (scrollY >= 650) header.classList.add('sticky')
    else header.classList.remove('sticky')
})

arrow.addEventListener('click', () => {
    header.classList.add('sticky')
})

// Output logic
const inputCurrency = document.querySelector('#input-currency')
const outputCurrency = document.querySelector('#output-currency')

function calculateOutput() {
    const newValue = inputCurrency.value * 5.48

    outputCurrency.value = newValue.toFixed(2)
}

calculateOutput()

inputCurrency.addEventListener('input', calculateOutput)

// increase length of input according with chracters

function resizeInput(e) {
    this.style.width = this.value.length + "ch"
}

const increaseOutputWidth = async () => {
    await calculateOutput()
    // asynchronous method

    outputCurrency.style.width = outputCurrency.value.length + 'ch'
}

inputCurrency.addEventListener('input', resizeInput)
resizeInput.call(inputCurrency)

inputCurrency.addEventListener('input', increaseOutputWidth)

outputCurrency.addEventListener('input', resizeInput)
resizeInput.call(outputCurrency)

// initialize input with 0

inputCurrency.value = 0;