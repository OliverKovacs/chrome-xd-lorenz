import System from "./system.js";

export default class RendererHandler extends System {
    constructor(engine, displays) {
        super();
        this.engine = engine;
        this.displays = displays;
        this.defaultVertexSize = 1;
    }

    renderCamera(camera, list) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].renderer && list[i].transform) {
                this.renderEntity(list[i], i, camera);
            }
        }
    }

    renderEntity(entity, id, camera) {
        if (!entity.renderer.render) return;

        this.engine.projectionHandler.projectEntity(entity, camera);

        for (let i = 0; i < camera.camera.displays.length; i++) {
            this.renderFaces(entity, id, this.engine.displays[camera.camera.displays[i].index]);
            this.renderEdges(entity, id, this.engine.displays[camera.camera.displays[i].index]);
            this.renderVertices(entity, id, this.engine.displays[camera.camera.displays[i].index]);
        }
    }

    renderVertices(entity, entity_id, display) {
        if (!entity.renderer.renderVertices) return;
        for (let i = 0; i < entity.geometry.projected.length; i++) {
            let color;
            if (entity.shaders) {
                color = this.engine.shaderHandler.vertex(entity, entity_id, i);
            }
            else {
                color = entity.renderer.vertexColor;
            }
            display.circle(entity.geometry.projected[i], this.defaultVertexSize, color, "fill");
            this.engine.frame_draws++;
        }
    }

    renderEdges(entity, entity_id, display) {
        if (!entity.renderer.renderEdges) return;
        for (let i = 0; i < entity.geometry.edges.length; i++) {
            let a = entity.geometry.projected[entity.geometry.edges[i][0]];
            let b = entity.geometry.projected[entity.geometry.edges[i][1]];
            let color;
            if (entity.shaders) {
                color = this.engine.shaderHandler.edge(entity, entity_id, i);
            }
            else {
                color = entity.renderer.edgeColor;
            }
            display.line(a, b, color);
            this.engine.frame_draws++;
        }
    }

    renderFaces(entity, entity_id, display) {
        if (!entity.renderer.renderFaces) return;
        for (let i = 0; i < entity.geometry.faces.length; i++) {
            let vertices = [];
            for (let j = 0; j < entity.geometry.faces[i].length; j++) {
                vertices[j] = entity.geometry.projected[entity.geometry.faces[i][j]];
            }
            let color;
            if (entity.shaders) {
                color = this.engine.shaderHandler.face(entity, entity_id, i);
            }
            else {
                color = entity.renderer.faceColor;
            }
            display.polygon(vertices, color);
            this.engine.frame_draws++;
        }
    }
}
