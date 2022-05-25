class ProjectCard {
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
        this.popModal = new PopModal(`${this.title} ${this.description}`)
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
                <h3>Projet #${ProjectData.counter}</h3>
                <p>${this._project.title}</p>
                </div>
            `
        this.$wrapper.innerHTML = projectCard

        if (this._project.isActive) {
            this.addListener()
        } else {
            this.$wrapper.style.opacity = 0.5
            this.$wrapper.style.cursor = 'not-allowed'
        }
        return this.$wrapper
    }
}
