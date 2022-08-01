import DailyWeatherCard from './DailyWeatherCard.js'

export default class DailyWeatherWrapper {
    constructor(data) {
        this._data = data
        this.root = document.querySelector('#daily-weather')

        this.$cardWrapper = document.createElement('div')
        this.$cardWrapper.className = 'daily-weather'
    }

    render() {
        const title = document.createElement('h3')
        title.className = 'w-title-h3'
        title.textContent = 'Quotidien'

        this._data.forEach((weather) => {
            const weatherCard = new DailyWeatherCard(weather)
            this.$cardWrapper.appendChild(weatherCard.render())
        })
        this.root.appendChild(title)
        this.root.appendChild(this.$cardWrapper)
    }
}
