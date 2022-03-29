import System from "./system.js";

export default class ScriptHandler extends System {
    constructor(engine) {
        super(engine);
        this.scripts = {};
    }

    async add(entity) {
        if (!entity.scripts) return;
        await this.register(entity.scripts);
        
        for (let i = 0; i < entity.scripts.length; i++) {
            let script = entity.scripts[i];
            this.scripts[script.name].start(entity, script.args, this.engine, i);
        }
    }

    async register(scripts) {
        for (let i = 0; i < scripts.length; i++) {
            if (this.scripts[scripts[i].name]) continue;
            this.scripts[scripts[i].name] = (await import(`../scripts/${scripts[i].name}.js`)).default;
        }
    }

    update(list) {
        for (let i = 0; i < list.length; i++) {
            if (!list[i].scripts) continue;
            for (let j = 0; j < list[i].scripts.length; j++) {
                let script = list[i].scripts[j];
                this.scripts[script.name].update(list[i], script.args, this.engine, i, j);
            }
        }
    }
}
