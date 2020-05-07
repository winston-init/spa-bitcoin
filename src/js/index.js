const arrow = document.querySelector('.arrow')
const header = document.querySelector('header')

window.addEventListener('scroll', (e) => {
    console.log(scrollY)
    header.classList.add('sticky')
})

arrow.addEventListener('click', () => {
    header.classList.add('sticky')
})