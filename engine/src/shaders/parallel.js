import Shader from "./shader.js";
import { Color } from "../utils.js";

const speed_const = Math.PI / 500;
const std_offset = [ 0, (2/3) * Math.PI, (4/3) * Math.PI ];
const PHI = (1 + Math.sqrt(5)) / 2;

export default class extends Shader {
    static edge([
        speed = [ 0, 0, 0 ],
        entity = [ 0, 0, 0 ],
        edge = [ 1, 1, 1 ],
        offset = std_offset
    ], engine, entity_id, edge_id) {
        let id = Math.floor(edge_id / Math.pow(2, this.geometry.dimensions - 1));
        return Color.toHexColor(
            127.5 * (Math.sin(entity_id * entity[0] + 2 * Math.PI * (2 * Math.PI / PHI) * id * edge[0] + engine.now * speed[0] * speed_const + offset[0]) + 1),
            127.5 * (Math.sin(entity_id * entity[1] + 2 * Math.PI * (2 * Math.PI / PHI) * id * edge[1] + engine.now * speed[1] * speed_const + offset[1]) + 1),
            127.5 * (Math.sin(entity_id * entity[2] + 2 * Math.PI * (2 * Math.PI / PHI) * id * edge[2] + engine.now * speed[2] * speed_const + offset[2]) + 1),
        );
    }
}
