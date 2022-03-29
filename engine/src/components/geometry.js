import Matrix from "../matrix.js";

export default class Geometry {

    constructor(geometry) {
        geometry = { ...Geometry.Empty, ...geometry };
        return {
            ...{ points: [ ...geometry.vertices ], projected: [] },
            ...geometry
        };
    }

    static get Empty() {
        return {
            name: "Empty",
            dimensions: 3,
            vertices: [],
            edges: [],
            faces: [],
        };
    }

    static get Tetrahedron() {
        return {

            name: "Tetrahedron",
            dimensions: 3,

            vertices: Matrix.scalar([
                [      0,    0, 0.425 ],
                [  0.577,    0, -0.33 ],
                [ -0.289,  0.5, -0.33 ],
                [ -0.289, -0.5, -0.33 ],
            ], 1 / 0.425),
    
            edges: [
                [ 0, 1 ],
                [ 0, 2 ],
                [ 0, 3 ],
                [ 1, 2 ],
                [ 1, 3 ],
                [ 2, 3 ],
            ],
    
            faces: [
                [ 0, 1, 2 ],
                [ 0, 1, 3 ],
                [ 0, 2, 3 ],
                [ 1, 3, 2 ],
            ],
        };
    }

    static get Cube() {
        return {

            name: "Cube",
            dimensions: 3,

            vertices: [
                [ -1, -1, -1 ],
                [  1, -1, -1 ],
                [  1,  1, -1 ],
                [ -1,  1, -1 ],
                [ -1, -1,  1 ],
                [  1, -1,  1 ],
                [  1,  1,  1 ],
                [ -1,  1,  1 ],
            ],
    
            edges: [
                [ 0, 1 ],
                [ 4, 5 ],
                [ 0, 4 ],
                [ 1, 2 ],
                [ 5, 6 ],
                [ 1, 5 ],
                [ 2, 3 ],
                [ 6, 7 ],
                [ 2, 6 ],
                [ 3, 0 ],
                [ 7, 4 ],
                [ 3, 7 ],
            ],
    
            faces: [
                [ 0, 1, 2, 3 ],
                [ 4, 5, 6, 7 ],
                [ 0, 1, 5, 4 ],
                [ 1, 2, 6, 5 ],
                [ 2, 3, 7, 6 ],
                [ 3, 0, 4, 7 ],
            ],
        };
    }

    static get Octahedron() {
        return {

            name: "Octahedron",
            dimensions: 3,

            vertices: Matrix.scalar([
                [    0,    0, -0.7072 ],
                [    0,    0,  0.7072 ],
                [ -0.5, -0.5,       0 ],
                [  0.5, -0.5,       0 ],
                [  0.5,  0.5,       0 ],
                [ -0.5,  0.5,       0 ],
            ], 1 / 0.7072),
    
            edges: [
                [ 2, 3 ],
                [ 3, 4 ],
                [ 4, 5 ],
                [ 5, 2 ],
                [ 0, 2 ],
                [ 0, 3 ],
                [ 0, 4 ],
                [ 0, 5 ],
                [ 1, 2 ],
                [ 1, 3 ],
                [ 1, 4 ],
                [ 1, 5 ],
            ],
    
            faces: [
                [ 0, 2, 3 ],
                [ 0, 3, 4 ],
                [ 0, 4, 5 ],
                [ 0, 5, 2 ],
                [ 1, 2, 3 ],
                [ 1, 3, 4 ],
                [ 1, 4, 5 ],
                [ 1, 5, 2 ],
            ],
        };
    }

