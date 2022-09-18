import ProjectCard from '../templates/ProjectCard.js'
import Project from './Project.js'

export default class ProjectLists {
    constructor() {
        this.projectsData = [
            {
                title: 'Application Meteo',
                description:
                    '<p>Une application météo proposant des fonctionnalités basiques :</p><ul><li>météo géolocalisée selon votre position</li><li>météo par ville</li><li> météo quotidienne et par heure</li></ul> ',
                image: 'meteoapp.jpg',
                isActive: true,
                link: 'https://david-meteo-app.herokuapp.com/',
            },
            {
                title: 'Dice Game',
                description: `<p>Le jeu comprend 2 joueurs sur un seul et même écran. </p>
                    <p>Chaque joueur possède un score temporaire (ROUND) et un score global (GLOBAL).</p>
                   <p>Le premier à obtenir un score global de 100 points gagne la partie</p>`,
                image: 'diceapp.jpg',
                isActive: true,
                link: 'https://eurz.github.io/',
            },
            {
                title: 'Memory Card Game',
                description:
                    '<p>Dans ce mini-jeu, exercez votre mémoire en trouvant les paires de cartes</p>',
                image: 'meteoapp.jpg',
                isActive: false,
                link: '#',
            },
            {
                title: 'Trouver le mot',
                description:
                    "<p>Votre objectif: trouver le mot caché. Vous n'avez que trois essais ^^</p>",
                image: 'meteoapp.jpg',
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
