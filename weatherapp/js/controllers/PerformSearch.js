import { WeatherApi } from '../api/Api.js'
import MessageBox from '../utils/MessageBox.js'

export default class PerformSearch {
    #url
    constructor(cityName) {
        this._cityName = cityName
        this.#url = ''
        this.cityData = {}
        this.fullData = []
        this.messageBox = new MessageBox()
    }

    async getCityCoords() {
        const countryApi = new WeatherApi(
            `https://api.openweathermap.org/geo/1.0/direct?q=${this._cityName}&limit=1&appid=03b92fba65774279cd4a4579ad496ed3`
        )

        const countryData = await countryApi.get()

        if (countryData.length === 0) {
            // throw new Error('Aucune ville correspondante')

            this.cityData = {
                name: localStorage.getItem('currentCity'),
                lon: localStorage.getItem('longitude'),
                lat: localStorage.getItem('latitude'),
            }

            this.messageBox.displayMessage(
                'Aucune ville ne correspond à votre recherche'
            )
            return
        }

        const { name, lon, lat } = countryData[0]
        this.messageBox.displayMessage(`Ville trouvée : ${name}`)

        localStorage.setItem('currentCity', name)
        localStorage.setItem('longitude', lon)
        localStorage.setItem('latitude', lat)

        this.cityData = { name, lon, lat }
    }

    async getData() {
        await this.getCityCoords()

        const url = new URL('https://api.openweathermap.org/data/2.5/onecall')
        url.searchParams.set('lat', this.cityData.lat)
        url.searchParams.set('lon', this.cityData.lon)
        url.searchParams.set('apiKey', '03b92fba65774279cd4a4579ad496ed3')
        url.searchParams.set('lang', 'fr')
        url.searchParams.set('units', 'metric')
        this.#url = url.toString()

        return new WeatherApi(url)
    }

    async get() {
        this.loader = document.querySelector('.w-loader')
        this.loader.classList.remove('w-loader--hidden')

        this.weatherApi = await this.getData()

        const weatherData = await this.weatherApi.get()
        this.loader.classList.add('w-loader--hidden')

        const daily = weatherData.daily
        const hourly = weatherData.hourly
        const current = weatherData.current
        this.fullData = weatherData

        this.cityData = Object.assign(this.cityData, {
            daily,
            hourly,
            current,
        })

        return this.cityData
    }
}
