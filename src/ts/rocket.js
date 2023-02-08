"use strict";
var firework;
(function (firework) {
    class Rocket extends firework.Moveable {
        constructor(vector) {
            super(vector);
        }
        draw() { }
        update() { }
        animate() { }
    }
    firework.Rocket = Rocket;
})(firework || (firework = {}));
//# sourceMappingURL=rocket.js.map