    static get Dodecahedron() {
        return {

            name: "Dodecahedron",
            dimensions: 3,

            vertices: Matrix.scalar([
                [     -1,     -1,     -1 ],
                [      1,     -1,     -1 ],
                [     -1,      1,     -1 ],
                [      1,      1,     -1 ],
                [     -1,     -1,      1 ],
                [      1,     -1,      1 ],
                [     -1,      1,      1 ],
                [      1,      1,      1 ],
                [      0, -1.618, -0.618 ],
                [      0,  1.618, -0.618 ],
                [      0, -1.618,  0.618 ],
                [      0,  1.618,  0.618 ],
                [ -0.618,      0, -1.618 ],
                [  0.618,      0, -1.618 ],
                [ -0.618,      0,  1.618 ],
                [  0.618,      0,  1.618 ],
                [ -1.618, -0.618,      0 ],
                [  1.618, -0.618,      0 ],
                [ -1.618,  0.618,      0 ],
                [  1.618,  0.618,      0 ],
            ],  1 / 1.618),
    
            edges: [
                [   8, 10 ],
                [   9, 11 ],
                [  12, 13 ],
                [  14, 15 ],
                [  16, 18 ],
                [  17, 19 ],
    
    
                [ 0,  8 ],
                [ 0, 12 ],
                [ 0, 16 ],
    
                [ 1,  8 ],
                [ 1, 13 ],
                [ 1, 17 ],
    
                [ 2,  9 ],
                [ 2, 12 ],
                [ 2, 18 ],
    
                [ 3,  9 ],
                [ 3, 13 ],
                [ 3, 19 ],
    
    
                [ 4, 10 ],
                [ 4, 14 ],
                [ 4, 16 ],
    
                [ 5, 10 ],
                [ 5, 15 ],
                [ 5, 17 ],
    
                [ 6, 11 ],
                [ 6, 14 ],
                [ 6, 18 ],
    
                [ 7, 11 ],
                [ 7, 15 ],
                [ 7, 19 ],
            ],
    
            faces: [
                [  8, 10, 4, 16, 0 ],
                [  8, 10, 5, 17, 1 ],
    
                [  9, 11, 6, 18, 2 ],
                [  9, 11, 7, 19, 3 ],
    
                [ 12, 13, 1,  8, 0 ],
                [ 12, 13, 3,  9, 2 ],
    
                [ 14, 15, 5, 10, 4 ],
                [ 14, 15, 7, 11, 6 ],
    
                [ 16, 18, 6, 14, 4 ],
                [ 16, 18, 2, 12, 0 ],
    
                [ 17, 19, 7, 15, 5 ],
                [ 17, 19, 3, 13, 1 ],
            ],
        };
    }

    static get Icosahedron() {
        return {

            name: "Icosahedron",
            dimensions: 3,

            vertices: Matrix.scalar([
                [      0,     -1, -1.618 ],
                [      0,      1, -1.618 ],
                [      0,     -1,  1.618 ],
                [      0,      1,  1.618 ],
                [ -1.618,      0,     -1 ],
                [ -1.618,      0,      1 ],
                [  1.618,      0,     -1 ],
                [  1.618,      0,      1 ],
                [     -1, -1.618,      0 ],
                [      1, -1.618,      0 ],
                [     -1,  1.618,      0 ],
                [      1,  1.618,      0 ],
            ], 1 / 1.618),

            edges: [
                [  0,  1 ],
                [  2,  3 ],
                [  4,  5 ],
                [  6,  7 ],
                [  8,  9 ],
                [ 10, 11 ],

                [ 0,  8 ],
                [ 0,  9 ],
                [ 1, 10 ],
                [ 1, 11 ],

                [ 2,  8 ],
                [ 2,  9 ],
                [ 3, 10 ],
                [ 3, 11 ],

                [ 4, 0 ],
                [ 4, 1 ],
                [ 5, 2 ],
                [ 5, 3 ],

                [ 6, 0 ],
                [ 6, 1 ],
                [ 7, 2 ],
                [ 7, 3 ],

                [ 8, 4 ],
                [ 8, 5 ],
                [ 9, 6 ],
                [ 9, 7 ],

                [ 10, 4 ],
                [ 10, 5 ],
                [ 11, 6 ],
                [ 11, 7 ],
            ],

            faces: [
                [ 0, 4, 8 ],
                [ 0, 6, 9 ],
                [ 3, 7, 11 ],
                [ 3, 5, 10 ],

                [ 1, 4, 10 ],
                [ 1, 6, 11 ],
                [ 2, 7,  9 ],
                [ 2, 5,  8 ],

                [ 0,  8,  9 ],
                [ 2,  8,  9 ],
                [ 1, 10, 11 ],
                [ 3, 10, 11 ],

                [ 4, 0, 1 ],
                [ 6, 0, 1 ],
                [ 5, 2, 3 ],
                [ 7, 2, 3 ],

                [  8, 4, 5 ],
                [ 10, 4, 5 ],
                [  9, 6, 7 ],
                [ 11, 6, 7 ],
            ],
        };
    }

