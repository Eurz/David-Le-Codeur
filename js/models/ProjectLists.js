// import WeatherApp from '../projects/WeatherApp'

import ProjectCard from '../templates/ProjectCard.js'
import Project from './Project.js'

export default class ProjectLists {
    constructor() {
        this.projectsData = [
            {
                title: 'Memory Card Game',
                description:
                    'Dans ce mini-jeu, exercez votre mémoire en trouvant les paires de cartes',
                tag: 'MemoryCardGame',
                image: 'memorygame.jpg',
                isActive: true,
                app: () => {
                    // new WeatherApp()
                },
            },
            {
                title: 'Meteo App',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam aperiam quod dolor, non explicabo eum repudiandae illo, amet minus numquam perspiciatis labore dignissimos consequuntur officia optio officiis ea. Dolore!',
                tag: 'MeteoApp',
                image: 'memorygame.jpg',
                isActive: true,
                app: null,
            },
            {
                title: 'Trouver le mot',
                description:
                    "Votre objectif: trouver le mot caché. Vous n'avez que trois essais ^^",
                tag: 'GuessTheWord',
                image: 'memorygame.jpg',
                isActive: false,
                app: null,
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
        const map = this.projectsData.map((project) => {
            const currentProject = new Project(project)
            return currentProject
        })

        map.forEach((project) => {
            ProjectLists.counter++

            const template = new ProjectCard(project)
            this.$targetWrapper.appendChild(template.render())
        })
    }
}
