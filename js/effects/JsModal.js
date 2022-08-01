export default class JsModal {
    constructor() {
        this.modal = null
        this.timer = null

        document.querySelectorAll('.js-modal').forEach((a) =>
            a.addEventListener('click', (e) => {
                this.openModal(e)
            })
        )
    }

    // let id = null

    openModal(e) {
        e.preventDefault()
        const target = document.querySelector(e.target.getAttribute('href'))
        target.style.display = null
        target.style.width = '100%'
        const content = document.querySelector(
            `${e.target.getAttribute('href')} .modal-content`
        )

        clearTimeout(this.timer)
        this.timer = setTimeout(() => {
            content.classList.add('modal-on')
        }, 200)

        this.modal = target
        this.modal.addEventListener('click', (e) => {
            this.closeModal(e)
        })

        this.modal
            .querySelector('.js-close-modal')
            .addEventListener('click', (e) => {
                this.closeModal(e)
            })

        this.modal
            .querySelector('.modal-content')
            .addEventListener('click', (e) => {
                this.stopPropagation(e)
            })
    }

    closeModal(e) {
        if (this.modal === null) return
        e.preventDefault()
        this.modal.style.display = 'none'
        e.target.classList.remove('modal-on')

        this.modal.querySelector('.modal-content').classList.remove('modal-on')
        this.modal.removeEventListener('click', (e) => {
            closeModal(e)
        })

        this.modal
            .querySelector('.js-close-modal')
            .removeEventListener('click', (e) => {
                closeModal(e)
            })
        this.modal
            .querySelector('.modal-content')
            .removeEventListener('click', (e) => {
                stopPropagation(e)
            })
        console.log(this.timer)
        this.modal = null
    }

    stopPropagation(e) {
        e.stopPropagation()
    }
}
