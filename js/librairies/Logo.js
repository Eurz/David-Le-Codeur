export default class Logo {
    constructor() {
        this.target = document.querySelector('.logo .name')

        const name = this.target.textContent
        this.target.innerHTML = ''
        this.spanify(name).forEach((letter, index) => {
            const span = document.createElement('span')
            span.textContent = letter
            span.className = 'reverse'
            this.target.appendChild(span)
            setTimeout(() => {
                span.classList.add('no-reverse')
            }, 300 * index)
        })
    }

    clearTimer() {
        clearTimeout(this.timer)
    }
    spanify(words) {
        return words.split('')
    }
}
