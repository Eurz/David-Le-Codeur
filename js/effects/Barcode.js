export default class Barcode {
    constructor() {
        this.barcodeGenerator()
    }

    barcodeGenerator() {
        const barcodeBox = document.querySelector('.barcode')
        for (let i = 1; i < 20; i++) {
            const bar = document.createElement('div')
            bar.style.backgroundColor = '#AE042B'
            bar.style.width = `${Math.round(this.getRandomArbitrary(2, 20))}px`
            barcodeBox.appendChild(bar)
        }
    }

    getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min
    }
}
