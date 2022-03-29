export default class Component {

    static get default() {
        return {};
    }

    static get new() {
        return this.default;
    }

    constructor(component) {
        return { ...this.constructor.default, ...component };
    }
}