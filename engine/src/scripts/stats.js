import Script from "./script.js";
import { roundn } from "../utils.js";

export default class extends Script {

    static templates = [
        engine => {
            return `fps: ${roundn(engine.fps, 2)} dt: ${roundn(engine.dt, 2)}<br/>` +
            `entities: ${engine.scene.length} draws: ${engine.frame_draws}<br/>` +
            `sec: ${Math.round(engine.ms / 1000)} frame: ${engine.frame_id}<br/>`;
        },
    ];

    static start(entity, [ stats = [] ]) {
        this.divs = {};
        stats.forEach(({ id }) => {
            this.divs[id] = document.querySelector(`#${id}`);
        });
    }

    static update(entity, [ stats = [] ], engine) {
        for (let i = 0; i < stats.length; i++) {
            this.divs[stats[i].id].innerHTML = this.templates[stats[i].index](engine);
        }
    }
}
