import Engine from "./src/engine.js";

const N = (x, n) => Array(n).fill(x);

window.onload = async () => {
    const display2 = new Engine.Displays.Canvas("main2");
    const display = new Engine.Displays.Canvas("main");

    const scene = [];
    const engine = new Engine(scene, [ display, display2 ]);

    await engine.addEntity(new Engine.Entity({
        camera: {
            isometric: false,
        },
    }));

    await engine.addEntity(new Engine.Entity({
        camera: {
            displays: [ { index: 1, clear: true, color: "#000000" } ],
        },
    }));

    let scale = 100;
    let dimensions = 7;
    let axes = (dimensions * (dimensions - 1)) / 2;

    await engine.addEntity(new Engine.Entity({
        transform: {
            position: [ 0, 0, - (scale * (dimensions - 2)), 0, 0, 0, 0, 0, 0, 0 ],
            // position: [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ],
            scale: N(scale, dimensions),
        },
        renderer: {
            renderVertices: false,
        },
        shaders: "parallel",
        geometry: Engine.Components.Geometry.Hypercube(dimensions),
        scripts: [
            { name: "spin", args: [ N(0.1, axes) ] },
            { name: "control", args: [ 100, 0.5 ] }
        ],
    }));

    await engine.addEntity(new Engine.Entity({
        scripts: [
            { name: "stats", args: [ [ { id: "stats", index: 0 } ] ] },
        ],
    }));

    engine.start();

    console.log(engine.scene);
};
