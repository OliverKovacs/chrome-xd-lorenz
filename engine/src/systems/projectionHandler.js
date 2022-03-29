import System from "./system.js";
import Vector from "../vector.js";
import Matrix from "../matrix.js";

export default class ProjectionHandler extends System {

    projectEntity(entity, camera) {

        for (let i = 0; i < entity.geometry.points.length; i++) {
            entity.geometry.projected[i] =
                [ Vector.add(Vector.add(Vector.multiply(entity.geometry.points[i], entity.transform.scale), entity.transform.offset), entity.transform.position) ];
        }

        for (let i = 0; i < entity.geometry.projected.length; i++) {

            for (let d = entity.geometry.dimensions; d > 2; d--) {
                let w;
                if (camera.camera.isometric) {
                    w =  1;
                }
                else {
                    w = (camera.camera.cameraZ - camera.camera.canvasZ) / (camera.camera.cameraZ - entity.geometry.projected[i][0][d - 1]);
                }
                entity.geometry.projected[i] = Matrix.multiply(ProjectionHandler.matrix(d, w), entity.geometry.projected[i]);
            }
            entity.geometry.projected[i] = Vector.scalar(entity.geometry.projected[i][0], camera.camera.isometric ? camera.camera.scale : camera.camera.scale);
        }
    }

    static matrix(dimensions, scale) {
        return Matrix.identity(dimensions, scale);
    }
}
