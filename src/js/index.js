const arrow = document.querySelector('.arrow')
const header = document.querySelector('header')

window.addEventListener('scroll', (e) => {
    if (scrollY >= 700) header.classList.add('sticky')
    else header.classList.remove('sticky')
})

arrow.addEventListener('click', () => {
    header.classList.add('sticky')
})