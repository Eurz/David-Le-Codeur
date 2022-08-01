export default class CurrentWeather {
    constructor(data) {
        this._data = data
        this._timeStamp = data.dt
        this._cloud = data.cloud
        this._pressure = data.pressure
        this._humidity = data.humidity
        this._currentTemperature = data.temp
        this._feelsLike = data.feels_like
        this._condition = data.weather[0].main
        this._description = data.weather[0].description
        this._cityName = 'AGDE'
        this._uv = data.uvi
        this._sunrise = data.sunrise
        this._sunset = data.sunset
        this._clouds = data.clouds
    }

    get day() {
        const day = new Intl.DateTimeFormat('fr-FR', {
            weekday: 'long',
        }).format(this._timeStamp * 1000)

        return day
    }

    get currentDate() {
        const date = new Intl.DateTimeFormat('fr-FR', {
            month: 'long',
            day: 'numeric',
            weekday: 'long',
            year: 'numeric',
        }).format(this._timeStamp * 1000)
        return date
    }

    get cloud() {
        return this._cloud
    }

    get city() {
        return this._cityName
    }

    get pressure() {
        return this._pressure
    }

    get humidity() {
        return this._humidity
    }

    get temperature() {
        return Math.round(this._currentTemperature)
    }

    get feelsLike() {
        return Math.round(this._feelsLike)
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

    get uv() {
        return this._uv
    }

    get clouds() {
        return this._clouds
    }

    get sunset() {
        const sunsetTime = new Intl.DateTimeFormat('fr-FR', {
            timeStyle: 'short',
        }).format(this._sunset * 1000)
        return sunsetTime
    }
    get sunrise() {
        const sunriseTime = new Intl.DateTimeFormat('fr-FR', {
            timeStyle: 'short',
        }).format(this._sunrise * 1000)
        return sunriseTime
    }
}
