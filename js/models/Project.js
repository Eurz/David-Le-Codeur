export default class Project {
    constructor(project) {
        this._title = project.title
        this._description = project.description
        this._tag = project.tag
        this._isActive = project.isActive
        this._image = project.image

        this.app = project.app
    }

    get title() {
        return this._title
    }
    get description() {
        return this._description
    }

    get tag() {
        return this._tag
    }

    get isActive() {
        return this._isActive
    }
    get image() {
        return this._image
    }
    get;
}
