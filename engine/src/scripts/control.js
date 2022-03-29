import Script from "./script.js";

const base_movement_speed = 0.001;
const base_rotation_speed = Math.PI / 500;

export default class extends Script {

    static update(entity, [ movement = 1, rotation = 1 ], engine, entity_id, script_id) {
        let { Kb } = engine;
        entity.transform.position[0] -= Kb.KeyA * movement * base_movement_speed * engine.dt;
        entity.transform.position[0] += Kb.KeyD * movement * base_movement_speed * engine.dt;
        entity.transform.position[1] -= Kb.KeyW * movement * base_movement_speed * engine.dt;
        entity.transform.position[1] += Kb.KeyS * movement * base_movement_speed * engine.dt;
        entity.transform.position[2] -= Kb.KeyE * movement * base_movement_speed * engine.dt;
        entity.transform.position[2] += Kb.KeyQ * movement * base_movement_speed * engine.dt;
    
        entity.transform.offset[0] -= Kb.ArrowLeft  * movement * base_movement_speed * engine.dt;
        entity.transform.offset[0] += Kb.ArrowRight * movement * base_movement_speed * engine.dt;
        entity.transform.offset[1] -= Kb.ArrowUp    * movement * base_movement_speed * engine.dt;
        entity.transform.offset[1] += Kb.ArrowDown  * movement * base_movement_speed * engine.dt;
 
        for (let i = 0; i < Math.min(entity.transform.rotation.length, 10); i++) {
            let offset = Kb.ShiftRight * 20 + Kb.AltLeft * 10;
            let direction = Kb.ShiftLeft ? -1 : 1;
            entity.transform.rotation[((i + 9) % 10) + offset] += Kb[`Digit${i}`] * direction * rotation * base_rotation_speed * engine.dt;
        }
    }
}