    static get Tesseract() {
        return {

            name: "Tesseract",
            dimensions: 4,

            vertices: [
                [ -1, -1, -1, -1 ],
                [  1, -1, -1, -1 ],
                [ -1,  1, -1, -1 ],
                [  1,  1, -1, -1 ],
                [ -1, -1,  1, -1 ],
                [  1, -1,  1, -1 ],
                [ -1,  1,  1, -1 ],
                [  1,  1,  1, -1 ],
                [ -1, -1, -1,  1 ],
                [  1, -1, -1,  1 ],
                [ -1,  1, -1,  1 ],
                [  1,  1, -1,  1 ],
                [ -1, -1,  1,  1 ],
                [  1, -1,  1,  1 ],
                [ -1,  1,  1,  1 ],
                [  1,  1,  1,  1 ],
            ],

            edges: [
                [  0,  1 ],
                [  2,  3 ],
                [  4,  5 ],
                [  6,  7 ],
                [  8,  9 ],
                [ 10, 11 ],
                [ 12, 13 ],
                [ 14, 15 ],

                [  0,  2 ],
                [  1,  3 ],
                [  4,  6 ],
                [  5,  7 ],
                [  8, 10 ],
                [  9, 11 ],
                [ 12, 14 ],
                [ 13, 15 ],

                [  0,  4 ],
                [  1,  5 ],
                [  2,  6 ],
                [  3,  7 ],
                [  8, 12 ],
                [  9, 13 ],
                [ 10, 14 ],
                [ 11, 15 ],

                [ 0,  8 ],
                [ 1,  9 ],
                [ 2, 10 ],
                [ 3, 11 ],
                [ 4, 12 ],
                [ 5, 13 ],
                [ 6, 14 ],
                [ 7, 15 ],
            ],

            faces: [],
        };
    }

    static get Square() {
        return {

            name: "Square",
            dimensions: 2,

            vertices: [
                [ -1, -1 ],
                [  1, -1 ],
                [ -1,  1 ],
                [  1,  1 ],
            ],

            edges: [
                [ 0, 1 ],
                [ 2, 3 ],
                [ 0, 2 ],
                [ 1, 3 ],
            ],

            faces: [
                [ 0, 1, 3, 2 ],
            ],
        };
    }

    static RegularPolyhedronNames = [
        "Tetrahedron",
        "Cube",
        "Octahedron",
        "Dodecahedron",
        "Icosahedron",
    ];

    static HypercubeNames = [
        "Point",
        "Line",
        "Square",
        "Cube",
        "Tesseract",
        "Penteract",
        "Hexeract",
        "Hepteract",
        "Octeract",
        "Enneract",
        "Dekeract",
    ]

    static Hypercube(dimensions) {
        let n = Math.pow(2, dimensions);
        let vertices = [];
        for (let i = 0; i < n; i++) {
            vertices[i] = [];
            for (let j = 0; j < dimensions; j++) {
                vertices[i][j] = 2 * (Math.floor(i / Math.pow(2, j)) % 2) - 1;
            }
        }
        let edges = [];
        for (let i = 1; i < dimensions + 1; i++) {
            let s1 = Math.pow(2, i);
            let s2 = Math.pow(2, i - 1);
            for (let j = 0; j < n; j += s1) {
                for (let k = 0; k < s2; k++) {
                    edges.push([ j + k, j + k + s2 ]);
                }
            }
        }
        return {
            name: this.HypercubeNames[dimensions] || `${dimensions}-Cube`,
            dimensions,
            vertices,
            edges,
            faces : [],
        };
    }

    static get cube_faces_triangles() {
        return [
            [ 0, 1, 3 ],
            [ 4, 5, 7 ],
            [ 0, 1, 4 ],
            [ 1, 2, 5 ],
            [ 2, 3, 6 ],
            [ 3, 0, 7 ],
        ];
    }

    static get dodecahedron_faces_cube() {
        return [
            [ 0, 1, 3, 2 ],
            [ 4, 5, 7, 6 ],
            [ 0, 1, 5, 4 ],
            [ 1, 3, 7, 5 ],
            [ 3, 2, 6, 7 ],
            [ 2, 0, 4, 6 ],
        ];
    }

    static get icosahedron_faces_rectangles() {
        return [
            [ 0, 1,  3,  2 ],
            [ 4, 5,  7,  6 ],
            [ 8, 9, 11, 10 ],
        ];
    }

