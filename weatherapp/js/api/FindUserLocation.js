import DisplayWeather from '../controllers/DisplayWeather.js'
import PerformSearch from '../controllers/PerformSearch.js'
import { CoordsFromCityNameApi } from './Api.js'

export default class FindUserlocation {
    #apiKey

    constructor() {
        this.data = {}
        this.#apiKey = '03b92fba65774279cd4a4579ad496ed3'
    }

    success = async (position) => {
        const latitude = position.coords.latitude
        const longitude = position.coords.longitude
        const timeStamp = position.timestamp

        // console.log('Latitude', latitude)
        // console.log('Longitude', longitude)
        // console.log('Timestamp', timeStamp)
        const city = await this.findCity(latitude, longitude)
        this.render(city)
    }

    error = () => {
        console.log(
            'Géolocalisation non autorisée',
            'Impossible de géolocaliser'
        )
    }

    geoFindMe() {
        if (!navigator.geolocation) {
            console.log('Geolocation is not supported by your browser')
        } else {
            // console.log('Navigation GO')
            navigator.geolocation.getCurrentPosition(this.success, this.error)
            return this.data
        }
    }

    async findCity(lat, lon) {
        // const city = 'http://api.openweathermap.org/geo/1.0/direct?q=Beauvoisin&limit={limit}&appid={this.#apiKey}'
        const cityUrl = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=1&appid=${
            this.#apiKey
        }`

        const cityNameApi = await new CoordsFromCityNameApi(cityUrl)
        const cityResult = await cityNameApi.getData()
        const result = cityResult[0].name
        // console.log('Ahahaha', result)
        return result
    }

    async render(name) {
        this.weatherApi = await new PerformSearch(name)
        const weatherData = await this.weatherApi.get()

        const displayer = new DisplayWeather(weatherData)
        displayer.render()
    }
}
