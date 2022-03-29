export default class Scripts {
    constructor(scripts) {
        if (!Array.isArray(scripts)) {
            scripts = [ scripts ];
        }
        for (let i = 0; i < scripts.length; i++) {
            if (typeof scripts[i] === "string") {
                scripts[i] = { name: scripts[i], args: [] }
            }
            if (!scripts[i].args) {
                scripts[i].args = [];
            }
            scripts[i].args = scripts[i].args.map(arg => arg === null ? undefined : arg);
        }
        return scripts;
    }
}
