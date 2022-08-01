// import { weatherIcon } from '../utils/utilities'

export default class DailyWeather {
    constructor(dailyData) {
        this._timeStamp = dailyData.dt
        this._currentTemperature = dailyData.temp.day
        this._minTemperature = dailyData.temp.min
        this._maxTemperature = dailyData.temp.max
        this._condition = dailyData.weather[0].main
        this._description = dailyData.weather[0].description
    }

    get day() {
        const day = new Intl.DateTimeFormat('fr-FR', {
            weekday: 'long',
        }).format(this._timeStamp * 1000)

        return day
    }

    get currentTemperature() {
        return Math.round(this._currentTemperature)
    }

    get minTemperature() {
        return Math.round(this._minTemperature)
    }

    get maxTemperature() {
        return Math.round(this._maxTemperature)
    }

    get icon() {
        return weatherIcon(this._condition)
    }

    get condition() {
        return this._condition
    }

    get description() {
        return capitalize(this._description)
    }
}
