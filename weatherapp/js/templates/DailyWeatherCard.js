export default class DailyWeatherCard {
    constructor(weather) {
        this._weather = weather
        // this.root = document.querySelector('.daily-weather')

        this.$wrapper = document.createElement('div')
        this.$wrapper.className = 'day-infos'
    }

    render() {
        const template = `<div>${this._weather.day}</div>
        <div>${this._weather.currentTemperature} °C</div>
        <div>${this._weather.minTemperature} °C / ${this._weather.maxTemperature} °C</div>
        <div>${this._weather.icon}</div>
        <div>${this._weather.description}</div>       
        `

        // document.body.className = this._weather.condition.toLowercase()
        // const bodyClassName = this._weather.condition
        // document.body.classList.add(bodyClassName.toLowerCase())
        this.$wrapper.innerHTML = template
        // this.root.appendChild(this.$wrapper)

        return this.$wrapper
    }
}
