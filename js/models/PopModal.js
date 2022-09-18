/**
 * Create a pop up with the div.pop-modal wrapper
 */
export class PopModal {
    constructor(title, content) {
        this.$modalWrapper = document.querySelector('.pop-modal')
        this.$contentWrapper = document.createElement('div')
        this.$contentWrapper.classList.add('pop-modal-content')
        this._title = title
        this._content = content
    }

    closePop() {
        this.$modalWrapper.classList.remove('pop-modal-on')
        const context = this
        setTimeout(() => {
            this.$modalWrapper.innerHTML = ''
            this.$contentWrapper.className = 'pop-modal-content'
        }, 1000)
    }

    addListener() {
        this.$modalWrapper
            .querySelector('.close-pop')
            .addEventListener('click', (e) => {
                e.preventDefault()

                this.closePop()
            })
    }

    render() {
        this.$modalWrapper.classList.add('pop-modal-on')

        this.$contentWrapper.innerHTML = `
            <div class="pop-header">
                <h3>${this._title}</h3>
                <a href="#" class="close-pop"><i class="fa-sharp fa-solid fa-xmark"></i></a>
            </div>`
        this.$contentWrapper.innerHTML += `<div class="pop-content">${this._content}</div>`
        this.$contentWrapper.innerHTML += `<div class="pop-footer"></div>`
        this.$modalWrapper.appendChild(this.$contentWrapper)
        this.addListener()
    }
}

/**
 *
 * @param {Object} popModal - Modal to display a project from projectCard
 * @param {Object} projectCard - Project data
 * @returns
 */
export function fullScreenModal(popModal, projectCard) {
    const target = popModal.$contentWrapper

    popModal.setFullScreen = () => {
        setTimeout(() => {
            target.classList.add(`pop-fullscreen`)
            // console.log('Full Screen Modal Applied')
        }, 500)
    }
    popModal.$contentWrapper.id = projectCard._project.title

    if (projectCard._project.isActive) {
        projectCard.$wrapper.addEventListener('click', () => {
            popModal.setFullScreen()
            if (projectCard.app) {
                popModal._content = projectCard
                    .app(popModal.$contentWrapper)
                    .init()
                // console.log('Application called')
            }
        })
    }
    return popModal
}
