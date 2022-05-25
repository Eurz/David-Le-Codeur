class ProjectData {
    constructor() {
        this.projectsData = [
            {
                title: 'Memory Card Game',
                description:
                    'Dans ce mini-jeu, exercez votre mémoire en trouvant les paires de cartes',
                tag: 'MemoryCardGame',
                isActive: true,
            },
            {
                title: 'Meteo App',
                description:
                    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus laboriosam aperiam quod dolor, non explicabo eum repudiandae illo, amet minus numquam perspiciatis labore dignissimos consequuntur officia optio officiis ea. Dolore!',
                tag: 'MeteoApp',
                isActive: false,
            },
            {
                title: 'Trouver le mot',
                description:
                    "Votre objectif: trouver le mot caché. Vous n'avez que trois essais ^^",
                tag: 'GuessTheWord',
                isActive: false,
            },
        ]
        this.$targetWrapper = document.querySelector('.projects-list')
        ProjectData.counter = 0
    }

    getcounter() {
        return ProjectData.projectsData
    }

    render() {
        const map = this.projectsData.map((project) => new Project(project))

        map.forEach((project) => {
            ProjectData.counter++

            const template = new ProjectCard(project)
            this.$targetWrapper.appendChild(template.render())
        })
    }
}
