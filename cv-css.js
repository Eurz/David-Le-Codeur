document
    .querySelectorAll('.js-modal')
    .forEach((a) => a.addEventListener('click', openModal))

let modal = null

function openModal(e) {
    e.preventDefault()
    const target = document.querySelector(e.target.getAttribute('href'))
    target.style.display = null
    target.style.width = '100%'
    modal = target
    modal.addEventListener('click', closeModal)
    modal.querySelector('.js-close-modal').addEventListener('click', closeModal)
    modal
        .querySelector('.modal-content')
        .addEventListener('click', stopPropagation)
}

function closeModal(e) {
    if (modal === null) return
    e.preventDefault()
    modal.style.display = 'none'
    modal.removeEventListener('click', closeModal)
    modal
        .querySelector('.js-close-modal')
        .removeEventListener('click', closeModal)
    modal
        .querySelector('.modal-content')
        .removeEventListener('click', stopPropagation)

    modal = null
}

const stopPropagation = (e) => {
    e.stopPropagation()
}

const barcodeBox = document.querySelector('.barcode')
for (let i = 1; i < 20; i++) {
    const bar = document.createElement('div')
    bar.style.backgroundColor = '#AE042B'
    bar.style.height = '100px'
    bar.style.width = '5px'
    barcodeBox.appendChild(bar)
}
