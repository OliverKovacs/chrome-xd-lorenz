import RotationHandler from "../systems/rotationHandler.js";
import { N } from "../utils.js";

export default class Transform {

    static default(dimensions = 3) {
        return {
            position: N(0, dimensions),
            rotation: N(0, RotationHandler.axisCount(dimensions)),
            scale: N(1, dimensions),
            offset: N(0, dimensions),
        };
    }

    constructor(transform, entity) {
        return { ...Transform.default(entity.geometry ? entity.geometry.dimensions : 3), ...transform };
    }
}
