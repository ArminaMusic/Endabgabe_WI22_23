"use strict";
var firework;
(function (firework) {
    // abstract classes cant be instantiated
    // ony extended
    class Moveable {
        position = { x: 0, y: 0 };
        velocity = { x: 0, y: 0 };
        size;
        alpha;
        color_0;
        color_1;
        constructor(vector) {
            this.position = vector;
            this.alpha = 1;
        }
        exists() {
            return this.alpha >= 0.1 && this.size >= 1;
        }
    }
    firework.Moveable = Moveable;
})(firework || (firework = {}));
//# sourceMappingURL=moveable.js.map