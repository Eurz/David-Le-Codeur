// import { PopModal } from './models/PopModal'

class App {
    constructor() {
        this.projects = new ProjectData()
        this.logo = new Logo()
    }

    init() {
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

const app = new App()
app.init()
// App.init()
