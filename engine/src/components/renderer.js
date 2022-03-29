import Component from "./component.js";

export default class Renderer extends Component {

    static get default() {
        return {
            vertexColor: "#FFFFFF",
            edgeColor: "#FFFFFF",
            faceColor: "#FFFFFF",
            render: true,
            renderVertices: true,
            renderEdges: true,
            renderFaces: true,
        };
    }
}
