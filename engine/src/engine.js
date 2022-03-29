// Oliver Kovacs 2021 - engine-xd
// https://github.com/dx81/engine-xd

import Entity from "./entity.js";
import Components from "./components/components.js";
import Component from "./components/component.js";
import Systems from "./systems/systems.js";
import System from "./systems/system.js";
import Displays from "./displays/displays.js";
import Scenes from "./scenes/scenes.js";

import Matrix from "./matrix.js";
import Vector from "./vector.js";
import Keyboard from "./keyboard.js";
import { uncap, copy } from "./utils.js";
import API from "./api.js";

export default class Engine {

    constructor(scene, displays) {
        this.displays = displays;
        this.scene = scene;

        this.ms = 0;
        this.frame_draws = 0;

        this.entity_id = 0;

        this.api = new API(this);

        this.systems = [];
        Object.keys(Systems).forEach((system, i) => {
            this[uncap(system)] = new Systems[system](this);
            this.systems[i] = this[uncap(system)];
        });

        this.components = [];
        Object.keys(Components).forEach((component, i) => {
            this.components[i] = Components[component];
        });
    }

    Kb = Keyboard;

    static Entity = Entity;
    static Components = Components;
    static Component = Component;
    static Systems = Systems;
    static System = System;
    static Displays = Displays;

    static Vector = Vector;
    static Matrix = Matrix;
    static Scenes = Scenes;

    loop (ts) {
        this.frame_id = window.requestAnimationFrame(ts => this.loop(ts));
        this.dt = (ts - this.ms);
        this.ms = ts;

        this.update();
        this.render();
    }

    start() {
        this.loop(0);
    }

    stop() {
        window.cancelAnimationFrame(this.frame_id);
    }

    update() {
        this.now = Date.now();
        this.fps = 1000 / this.dt;

        for (let i = 0; i < this.systems.length; i++) {
            this.systems[i].update(this.scene);
        }
    }

    render() {
        this.frame_draws = 0;
        for (let i = 0; i < this.systems.length; i++) {
            this.systems[i].render(this.scene);
        }
    }

    frame(number = 0, dt = 1000 / 60) {
        this.dt = dt;
        for (let i = 0; i < number; i++) {
            this.update();
        }
        this.render();
    }

    async addEntity(entity) {
        this.assignId(entity);
        for (let i = 0; i < this.components.length; i++) {
            let component = this.components[i].name;
            if (!entity[uncap(component)]) continue;
            entity[uncap(component)] = new this.components[i](entity[uncap(component)], entity);
        }
        for (let i = 0; i < this.systems.length; i++) {
            await this.systems[i].add(entity);
        }
        this.scene.push(entity);
    }

    addComponent(component) {
        this.components.push(component);
    }

    addSystem(system) {
        this.systems.push(new system(this));
    }

    clear() {
        this.scene = [];
        this.systems = [];
        this.components = [];
    }

    import(scene) {
        this.scene = [];
        for (let i = 0; i < scene.length; i++) {
            this.addEntity(this.addEntity(scene[i]));
        }
    }

    export() {
        return copy(this.scene);
    }

    assignId(entity) {
        if (entity.id) {
            this.entity_id = Math.max(this.entity_id, entity.id + 1);
        }
        else {
            entity.id = this.entity_id;
            this.entity_id++;
        }
        return entity;
    }

    getEntityById(id) {
        for (let i = 0; i < this.scene.length; i++) {
            if (this.scene[i].id === id) {
                return this.scene[i];
            }
        }
    }
}
