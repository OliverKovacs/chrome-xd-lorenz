import Engine from "../engine/src/engine.js";
import Vector from "../engine/src/vector.js";
import { Color } from "../engine/src/utils.js";

const T = x => [ x, x, x ];

class Point {
    constructor(point) {
        return point;
    }
}

class PointHandler extends Engine.System {
    constructor(engine) {
        super(engine);
    }

    update(list) {
        for (let i = 0; i < list.length; i++) {

            let entity = list[i];
            if (!entity.point) continue;

            const increment_speed = 0.005;
            let x = entity.point.sigma * (entity.point.position[1] - entity.point.position[0]);
            let y = entity.point.position[0] * (entity.point.rho - entity.point.position[2]) - entity.point.position[1];
            let z = entity.point.position[0] * entity.point.position[1] - entity.point.beta * entity.point.position[2];
            entity.point.position[0] += x * increment_speed;
            entity.point.position[1] += y * increment_speed;
            entity.point.position[2] += z * increment_speed;
            entity.point.list.unshift([ ...entity.point.position ]);
            entity.point.list.pop();
        }
    }

    render(list) {

        this.engine.displays[0].clear("#000000");

        const speed_const = 0.001;
        const y_offset = -30;

        for (let i = 0; i < list.length; i++) {
            let entity = list[i];
            if (!entity.point) continue;

            for (let j = 0; j < entity.point.list.length - 1; j++) {
                this.engine.displays[0].line(
                    [ entity.point.list[j][0], entity.point.list[j][2] + y_offset ],
                    [ entity.point.list[j + 1][0], entity.point.list[j + 1][2] + y_offset ],
                        Color.toHexColor(...Vector.scalar([
                        127.5 * (Math.sin(this.engine.now * speed_const + entity.point.color[0] + 0 * Math.PI / 3) + 1),
                        127.5 * (Math.sin(this.engine.now * speed_const + entity.point.color[1] + 2 * Math.PI / 3) + 1),
                        127.5 * (Math.sin(this.engine.now * speed_const + entity.point.color[2] + 4 * Math.PI / 3) + 1),
                ], 1 - (j / entity.point.list.length) ** 2)));
            }
        }
    }
}

export default async (engine) => {

    engine.clear();
    engine.components = [ Engine.Components.Scripts, Point ];
    engine.addSystem(PointHandler);

    const n = 6;
    for (let i = 0; i < n; i++) {
        engine.addEntity(await new Engine.Entity({
            point: {
                position: [ -4 + i / n, -9, 35 ],
                sigma: 10,
                beta: 8/3,
                rho: 28,
                list: Array.from({ length: 500 }, () => [ -4 + i / n, -9, 35 ]),
                color: T(i * 6 * Math.PI / (4 * n)),
            },
        }));
    }

    engine.displays[0].clear("#000000");
    engine.start();
}
