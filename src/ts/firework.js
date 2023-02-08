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
        const vector_test = new firework.Vector(100, 100);
        console.log(vector_test);
        const particle_test = new firework.Particle(vector_test);
        particle_test.draw();
    }
    function handleResize() {
        // Update canvas sizes
        firework.canvas.width = window.innerWidth;
        firework.canvas.height = window.innerHeight;
    }
})(firework || (firework = {}));
//# sourceMappingURL=firework.js.map