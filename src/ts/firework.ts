namespace firework {
  export let canvas: HTMLCanvasElement;
  export let ctx: CanvasRenderingContext2D;
  let particles: Particle[] = [];
  window.addEventListener("load", handlePageLoad);
  window.addEventListener("resize", handleResize);

  function handlePageLoad(): void {

    //DOM Elements
    canvas = document.getElementById("canvas") as HTMLCanvasElement;
    ctx = <CanvasRenderingContext2D>canvas.getContext("2d");

    // DOM Event Listener
    canvas.addEventListener("click", handle_canvas_click);

    // Set canvas width and height
    canvas.width = window.innerWidth;
    canvas.height = window.innerWidth;
    const vector_test: Vector = new Vector(100, 100);
    particles.push(new Particle(vector_test, 122));
    loop();
  }

  function handle_canvas_click(e: MouseEvent): void {
    console.log(e);

    let particle_count = 1000;
    let click_particles = [];
    let click_hue = Utils.random_range(0, 360);

    for (let i = 0; i <= particle_count; i++) {
      click_particles.push(new Particle(new Vector(e.x, e.y), click_hue));
    }

    particles = [...particles, ...click_particles];
  }

  function handleResize(): void {
    // Update canvas sizes
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  function loop() {
    requestAnimationFrame(loop);
    ctx.globalCompositeOperation = "destination-out";
    ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.globalCompositeOperation = "lighter";
    particles.forEach((particle, i) => {
      particle.animate();
      if (!particle.is_visible()) {
        particles.splice(i, 1);
      }
    });
  }
}