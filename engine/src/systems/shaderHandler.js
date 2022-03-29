import System from "./system.js";

export default class ShaderHandler extends System {

    constructor(engine) {
        super();
        this.engine = engine;
        this.shaders = {};
    }

    static shaderTypes = [ "vertex", "edge", "face" ];

    async add(entity) {
        if (!entity.shaders) return;
        await this.register(entity.shaders);
    }

    async register(shaders) {
        for (let i = 0; i < this.constructor.shaderTypes.length; i++) {
            this.shaders[shaders[this.constructor.shaderTypes[i]].name] =
                (await import(`../shaders/${shaders[this.constructor.shaderTypes[i]].name}.js`)).default;
        }
    }

    vertex(entity, entity_idx, element_idx) {
        return this.shaders[entity.shaders.vertex.name].vertex.apply(entity, [ entity.shaders.vertex.args, this.engine, entity_idx, element_idx ]);

    }

    edge(entity, entity_idx, element_idx) {
        return this.shaders[entity.shaders.edge.name].edge.apply(entity, [ entity.shaders.edge.args, this.engine, entity_idx, element_idx ]);
    }

    face(entity, entity_idx, element_idx) {
        return this.shaders[entity.shaders.face.name].face.apply(entity, [ entity.shaders.face.args, this.engine, entity_idx, element_idx ]);
    }
}
