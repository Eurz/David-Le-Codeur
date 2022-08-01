const apiKey = '03b92fba65774279cd4a4579ad496ed3'
const maVille = 'Beauvoisin'
const defaultCoords = { lon: 4.3234, lat: 43.7183 }
const defaultData = {
    latitude: 48.8588897,
    longitude: 2.3200410217200766,
    city: 'Paris',
}

// const meteo = await fetch(
//     'https://api.openweathermap.org/data/2.5/weather?q=' +
//         maVille +
//         '&apikey=' +
//         apiKey +
//         '&lang=fr&units=metric'
// )

// 'https://api.openweathermap.org/data/2.5/onecall?lat=43.7157888&lon=4.325376&apikey=03b92fba65774279cd4a4579ad496ed3&lang=fr&units=metric')
// 'https://api.openweathermap.org/data/2.5/weather?q=beauvoisin&apikey=03b92fba65774279cd4a4579ad496ed3&lang=fr&units=metric')

export { apiKey, maVille, defaultData }
