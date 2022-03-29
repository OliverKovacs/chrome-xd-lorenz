import Shader from "./shader.js";
import { Color, Random } from "../utils.js";

const randomHexColor = () => {
    return Color.toHexColor(
        Random.int(0, 225),
        Random.int(0, 225),
        Random.int(0, 255),
    );
};

export default class extends Shader {
    static vertex = randomHexColor;
    static edge = randomHexColor;
    static face = randomHexColor;
}
