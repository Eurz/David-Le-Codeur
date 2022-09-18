import ProjectCard from '../templates/ProjectCard.js'
import Project from '../models/Project.js'
import { getApps } from '../data.js'

export default class ProjectLists {
    constructor() {
        this.projectsData = getApps()

        this.$targetWrapper = document.querySelector('.projects-list')
        ProjectLists.counter = 0
    }

    /**
     *
     * @returns Number of projects
     */
    getcounter() {
        return ProjectLists.projectsData
    }

    /**
     * Render the list of project in the html
     */
    render() {
        const projects = this.projectsData.map((project) => {
            const currentProject = new Project(project)
            return currentProject
        })

        projects.forEach((project) => {
            ProjectLists.counter++

            const template = new ProjectCard(project)
            this.$targetWrapper.appendChild(template.render())
        })
    }
}
