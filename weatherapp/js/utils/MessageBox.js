export default class MessageBox {
    /**
     *
     * @param {HTMLElement} root - HTMEement receving the div#message
     * @param {HTMLElement} clickedElement - HTMLElement which launcn the animation
     * @param {Object} options - Parameters of the animation
     */
    constructor(/*root, clickedElement, options = {}*/) {
        this.message = ''
        this.root = selectElement('#message-box')
    }

    async deleteMessage(element) {
        this.root.removeChild(element)
    }

    async delayMessage() {}
    displayMessage(message) {
        this.root.classList.add('message-box-on')
        const rootChild = createDiv('message-item')

        rootChild.textContent = message
        this.root.appendChild(rootChild)

        let delayToDisplay
        delayToDisplay = setTimeout(() => {
            rootChild.classList.add('message-item-on')
        }, 500)

        let delayToDelete
        delayToDelete = setTimeout(() => {
            rootChild.classList.add('message-item-remove')
            // rootChild.addEventListener('transitionend', (e) => {
            //     console.log('Transition terminée', e.target)
            //     console.log(delay)
            // })
            // this.deleteMessage(rootChild)
        }, 3000)
    }
}
