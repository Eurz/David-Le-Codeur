export const getApps = () => {
    const data = [
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
            description: `<p>Le jeu Dice Game comprend 2 joueurs sur un seul et même écran. </p>
                <p>Le but est d'atteindre le premier les 100 points</p>`,
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

    return data
}
