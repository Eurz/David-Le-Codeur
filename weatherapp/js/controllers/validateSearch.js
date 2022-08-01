export default function validateSearch(e) {
    if (inputSearch.value.length > 3) {
        const cityData = fetch(
            'https://api.openweathermap.org/data/2.5/weather?q=' +
                inputSearch.value +
                '&apikey=' +
                apiKey +
                '&lang=fr&units=metric'
        )
            .then((response) => {
                if (!response.ok) {
                    return
                }
                return response.json()
            })
            .then((data) => {
                main(true, {
                    latitude: data.coord.lat,
                    longitude: data.coord.lon,
                    city: data.name,
                })
            })
            .catch((e) =>
                messageBox.displayMessage(`Cette ville n'existe pas `)
            )
        inputSearch.value = ''
    } else {
        messageBox.message = 'Veuillez saisir au moins 4 caractères'
    }
}
