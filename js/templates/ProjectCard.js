import { PopModal } from '../models/PopModal.js'
import ProjectLists from '../viewmodels/ProjectLists.js'

export default class ProjectCard {
    /**
     *
     * @param {Object} project - Project contains: title, description, tag
     */
    constructor(project) {
        this._project = project
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('class', `project pop-link`)
        this.title = `${this._project.title}`
        this.link = this._project.link
        this.image = this._project.image
        this.description = `<p>${this._project.description}</p>`
        this.popModal = new PopModal(
            this.title,
            `<div>${this.description}</div> <a href='${this.link}' target='_blank' class='btn'><i class="fa-solid fa-right-to-bracket"></i>Voir l'application</a> `
        )
        this.isActive = project.isActive
        this.app = project.app
    }

    addListener() {
        this.$wrapper.addEventListener('click', (e) => {
            e.preventDefault()

            this.popModal.render()
        })
    }

    render() {
        const projectCard = `
                <img src="../../img/projects/${this._project.image}" width="250" alt="${this.title}"/>
                <div class="project-description">
                <h3>Projet #${ProjectLists.counter}</h3>
                <p>${this._project.title}</p>
                </div>
            `
        this.$wrapper.innerHTML = projectCard

        if (this._project.isActive) {
            this.addListener()
            this.$wrapper.classList.add('activated')
        }

        return this.$wrapper
    }
}
