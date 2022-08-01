document
    .querySelectorAll('.js-modal')
    .forEach((a) => a.addEventListener('click', openModal))

let modal = null
let id = null
function openModal(e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.style.width = '100%'
    const content = document.querySelector(
        `${e.target.getAttribute('href')} .modal-content`
    )
    setTimeout(() => {
        content.classList.add('modal-on')
    }, 200)

    console.log(content)
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-close-modal').addEventListener('click', closeModal)
    modal
        .querySelector('.modal-content')
        .addEventListener('click', stopPropagation)
}

function closeModal(e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = 'none'
    console.log(modal)
    e.target.classList.remove('modal-on')
    modal.querySelector('.modal-content').classList.remove('modal-on')
    modal.removeEventListener('click', closeModal)
    modal
        .querySelector('.js-close-modal')
        .removeEventListener('click', closeModal)
    modal
        .querySelector('.modal-content')
        .removeEventListener('click', stopPropagation)

    modal = null
}

const stopPropagation = (e) => {
    e.stopPropagation()
}

const barcodeBox = document.querySelector('.barcode')
for (let i = 1; i < 20; i++) {
    const bar = document.createElement('div')
    bar.style.backgroundColor = '#AE042B'
    bar.style.width = `${Math.round(getRandomArbitrary(2, 20))}px`
    barcodeBox.appendChild(bar)
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min
}
/**** ANCHORS  ****/
// document
//     .querySelectorAll('.js-anchor')
//     .forEach((a) => a.addEventListener('click', targetDiv))

// function targetDiv(e) {
//     e.preventDefault()
//     const target = document.querySelector(e.target.getAttribute('href'))
//     target.classList.add('anchor-modal-on')
//     setTimeout(() => {
//         target.classList.remove('anchor-modal-on')
//     }, 300)
//     console.log(e)
// }

// let options = {
//     root: null,
//     rootMargin: '0px',
//     threshold: 0.2,
// }
// let callback = function (entries, observer) {
//     console.log(entries)
//     entries.forEach((entry) => {
//         // chaque élément de entries correspond à une variation
//         // d'intersection pour un des éléments cible:
//         // entry.boundingClientRect
//         //   entry.intersectionRatio
//         //   entry.intersectionRect
//         //   entry.isIntersecting
//         //   entry.rootBounds
//         //   entry.target
//         //   entry.time
//     })
// }
// let observer = new IntersectionObserver(callback, options)

// let target = document.querySelector('.main.row')
// observer.observe(target)

// const link = document.querySelector('.active')
// link.addEventListener('click', async (e) => {
//     e.preventDefault()
//     window.scrollTo({
//         top: 1000,
//         behavior: 'smooth',
//     })
// })

let toggleNav = document.querySelector('.toggle-nav')
toggleNav.addEventListener('click', openNav)
let navIsOn = false

let target = document.querySelector('.nav-main')
function openNav(e) {
    if (navIsOn) {
        // target.style.display = 'none'

        e.target.classList.remove('toggle-on')
        target.classList.add('small-nav')
        target.classList.remove('full-nav')

        navIsOn = false
        return
    }
    navIsOn = true
    target.classList.add('full-nav')
    document.body.classList.add('mobile')
    e.target.classList.add('toggle-on')
    // e.target.preventDefault()
}

const anchors = document.querySelectorAll('.js-anchor')

anchors.forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
        navIsOn = false
        document.querySelector('.toggle-nav').classList.remove('toggle-on')
        // e.target.classList.remove('toggle-on')
        target.classList.add('small-nav')
        target.classList.remove('full-nav')
    })
})

const pop = document.querySelector('.js-popme')
pop.addEventListener('click', openPop)

const closeBtn = document.querySelector('.closePop')
closeBtn.addEventListener('click', closePop)
function openPop() {
    document.getElementById('myPop').style.width = '100%'
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closePop() {
    document.getElementById('myPop').style.width = '0%'
}
