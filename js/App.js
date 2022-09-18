// import { PopModal } from './models/PopModal'

import Effects from './librairies/index.js'
import Logo from './librairies/Logo.js'
import { PopModal } from './models/PopModal.js'
import ProjectLists from './viewmodels/ProjectLists.js'

class App {
    constructor() {
        this.projects = new ProjectLists()
        this.effects = new Effects()
    }

    init() {
        // CONTACT PAGE
        document.addEventListener('DOMContentLoaded', () => {
            this.logo
        })

        const contactContent = `
        <p class="big-icon">
            <a
                href="https://www.linkedin.com/in/david-blard/"
                target="_blank"
                rel="noopener noreferrer"
                ><i class="fa-brands fa-linkedin"></i
            ></a>
        </p>`

        const popModalContact = new PopModal('Contact', contactContent)

        document
            .querySelector('.pop-modal-contact')
            .addEventListener('click', () => {
                popModalContact.render()
            })

        // CURSOR

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

        this.projects.render()
    }
}

const app = new App()
app.init()
