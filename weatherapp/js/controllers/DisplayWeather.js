import CurrentWeather from '../models/CurrentWeather.js'
import DailyWeather from '../models/DailyWeather.js'
import HourlyWeather from '../models/HourlyWeather.js'
import CurrentWeatherCard from '../templates/CurrentWeatherCard.js'
import DailyWeatherWrapper from '../templates/DailyWeatherWrapper.js'
import HourlyWeatherWrapper from '../templates/HourlyWeatherWrapper.js'

export default class DisplayWeather {
    constructor(data) {
        this._data = data

        this.currentData = data.current
        this.hourlyData = this._data.hourly
            .map((weather, index) => new HourlyWeather(weather))
            .slice(0, 24)
        this.dailyData = this._data.daily.map(
            (weather) => new DailyWeather(weather)
        )
        this.cityName = data.name

        this.dailyWrapper = selectElement('#daily-weather')
        this.hourlyWrapper = selectElement('#hourly-weather')
        this.keyword = 'Paris'
    }

    clearWrapper() {
        this.dailyWrapper.innerHTML = ''
        this.hourlyWrapper.innerHTML = ''
    }

    render() {
        this.clearWrapper()

        // Daily Weather
        const dailyWrapper = new DailyWeatherWrapper(this.dailyData)
        dailyWrapper.render()

        // Hourly Weather
        const hourlyWrapper = new HourlyWeatherWrapper(this.hourlyData)
        hourlyWrapper.render()

        //  Current Weather
        const currentWeather = new CurrentWeather(this.currentData)
        const currentWeatherCard = new CurrentWeatherCard(currentWeather)
        currentWeatherCard.render()

        const cityName = selectElement('#city-name')
        cityName.textContent = this._data.name
    }
}
