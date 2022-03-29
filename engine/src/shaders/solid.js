import Shader from "./shader.js";

const color = ([ hex = "#FFFFFF" ]) => {
    return hex;
}

export default class extends Shader {
    static vertex = color;
    static edge = color;
    static face = color;
}
