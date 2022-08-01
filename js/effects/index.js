import Barcode from './Barcode.js'
import JsModal from './JsModal.js'
import Logo from './Logo.js'
import ToggleNav from './ToggleNav.js'

export default class Effects {
    constructor() {
        this.fire()
    }

    fire() {
        new ToggleNav()
        new Barcode()
        new Logo()
        new JsModal()
    }
}
