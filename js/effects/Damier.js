class Damier {
    constructor(nbCases) {
        this._nbCases = nbCases
        this.root = document.createElement('div')
        this.counter = 0

        this.root.id = 'damier'
        document.body.appendChild(this.root)
    }

    colorCode() {
        var makingColorCode = '0123456789ABCDEF'
        var finalCode = '#'
        for (var i = 0; i < 2; i++) {
            finalCode =
                finalCode + makingColorCode[Math.floor(Math.random() * 16)]
        }
        finalCode = finalCode + '3333'
        return finalCode
    }

    createBox(texte) {
        const box = document.createElement('div')

        const boxWidth = 100 / Math.sqrt(this._nbCases) + '%'
        const boxHeight = 100 / Math.sqrt(this._nbCases) + '%'

        box.style.width = boxWidth
        box.style.height = boxHeight
        box.className = 'item'
        box.textContent = texte
        // console.log(box)
        return box
    }

    deleteBoxes() {
        const elementsToDelete = (this.root.style.display = 'none')
    }

    changeOpacity(e) {
        console.log('Counter = ', this.counter)
        this.counter += 1
        // if (counter >= nbCases) {
        //     deleteBoxes()
        // }
        // element.target.textContent = element.target.id
        e.target.style.opacity = '0'
        e.target.style.transform = 'scale(1.2)'
        if (this.counter === this._nbCases - 1) {
            console.log('Fin du jeu')
        }
        this.removeEventListener('click', this.changeOpacity)
        // this.parentElement.removeChild(this)
    }

    render() {
        for (let i = 1; i <= this._nbCases; i++) {
            const box = this.createBox('Click me')
            box.style.backgroundColor = this.colorCode()
            box.id = 'box' + i
            box.addEventListener('click', this.changeOpacity)
            box.addEventListener('transitionend', () => {
                console.log('Transition ended pour ' + box.id)
                box.style.transform = 'scale(1)'
            })
            this.root.appendChild(box)
        }
    }
}
// const newApp = new Damier(16)
// newApp.render()
