import Shader from "./shader.js";
import { Color } from "../utils.js";

const speed_const = Math.PI / 500;
const std_offset = [ 0, (2/3) * Math.PI, (4/3) * Math.PI ];

const rgb = ([
        speed = [ 1, 1, 1 ],
        entity = [ 0, 0, 0 ],
        element = [ 0, 0, 0 ],
        offset = std_offset
    ], engine, entity_id, element_id) => {
    return Color.toHexColor(
        127.5 * (Math.sin(entity_id * entity[0] + element_id * element[0] + engine.now * speed[0] * speed_const + offset[0]) + 1),
        127.5 * (Math.sin(entity_id * entity[1] + element_id * element[1] + engine.now * speed[1] * speed_const + offset[1]) + 1),
        127.5 * (Math.sin(entity_id * entity[2] + element_id * element[2] + engine.now * speed[2] * speed_const + offset[2]) + 1),
    );
};

export default class extends Shader {
    static vertex = rgb;
    static edge = rgb;
    static face = rgb;
}
