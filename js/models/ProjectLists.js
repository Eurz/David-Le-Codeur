import ProjectCard from '../templates/ProjectCard.js'
import Project from './Project.js'

export default class ProjectLists {
    constructor() {
        this.projectsData = [
            {
                title: 'Meteo App',
                description:
                    'Une application météo proposant des fonctionnalités basiques :<br/> - météo géolocalisée selon votre position<br/> - météo par ville<br/>- météo quotidienne et par heure ',
                tag: 'MeteoApp',
                className: 'meteoapp-project',
                isActive: true,
                link: '#',
            },
            {
                title: 'Memory Card Game',
                description:
                    'Dans ce mini-jeu, exercez votre mémoire en trouvant les paires de cartes',
                tag: 'MemoryCardGame',
                className: 'memorygame-project',
                isActive: false,
                link: '#',
            },
            {
                title: 'Trouver le mot',
                description:
                    "Votre objectif: trouver le mot caché. Vous n'avez que trois essais ^^",
                tag: 'GuessTheWord',
                className: 'findtheword-project.jpg',
                isActive: false,
                link: '#',
            },
        ]

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
