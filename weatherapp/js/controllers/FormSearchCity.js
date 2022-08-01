import PerformSearch from './PerformSearch.js'
import DisplayWeather from './DisplayWeather.js'
import MessageBox from '../utils/MessageBox.js'

export default class FormSearchCity {
    constructor() {
        this.searchIcon = selectElement('.w-search-icon')

        this.formSearchCity = selectElement('#w-form-search')
        this.btnSearch = selectElement('#btn-search')
        this.keywordInput = selectElement('#city-keyword')

        this.$searchListWrapper = document.createElement('div')
        this.$searchListWrapper.className = 'w-search-list'
        this.$searchListWrapper.id = 'w-search-list-wrapper'
        this.formSearchCity.appendChild(this.$searchListWrapper)
        this.cityKeyword = ''
        this.messageBox = new MessageBox()

        this.init()
    }

    closeForm = (e) => {
        e.preventDefault()
        this.formSearchCity.classList.remove('activated')
        this.keywordInput.value = ''
    }

    async render(name) {
        this.weatherApi = await new PerformSearch(name)
        const weatherData = await this.weatherApi.get()

        const displayer = new DisplayWeather(weatherData)
        displayer.render()
    }

    addActionsForm = () => {
        const btnClose = this.formSearchCity.querySelector('.w-btn-close')
        btnClose.addEventListener('click', this.closeForm)

        this.searchIcon.addEventListener('click', () => {
            this.keywordInput.focus()
            this.formSearchCity.classList.add('activated')
        })

        this.btnSearch.addEventListener('click', (e) => {
            if (this.keywordInput.value !== '' && this.cityKeyword.length > 3) {
                this.render(this.keywordInput.value)
                this.closeForm(e)
            } else {
                this.messageBox.displayMessage(
                    'Vous devez saisir au moins 3 caractères'
                )
            }
            this.keywordInput.blur()
        })

        this.formSearchCity.addEventListener('submit', (e) => {
            e.preventDefault()
        })

        this.formSearchCity.addEventListener('keydown', (e) => {
            if (e.keyCode === 13) {
                this.closeForm(e)
            }
        })

        this.keywordInput.addEventListener('input', (e) => {
            this.$searchListWrapper.classList.add('activated')

            this.cityKeyword = e.target.value
        })

        document.body.addEventListener('keyup', (e) => {
            if (e.keyCode === 27) {
                this.closeForm(e)
            }
        })
        // this.keywordInput.addEventListener('keydown', (e) => {
        //     if (e.keyCode === 13) {
        //         e.preventDefault()
        //         console.log("J'appuie sur entrez")

        //         // validateSearch(e)
        //     }
        // })
    }

    init = () => {
        this.addActionsForm()
    }
}
