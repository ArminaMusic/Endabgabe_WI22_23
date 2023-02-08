"use strict";
var firework;
(function (firework) {
    class Utils {
        static random_range(min, max) {
            return Math.random() * (max - min) + min;
        }
    }
    firework.Utils = Utils;
})(firework || (firework = {}));
//# sourceMappingURL=utils.js.map