export default class ToggleNav {
    constructor() {
        this.navIsOn = false
        this.targetIcon = document.querySelector('#toggle-nav')
        this.targetNav = document.querySelector('#nav-main')

        this.toggleNav()
    }

    openNav(e) {
        e.preventDefault()

        if (this.navIsOn) {
            this.targetIcon.classList.remove('toggle-on')
            this.targetNav.classList.add('small-nav')
            this.targetNav.classList.remove('full-nav')

            this.navIsOn = false

            return
        }

        this.navIsOn = true
        this.targetNav.classList.add('full-nav')
        document.body.classList.add('mobile')
        this.targetIcon.classList.add('toggle-on')
    }

    addActions() {
        this.targetIcon.addEventListener('click', this.openNav.bind(this))
    }

    toggleNav() {
        this.addActions()
    }
}
