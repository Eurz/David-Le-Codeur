import HourlyWeatherCard from './HourlyWeatherCard.js'

export default class HourlyWeatherWrapper {
    constructor(data) {
        this._data = data
        this.root = document.querySelector('#hourly-weather')
        this.$cardWrapper = document.createElement('div')
        this.$cardWrapper.className = 'hourly-weather'
    }

    render() {
        const title = document.createElement('h3')
        title.className = 'w-title-h3'
        title.textContent = 'Horaire'

        this._data.forEach((weather, index) => {
            if (index % 3 !== 0) {
                return
            }
            const weatherCard = new HourlyWeatherCard(weather)
            this.$cardWrapper.appendChild(weatherCard.render())
        })
        this.root.appendChild(title)
        this.root.appendChild(this.$cardWrapper)
    }
}
