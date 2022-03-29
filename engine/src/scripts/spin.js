import Script from "./script.js";
import { N } from "../utils.js";

const speed = Math.PI / 500;

export default class extends Script {

    static update(entity, [ rotation = N(1, this.transform.rotation.length) ], engine) {
        for (let i = 0; i < entity.transform.rotation.length; i++) {
            entity.transform.rotation[i] += rotation[i] * engine.dt * speed;
        }
    }
}
