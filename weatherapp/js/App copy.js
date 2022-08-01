/*
- Par défaut: geolocaliser ma position (lat,lon) avec API Geo
- Obtenir le nom de la ville correspondante (city) avec API Geo Openweathermap
- requeter par rapport à (lat,lon) => requete forecast
- si recherche par nom de ville:
    - récupérer le nom
    - recupérer (lat,lon) avec Api Geo Openweathermap
    - requeter par rapport à (lat,lon) => requete forecast
*/

import { WeatherApi } from './api/Api.js'
import CurrentWeather from './models/CurrentWeather.js'
import DailyWeather from './models/DailyWeather.js'
import HourlyWeather from './models/HourlyWeather.js'
import FindUserLocation from './api/FindUserLocation.js'

import CurrentWeatherCard from './templates/CurrentWeatherCard.js'
import DailyWeatherWrapper from './templates/DailyWeatherWrapper.js'
import HourlyWeatherWrapper from './templates/HourlyWeatherWrapper.js'
import FormSearchCity from './controllers/FormSearchCity.js'

import PerformSearch from './controllers/PerformSearch.js'
import DisplayWeather from './controllers/DisplayWeather.js'

class App {
    #url
    constructor() {
        // this.data = []
        // this.currentData = []
        // this.hourlyData = []
        // this.dailyData = []

        // this.dailyWrapper = selectElement('#daily-weather')
        // this.hourlyWrapper = selectElement('#hourly-weather')
        this.keyword = 'Paris'
    }

    async fetchData() {
        this.weatherApi = await new PerformSearch(this.keyword)

        const weatherData = await this.weatherApi.get()

        const displayer = new DisplayWeather(weatherData)
        displayer.render()

        this.data = weatherData

        // this.currentData = weatherData.current

        // this.hourlyData = weatherData.hourly
        //     .map((weather, index) => new HourlyWeather(weather))
        //     .slice(0, 24)

        // this.dailyData = weatherData.daily.map(
        //     (weather) => new DailyWeather(weather)
        // )
    }

    async render() {
        await this.fetchData()

        // Activate geolocation
        // const initGeoButton = document.querySelector('.w-location-icon')
        // initGeoButton.addEventListener('click', (e) => {
        //     e.preventDefault()
        //     this.userLocation.displayLocation()
        // })

        console.log('Render data')

        // Daily Weather
        // const dailyWrapper = new DailyWeatherWrapper(this.dailyData)
        // dailyWrapper.render()

        // Hourly Weather
        // const hourlyWrapper = new HourlyWeatherWrapper(this.hourlyData)
        // hourlyWrapper.render()

        //  Current Weather
        // const currentWeather = new CurrentWeather(this.currentData)
        // const currentWeatherCard = new CurrentWeatherCard(currentWeather)
        // currentWeatherCard.render()

        // const cityName = selectElement('#city-name')
        // cityName.textContent = this.data.name
    }

    async init() {
        this.render()

        // const formSearch = new FormSearchCity()

        // const btnSearch = selectElement('#btn-search')
        // btnSearch.addEventListener('click', (e) => {
        //     console.log('its me')
        // })
    }
}

const app = new App()
app.init()
