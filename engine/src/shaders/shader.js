export default class Shader {

    static vertex(_, engine, entity_id) {
        return engine.scene[entity_id].renderer.vertexColor;
    }

    static edge(_, engine, entity_id) {
        return engine.scene[entity_id].renderer.edgeColor;
    }

    static face(_, engine, entity_id) {
        return engine.scene[entity_id].renderer.faceColor;
    }
}
