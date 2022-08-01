import { PopModal } from '../models/PopModal.js'
import ProjectLists from '../models/ProjectLists.js'

export default class ProjectCard {
    /**
     *
     * @param {Object} project - Project contains: title, description, tag
     */
    constructor(project) {
        this._project = project
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute(
            'class',
            `project pop-link ${project.className}`
        )
        this.title = `<h3>${this._project.title}</h3>`
        this.description = `<p>${this._project.description}</p>`
        this.className = this._project.className
        this.popModal = new PopModal(
            `${this.title} ${this.description} <a href='./weatherapp' target='_blank' class='btn'>Lancer</a> `
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
                <div class="project-title">
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
