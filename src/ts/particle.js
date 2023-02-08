"use strict";
var firework;
(function (firework) {
    class Particle extends firework.Moveable {
        last_positions = [];
        last_positions_max_count = 5;
        angle = firework.Utils.random_range(0, Math.PI * 2);
        speed = firework.Utils.random_range(1, 10);
        friction = 0.95;
        gravity = 1;
        // Color hue
        hue;
        //Color brightness
        brightness = firework.Utils.random_range(60, 90);
        decay = firework.Utils.random_range(0.05, 0.025);
        constructor(position) {
            super(position);
        }
        draw() {
            console.log("drawing particle");
            firework.ctx.beginPath();
            firework.ctx.moveTo(this.position.x, this.position.y);
            firework.ctx.lineTo(this.position.x + 100, this.position.y + 100);
            firework.ctx.strokeStyle = "hsla(20, 95%, 88%, 0.8)";
            firework.ctx.stroke();
        }
        update() { }
        animate() { }
    }
    firework.Particle = Particle;
})(firework || (firework = {}));
//# sourceMappingURL=particle.js.map