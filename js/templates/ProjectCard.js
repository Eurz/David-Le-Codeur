import { fullScreenModal, PopModal } from '../models/PopModal.js'
import ProjectLists from '../models/ProjectLists.js'

export default class ProjectCard {
    /**
     *
     * @param {Object} project - Project contains: title, description, tag
     */
    constructor(project) {
        this._project = project
        this.$wrapper = document.createElement('div')
        this.$wrapper.setAttribute('class', 'project pop-link')
        this.title = `<h3>${this._project.title}</h3>`
        this.description = `<p>${this._project.description}</p>`
        this.popModal = fullScreenModal(
            new PopModal(`${this.title} ${this.description}`),
            this
        )
        this.app = project.app
    }

    addListener() {
        this.$wrapper.addEventListener('click', (e) => {
            e.preventDefault()

            this.popModal.render()
            // this.popModal.buttonCreateProject()
        })
    }

    render() {
        const projectCard = `
                <div class="project-title">
                <h3>Projet #${ProjectLists.counter}</h3>
                <p>${this._project.title}</p>
                </div>
            `
        // this.$wrapper.style.backgroundImage = `url(./img/projects/${this._project.image})`
        this.$wrapper.innerHTML = projectCard

        if (this._project.isActive) {
            this.addListener()
            this.$wrapper.classList.add('activated')
        }
        //  else {
        //     this.$wrapper.style.opacity = 0.5
        //     this.$wrapper.style.cursor = 'not-allowed'
        // }
        return this.$wrapper
    }
}
