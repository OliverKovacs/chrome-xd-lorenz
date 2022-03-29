import System from "./system.js";

export default class CameraHandler extends System {
    
    constructor(engine) {
        super(engine);
    }

    render(list) {
        for (let i = 0; i < list.length; i++) {
            if (!list[i].camera  || !list[i].camera.active) continue;
            for (let j = 0; j < list[i].camera.displays.length; j++) {
                let display = list[i].camera.displays[j];
                if (!display.clear) continue;
                this.engine.displays[display.index].clear(display.color);
            }
            this.engine.rendererHandler.renderCamera(list[i], list);
        }
    }
}
