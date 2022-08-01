export default class HourlyWeatherCard {
    constructor(weather) {
        this._weather = weather
        this.$wrapper = document.createElement('div')
        this.$wrapper.className = 'hour-infos'
    }

    render() {
        const template = `
        <div>${this._weather.hour}</div>
        <div>${this._weather.icon}</div>
        <div><i class="wi wi-humidity"></i> ${this._weather.humidity}%</div>
        <div>${this._weather.currentTemperature}°C</div>
        `
        // <div>${this._weather.description}</div>

        this.$wrapper.innerHTML = template

        return this.$wrapper
    }
}
