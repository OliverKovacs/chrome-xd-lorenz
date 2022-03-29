export default class Shaders {
    constructor(shaders) {
        if (typeof shaders === "string") {
            shaders = { name: shaders, args: [] };
        }
        shaders = Object.fromEntries(this.shaderTypes.map(shaderType => {
            if (shaders.name) {
                return [ shaderType, { ...shaders } ]
            }
            if (typeof shaders[shaderType] === "string") {
                return [ shaderType, { name: shaders[shaderType], args: [] } ];
            }
            return [ shaderType, shaders[shaderType] ];
        }));
        return shaders;
    }

    shaderTypes = [ "vertex", "edge", "face" ];
}
