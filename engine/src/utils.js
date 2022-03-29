export const _ = undefined;

export const D = x => [ x, x ];
export const T = x => [ x, x, x ];
export const Q = x => [ x, x, x, x ];
export const S = x => [ x, x, x, x, x, x ];
export const N = (x, n) => Array(n).fill(x);

export const uncap = string => string[0].toLowerCase() + string.slice(1);

export const roundn = (number, n) => {
    let x = Math.pow(10, n);
    return Math.round(x * number) / x;
};

export const copy = object => {
    if (typeof object !== "object") return object;
    let out = new object.constructor();
    let entries = Object.entries(object);
    for (let i = 0; i < entries.length; i++) {
        out[entries[i][0]] = this.copy(entries[i][1]);
    }
    return out;
};

export class Random {

    static random = Math.random;

    static int(min = 0, max = 1) {
        return Math.floor(this.random() * (max - min)) + min;
    }

    static float(min = 0, max = 1) {
        return this.random() * (max - min) + min;
    }

    static hex(min, max) {
        return this.int(min, max).toString(16);
    }

    static string(string, length) {
        return Array.from({ length }, () => string[this.int(0, string.length - 1)]).join("");
    }
}

export class Color {

    static toHexColor(r, g, b) {
        return `#${this.toHex(r)}${this.toHex(g)}${this.toHex(b)}`;
    }

    static toHex(int) {
        return Math.round(int).toString(16).padStart(2, "0");
    }
}
