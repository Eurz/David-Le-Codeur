// export default class Interactions {
//     constructor() {}
//     toggleNav() {
//         let toggleNav = document.querySelector('.toggle-nav')
//         toggleNav.addEventListener('click', openNav)
//         let navIsOn = false

//         let target = document.querySelector('.nav-main')
//         function openNav(e) {
//             e.preventDefault()
//             console.log('coucou')
//             if (navIsOn) {
//                 // target.style.display = 'none'

//                 e.target.classList.remove('toggle-on')
//                 target.classList.add('small-nav')
//                 target.classList.remove('full-nav')

//                 navIsOn = false
//                 return
//             }
//             navIsOn = true
//             target.classList.add('full-nav')
//             document.body.classList.add('mobile')
//             e.target.classList.add('toggle-on')
//         }
//     }

//     navAnchors() {
//         const anchors = document.querySelectorAll('.js-anchor')

//         anchors.forEach((anchor) => {
//             anchor.addEventListener('click', (e) => {
//                 navIsOn = false
//                 document
//                     .querySelector('.toggle-nav')
//                     .classList.remove('toggle-on')
//                 // e.target.classList.remove('toggle-on')
//                 target.classList.add('small-nav')
//                 target.classList.remove('full-nav')
//             })
//         })
//     }

//     barcodeGenerator() {
//         const barcodeBox = document.querySelector('.barcode')
//         for (let i = 1; i < 20; i++) {
//             const bar = document.createElement('div')
//             bar.style.backgroundColor = '#AE042B'
//             bar.style.width = `${Math.round(this.getRandomArbitrary(2, 20))}px`
//             barcodeBox.appendChild(bar)
//         }
//     }

//     getRandomArbitrary(min, max) {
//         return Math.random() * (max - min) + min
//     }
//     render() {
//         this.toggleNav()
//         this.navAnchors()
//         this.barcodeGenerator()
//     }
// }
// const pop = document.querySelector('.js-popme')
// pop.addEventListener('click', openPop)

// const closeBtn = document.querySelector('.closePop')
// closeBtn.addEventListener('click', closePop)

// function openPop() {
//     document.getElementById('myPop').style.width = '100%'
// }

// /* Close when someone clicks on the "x" symbol inside the overlay */
// function closePop() {
//     document.getElementById('myPop').style.width = '0%'
// }
