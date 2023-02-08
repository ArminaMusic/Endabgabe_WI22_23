"use strict";
var firework;
(function (firework) {
    // let rockets: Rocket[] = [];
    window.addEventListener("load", handlePageLoad);
    window.addEventListener("resize", handleResize);
    function handlePageLoad() {
        console.log("page loaded");
        //DOM Elements
        firework.canvas = document.getElementById("canvas");
        firework.ctx = firework.canvas.getContext("2d");
        // Set canvas width and height
        firework.canvas.width = window.innerWidth;
        firework.canvas.height = window.innerWidth;
        // Draw to the canvas
        // draw_background();
        draw_particle();
    }
    function handleResize() {
        // Update canvas sizes
        firework.canvas.width = window.innerWidth;
        firework.canvas.height = window.innerHeight;
        draw_particle();
    }
    function draw_particle() {
        firework.ctx.beginPath();
        firework.ctx.moveTo(firework.canvas.width * 0.5, firework.canvas.height * 0.5);
        firework.ctx.lineTo(firework.canvas.width * 0.6, firework.canvas.height * 0.6);
        firework.ctx.strokeStyle = "hsla(20, 95%, 88%, 0.8)";
        firework.ctx.stroke();
    }
})(firework || (firework = {}));
//# sourceMappingURL=explosion.js.map