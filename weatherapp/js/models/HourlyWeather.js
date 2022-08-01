export default class HourlyWeather {
    constructor(hourlyData) {
        this._timeStamp = hourlyData.dt
        this._humidity = hourlyData.humidity
        this._currentTemperature = hourlyData.temp
        this._condition = hourlyData.weather[0].main
        this._description = hourlyData.weather[0].description
    }

    get hour() {
        const hour = new Intl.DateTimeFormat('fr-FR', {
            hour: 'numeric',
        }).format(this._timeStamp * 1000)
        return hour
    }

    get humidity() {
        return this._humidity
    }

    get currentTemperature() {
        return Math.round(this._currentTemperature)
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
