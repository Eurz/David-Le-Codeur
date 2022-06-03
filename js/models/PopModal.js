/**
 * Create a pop up with the div.pop-modal wrapper
 */
export class PopModal {
    constructor(content) {
        this.$modalWrapper = document.querySelector('.pop-modal')
        this.$contentWrapper = document.createElement('div')
        this.$contentWrapper.classList.add('pop-modal-content')
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
        // const content = `<a href="#" class="closePop">&times;</a>
        // ${this._content}`

        this.$contentWrapper.innerHTML = this._content
        this.$contentWrapper.innerHTML += `<a href="#" class="closePop">&times;</a>`
        this.$modalWrapper.appendChild(this.$contentWrapper)
        // this.$modalWrapper.innerHTML = content
        this.addListener()
    }
}

export function fullScreenModal(popModal, project) {
    // PopModal.classList.add('pop-fullscreen')

    // const btnFullSc<reen = document.createElement('button')
    // btnFullScreen.textContent = 'Full'
    // const test = PopModal.$contentWrapper.querySelector('.btn-start')
    // test.addEventListener('click', (e) => {
    const target = popModal.$contentWrapper

    popModal.setFullScreen = () => {
        target.classList.add(`pop-fullscreen`)
        console.log('Full Screen Modal Applied')
    }

    project.$wrapper.addEventListener('click', () => {
        popModal.setFullScreen()
        if (project.app) {
            project.app()
        }
    })
    console.log('Full Screen Modal Init')
    // })

    return popModal
}

// function addAppInModal(PopModal) {
//     PopModal.buttonCreateProject = () => {
//         const button = document.createElement('button')
//         button.className = 'btn btn-tart'
//         button.textContent = 'Start'
//         // PopModal.$contentWrapper.appendChild(button)
//         document.querySelector('.pop-modal-content').appendChild(button)

//         button.addEventListener('click', () => {
//             console.log('Lancement dune partie')
//             const target =
//                 PopModal.$modalWrapper.querySelector('.pop-modal-content')

//             target.classList.add('pop-fullscreen')
//             console.log(target)
//         })
//     }

//     return PopModal
// }
