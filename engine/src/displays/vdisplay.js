import Display from "./display.js";
import Vector from "../vector.js";

export default class VDisplay extends Display {
    constructor(display, options = {}) {
        super(options);
        this.display = display;
        this.root = options.root || [ 0, 0 ];

        this.resize();
        this.clear();
    }

    get dimensions() {
        return this.size;
    }

    resize(size = this.size, viewport = this.viewport) {
        this.size = size;
        this.sizeh = Vector.scalar(this.size, 0.5);
        this.viewport = viewport;
        this.origin = Vector.add(this.root, this.sizeh);
        this.scale = this.viewportToScale(viewport);
        this.scale_inv = Vector.divide([ 1, 1 ], this.scale);
        return this;
    }

    clear(color = this.bgColor) {
        this.rectangle(Vector.multiply(Vector.scalar(this.sizeh, -1), this.scale_inv), Vector.multiply(this.size, this.scale_inv), color);
        return this;
    }

    rectangle(pos, size, color = this.fgColor, method = "fill") {
        this.display.rectangle(
            this.transform(pos),
            Vector.multiply(size, this.scale),
            color,
            method,
        );
        return this;
    }

    circle(pos, r, color = this.fgColor, method = "fill") {
        this.display.circle(
            this.transform(pos),
            r * this.scale[0],
            color,
            method,
        );
        return this;
    }

    line(pos1, pos2, color = this.fgColor, method = "fill") {
        this.display.line(
            this.transform(pos1),
            this.transform(pos2),
            color,
            method,
        );
        return this;
    }

    polygon(vertices, color = this.fgColor, method = "fill") {
        for (let i = 0; i < vertices.length; i++) {
            vertices[i] = this.transform(vertices[i]);
        }
        this.display.polygon(
            vertices,
            color,
            method,
        );
    }

    transform(point) {
        return Vector.add(Vector.multiply(point, this.scale), this.origin);
    }
}