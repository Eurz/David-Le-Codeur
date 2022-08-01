export default class SearchCity {
    constructor() {
        this._city = 'Montpellier'
        this.$target = selectElement('#city-name')
    }

    update(keyword) {
        // this._city = this.$target.value
        console.log('je mets à jour')
        console.log('nom de ville', keyword)
        return keyword
    }
}
