import FormSearchCity from './controllers/FormSearchCity.js'
import PerformSearch from './controllers/PerformSearch.js'
import DisplayWeather from './controllers/DisplayWeather.js'
import FindUserlocation from './api/FindUserLocation.js'

class App {
    constructor() {
        this.keyword = localStorage.getItem('currentCity') || 'Paris'
    }

    addGeolocationAction() {
        const btnGeolocation = selectElement('#w-btn-geolocation')

        btnGeolocation.addEventListener('click', () => {
            const geolocateUser = new FindUserlocation()
            geolocateUser.geoFindMe()
        })
    }

    stopEvent(e) {
        e.stopPropagation()
    }

    async init() {
        this.weatherApi = await new PerformSearch(this.keyword)

        const weatherData = await this.weatherApi.get()

        const displayer = new DisplayWeather(weatherData)
        displayer.render()

        this.data = weatherData

        const formSearch = new FormSearchCity()

        this.addGeolocationAction()
    }
}

const app = new App()
app.init()
