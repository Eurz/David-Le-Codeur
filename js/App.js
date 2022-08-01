// import { PopModal } from './models/PopModal'

import Effects from './effects/index.js'
import Logo from './effects/Logo.js'
import { PopModal } from './models/PopModal.js'
import ProjectLists from './models/ProjectLists.js'

class App {
    constructor() {
        this.projects = new ProjectLists()
        this.effects = new Effects()
        // this.damier = new Damier(4)
        // this.damier.render()
    }

    init() {
        // CONTACT PAGE
        document.addEventListener('DOMContentLoaded', () => {
            this.logo
        })

        const contactContent = `<h3>Retrouvez-moi sur Linkedin</h3>
        <p class="big-icon">
            <a
                href="https://www.linkedin.com/in/david-blard/"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="fa-brands fa-linkedin"></i
            ></a>
        </p>`

        const popModalContact = new PopModal(contactContent)

        document
            .querySelector('.pop-modal-contact')
            .addEventListener('click', () => {
                popModalContact.render()
            })

        // CURSOR
        // document.body.addEventListener('mousemove', (e) => {
        //     const cursor = document.querySelector('.cursor')
        //     cursor.setAttribute(
        //         'style',
        //         `top: ${e.pageY - 10}px; left: ${e.pageX - 10}px`
        //     )
        // })

        // const cursorone = document.querySelector('.cursor')
        // const cursortwo = document.querySelector('.cursor')

        // document.addEventListener('click', () => {
        //     cursorone.classList.add('cursor-display')
        //     cursorone.classList.add('cursor1')
        //     cursortwo.classList.add('cursor2')
        //     // cursor.classList.add('cursor2')
        //     setTimeout(() => {
        //         cursorone.classList.remove('cursor1')
        //         cursortwo.classList.remove('cursor2')
        //     }, 500)
        // })

        // ACTIVE LINKS
        const links = Array.from(document.querySelectorAll(' .nav-main a'))

        let tempLink = links.find((link) => link.classList.contains('active'))
        links.map((link) => {
            link.addEventListener('click', ({ target }) => {
                tempLink.classList.remove('active')
                target.classList.add('active')
                tempLink = target
            })
        })

        // POP LINK
        // const target = document.querySelector('.pop-link')
        // console.log(target)
        // target.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     const mod = new PopModal('Salut les gens')

        //     this.popModal.render()
        // })

        this.projects.render()
    }
}

// const loader = document.querySelector('.loader')
// loader.classList.add('loader-on')
// document.body.appendChild(loader)

// document.addEventListener('DOMContentLoaded', () => {
//     setTimeout(() => {
//         loader.classList.remove('loader-on')
//     }, 2000)
// })

// const cursor = document.querySelector('.cursor')
// document.addEventListener('mousemove', (e) => {
//     cursor.setAttribute('style', `top: ${e.pageY}px; left: ${e.pageX}px`)
// })

const app = new App()
app.init()