    static addVertexToEdge(geometry, vertex, edge) {
        let adjacentFaces = [];
        for (let i = 0; i < geometry.faces.length; i++) {
            if (geometry.faces[i].indexOf(geometry.edges[edge][0]) != -1 && geometry.faces[i].indexOf(geometry.edges[edge][1]) != -1) {
                adjacentFaces.push(i);
            }
        }
        let edges = [];
        let faces = [];
        for (let i = 0; i < adjacentFaces.length; i++) {
            for (let j = 0; j < geometry.faces[adjacentFaces[i]].length; j++) {
                edges.push([ geometry.faces[adjacentFaces[i]][j], geometry.vertices.length ]);
                if (geometry.edges[edge].indexOf(geometry.faces[adjacentFaces[i]][j]) != -1 &&
                    geometry.edges[edge].indexOf(geometry.faces[adjacentFaces[i]][(j + 1) % geometry.faces[adjacentFaces[i]].length]) != -1) {
                    continue;
                }
                faces.push([ geometry.faces[adjacentFaces[i]][j], geometry.vertices.length, geometry.faces[adjacentFaces[i]][(j + 1) % geometry.faces[adjacentFaces[i]].length] ]);
            }
        }
        for (let i = 0; i < adjacentFaces.length; i++) {
            geometry.faces.splice(adjacentFaces[i], 1);
        }
        geometry.edges.splice(edge, 1);
        return {
            vertices: [ ...geometry.vertices, vertex ],
            edges: [ ...geometry.edges, ...edges ],
            faces: [ ...geometry.faces, ...faces ],
        };
    }

    static addVertexToFace(geometry, vertex, face) {
        let edges = [];
        let faces = [];
        for (let i = 0; i < geometry.faces[face].length; i++) {
            edges[i] = [ geometry.faces[face][i], geometry.vertices.length ];
            faces[i] = [ geometry.faces[face][i], geometry.vertices.length, geometry.faces[face][(i + 1) % geometry.faces[face].length] ];
        }
        geometry.faces.splice(face, 1);
        return {
            vertices: [ ...geometry.vertices, vertex ],
            edges: [ ...geometry.edges, ...edges ],
            faces: [ ...geometry.faces, ...faces ],
        };
    }

    static addDiagonalsToFace(geometry, face) {
        let edges = [];
        for (let i = 0; i < geometry.faces[face].length - 3; i++) {
            edges.push([ geometry.faces[face][0], geometry.faces[face][ i + 2 ] ]);
        }
        for (let i = 1; i < geometry.faces[face].length - 2; i++) {
            for (let j = i; j < geometry.faces[face].length - 2; j++) {
                edges.push([ geometry.faces[face][i], geometry.faces[face][j + 2] ]);
            }
        }
        return {
            vertices: geometry.vertices,
            edges: [ ...geometry.edges, ...edges ],
            faces: geometry.faces,
        };
    }

    static regular_convex_polygon(vertex_count, radius = 1, phase = 0) {
        let vertices = [];
        let edges = [];
        let faces = [ [] ];
        for (let i = 0; i < vertex_count; i++) {
            let theta = i * 2 * Math.PI / vertex_count + phase;
            vertices[i] = [ radius * Math.cos(theta), radius * Math.sin(theta), 0 ];
            edges[i] = [ i, (i + 1) % vertex_count];
            faces[0][i] = i;
        }

        return { vertices, edges, faces };
    }

    static octahedron_type_edges(vertex_count) {
        let out = [];
        for (let i = 0; i < vertex_count; i++) {
            out[i] = [ i + 2, ((i + 1) % vertex_count) + 2];
            out[i + vertex_count] = [ 0, i + 2 ];
            out[i + 2 * vertex_count] = [ 1, i + 2 ];
        }
        return out;
    }

    static octahedron_type_faces(vertex_count) {
        let out = [];
        for (let i = 0; i < vertex_count; i++) {
            out[i] = [ 0, i + 2, ((i + 1) % vertex_count) + 2 ];
            out[i + vertex_count] = [ 1, i + 2, ((i + 1) % vertex_count) + 2 ];
        }
        return out;
    }

    static cuboid_type_edges(vertex_count) {
        let out = [];
        for (let i = 0; i < vertex_count; i++) {
            out[i] = [ i, ((i + 1) % vertex_count)];
            out[i + vertex_count] = [ i + vertex_count, ((i + 1) % vertex_count) + vertex_count];
            out[i + 2 * vertex_count] = [ i, i + vertex_count ];
        }
        return out;
    }

    static cuboid_type_faces(vertex_count) {
        let out = [];
        let out1 = [];
        let out2 = [];
        for (let i = 0; i < vertex_count; i++) {
            out[i] = [ i, (i + 1) % vertex_count, ((i + 1) % vertex_count) + vertex_count, i + vertex_count];
            out1[i] = i;
            out2[i] = i + vertex_count;
        }
        out[vertex_count] = out1;
        out[1 + vertex_count] = out2;
        return out;
    }

    static getEulerCharacteristic(geometry) {
        return geometry.vertices.length - geometry.edges.length + geometry.faces.length;
    }
}
