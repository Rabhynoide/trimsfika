"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const trueStack_1 = require("./trueStack");
class TrueItems {
    trueStack;
    logger;
    PRELOAD_MSG = "Loading in memory";
    POSTLOAD_MSG = "Everything is ready! Make sure this mod loads after other mods that change items!";
    preSptLoad(container) {
        this.logger = container.resolve("WinstonLogger");
        this.Log(this.PRELOAD_MSG);
        container.register("TrueStack", trueStack_1.TrueStack);
    }
    postDBLoad(container) {
        this.trueStack = container.resolve("TrueStack");
        this.Log(this.POSTLOAD_MSG);
    }
    Log(message) {
        this.logger.logWithColor("[True Items] " + message, "cyan");
    }
}
module.exports = { mod: new TrueItems() };
//# sourceMappingURL=mod.js.map