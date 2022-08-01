export default class CurrentWeatherCard {
    /**
     *
     * @param {Object} data - Current weather's data
     */
    constructor(data) {
        this._data = data
        this.$wrapper = document.createElement('div')
        this.$wrapper.className = 'day-infos'
    }

    displaySpecs() {
        const btnSpecs = document.querySelector('.w-btn-specs')
        const specs = document.querySelector('.w-specs')
        let isSpecs = false
        btnSpecs.addEventListener('click', () => {
            isSpecs = !isSpecs
            if (isSpecs) {
                specs.classList.add('w-activated')
                return
            }

            specs.classList.remove('w-activated')
        })
    }

    render() {
        // document.body.className = this._data.condition.toLowercase()
        const bodyClassName = this._data.condition
        document.body.classList.add(bodyClassName.toLowerCase())

        // const day = selectElement('#current-day')
        // day.textContent = capitalize(this._data.day)

        const currentDate = selectElement('#current-date')
        currentDate.textContent = `${capitalize(this._data.currentDate)}`

        // const cityName = selectElement('#city-name')
        // cityName.textContent = `${this._data.city}`

        const description = selectElement('#conditions')
        description.textContent = `${this._data.description}`

        const humidity = selectElement('#humidity')
        humidity.textContent = `${this._data.humidity} %`

        const uvIndice = selectElement('#uv')
        uvIndice.textContent = `${this._data.uv}`

        const pressure = selectElement('#pressure')
        pressure.textContent = `${this._data.pressure} hPa`

        const temperature = selectElement('#temperature')
        temperature.textContent = `${this._data.temperature}°C`

        const feelsLike = selectElement('#feels_like')
        feelsLike.textContent = `${this._data.feelsLike}°C`

        const sunset = selectElement('#sunset')
        sunset.textContent = `${this._data.sunset}`

        const sunrise = selectElement('#sunrise')
        sunrise.textContent = `${this._data.sunrise}`

        const clouds = selectElement('#clouds')
        clouds.textContent = `${this._data.clouds}`

        this.displaySpecs()
    }
}
