import Display from "./display.js";
import Vector from "../vector.js";

export default class Canvas extends Display {
    constructor(id = "canvas", options = {}) {
        super(options);
        this.canvas = document.getElementById(id);
        if (!this.canvas) {
            this.canvas = document.createElement("canvas");
            this.canvas.setAttribute("id", id);
            document.querySelector(this.parent).prepend(this.canvas);
        }
        this.ctx = this.canvas.getContext("2d");
        this.resize();
        this.clear();
    }

    static Style = {
        fill: "fillStyle",
        stroke: "strokeStyle"
    }

    get dimensions() {
        return [ this.canvas.width, this.canvas.height ];
    }

    resize(size = this.size, viewport = this.viewport) {
        this.canvas.width = size[0];
        this.canvas.height = size[1];
        this.canvas.style.width = size[0];
        this.canvas.style.height = size[1];
        this.ctx.translate(...Vector.scalar(size, 0.5));
        this.scale = this.viewportToScale(viewport);
        this.ctx.scale(...this.scale);
        this.ctx.lineWidth = this.lineWidth / this.scale[0];
        return this;
    }

    clear(color = this.bgColor) {
        let w = this.canvas.width / this.scale[0];
        let h = this.canvas.height / this.scale[1];
        this.ctx.fillStyle = color;
        this.ctx.fillRect(-w, -h, 2 * w, 2 * h);
        return this;
    }

    rectangle(pos, size, color = this.fgColor, method = "fill") {
        this.ctx[Canvas.Style[method]] = color;
        this.ctx.beginPath();
        this.ctx.rect(pos[0], pos[1], size[0], size[1]);
        this.ctx[method]();
        return this;
    }

    circle(pos, r = 1, color = this.fgColor, method = "fill") {
        this.ctx[Canvas.Style[method]] = color;
        this.ctx.beginPath();
        this.ctx.arc(pos[0], pos[1], r, 0, 2 * Math.PI);
        this.ctx[method]();
        return this;
    }

    line(pos1, pos2, color = this.fgColor) {
        this.ctx.strokeStyle = color;
        this.ctx.beginPath();
        this.ctx.moveTo(pos1[0], pos1[1]);
        this.ctx.lineTo(pos2[0], pos2[1]);
        this.ctx.stroke();
        return this;
    }

    polygon(vertices, color = this.fgColor, method = "fill") {
        this.ctx[Canvas.Style[method]] = color;
        this.ctx.beginPath();
        this.ctx.moveTo(vertices[0][0], vertices[0][1]);
        for (let i = 1; i < vertices.length; i++) {
            this.ctx.lineTo(vertices[i][0], vertices[i][1]);
        }
        this.ctx[method]();
        return this;
    }
}
