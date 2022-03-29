export default class Display {
    bgColor = "#000000";
    fgColor ="#FFFFFF";
    parent = "body";
    size = [ 600, 300 ];
    viewport = {};
    scale = [ 1, 1 ];
    lineWidth = 1;

    constructor(options) {
        Object.assign(this, options);
    }

    get dimensions() {
        return [ 0, 0 ];
    }

    viewportToScale(viewport) {
        if (!viewport.width && !viewport.height) return this.scale;
        let width, height, dimensions = this.dimensions;
        if (viewport.width) {
            width = dimensions[0] / viewport.width;
        }
        if (viewport.height) {
            height = dimensions[1] / viewport.height;
        }
        return [ width || height, height || width ];
    }

    resize() {}
    clear() {}
    rectangle() {}
    circle() {}
    line() {}
    polygon() {}
}