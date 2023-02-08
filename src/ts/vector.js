"use strict";
var firework;
(function (firework) {
    class Vector {
        x = 0;
        y = 0;
        constructor(x = 0, y = 0) {
            this.x = x;
            this.y = y;
        }
    }
    firework.Vector = Vector;
})(firework || (firework = {}));
//# sourceMappingURL=vector.js.map