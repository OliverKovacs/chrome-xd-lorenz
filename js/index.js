import Engine from "../engine/src/engine.js";
import SceneGen from "./scene.js"

const display = new Engine.Displays.Canvas("main", {
    size: [ window.innerWidth, window.innerHeight ],
    viewport: { height: 120 },
});
const scene = [];
const engine = new Engine(scene, [ display ]);

window.onload = async () => {
    display.resize([window.innerWidth, window.innerHeight])

    await engine.addEntity(new Engine.Entity({
        camera: {},
    }));
    await SceneGen(engine);

    engine.start();
};

window.onresize = () => {
    display.resize([window.innerWidth, window.innerHeight]);
}
