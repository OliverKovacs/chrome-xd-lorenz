import System from "./system.js";

export default class GeometryHandler extends System {

    update(list) {
        for (let i = 0; i < list.length; i++) {
            if (!list[i].geometry) continue;
            list[i].geometry.points = [ ...list[i].geometry.vertices ];
        }
    }
}