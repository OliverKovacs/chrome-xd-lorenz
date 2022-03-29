export default class API {
    constructor(engine) {
        this.engine = engine;
    }

    get(keys) {
        let v = this.engine.scene
        for (let i = 0; i < keys.length; i++) {
            v = v[keys[i]];
        }
        return v;
    }

    set(keys, value) {
        let v = this.engine.scene
        for (let i = 0; i < keys.length - 1; i++) {
            v = v[keys[i]];
        }
        v[keys[keys.length - 1]] = value;
    }
}