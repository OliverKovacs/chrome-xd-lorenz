import Vector from "./vector.js";

export default class Matrix extends Array {

    static identity(n, number = 1) {
        let out = [];
        for (let x = 0; x < n; x++) {
            out[x] = [];
            for (let y = 0; y < n; y++) {
                out[x][y] = x === y ? number : 0;
            }
        }
        return out;
    }

    static multiply(mat1, mat2) {
        let out = [];
        for (let x = 0; x < mat2.length; x++) {
            out[x] = [];
            for (let y = 0; y < mat1[0].length; y++) {
                out[x][y] = Vector.dot(Matrix.sliceY(mat1, y), Matrix.sliceX(mat2, x));
            }
        }
        return out;
    }

    static scalar(mat, scalar) {
        let out = [];
        for (let x = 0; x < mat.length; x++) {
            out[x] = [];
            for (let y = 0; y < mat[0].length; y++) {
                out[x][y] = mat[x][y] * scalar;
            }
        }
        return out;
    }

    static sliceX(mat, x) {
        return mat[x];
    }

    static sliceY(mat, y) {
        let out = [];
        for (let i = 0; i < mat.length; i++) {
            out[i] = mat[i][y];
        }
        return out;
    }

    static invertXY(mat) {
        let out = [];
        for (let y = 0; y < mat[0].length; y++) {
            out[y] = [];
            for (let x = 0; x < mat.length; x++) {
                out[y][x] = mat[x][y];
            }
        }
        return out;
    }
}
