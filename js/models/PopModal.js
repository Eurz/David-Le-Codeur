/**
 * Create a pop up with the div.pop-modal wrapper
 */
class PopModal {
    constructor(content) {
        this.$modalWrapper = document.querySelector('.pop-modal')
        this.$contentWrapper = document.createElement('div')
        this._content = content
    }

    closePop() {
        this.$modalWrapper.classList.remove('pop-modal-on')
        const context = this
        setTimeout(() => {
            this.$modalWrapper.innerHTML = ''
            // context.clearTimeout(context.timer)
        }, 1000)
    }

    addListener() {
        this.$modalWrapper
            .querySelector('.closePop')
            .addEventListener('click', (e) => {
                e.preventDefault()

                this.closePop()
            })
    }

    render() {
        this.$modalWrapper.classList.add('pop-modal-on')
        const content = `<a href="#" class="closePop">&times;</a>
        <div class="pop-modal-content">${this._content}</div>`

        this.$modalWrapper.innerHTML = content
        this.addListener()
    }
}
