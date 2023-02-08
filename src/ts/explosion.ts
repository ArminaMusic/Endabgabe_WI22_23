namespace firework {
    export let canvas: HTMLCanvasElement;
    export let ctx: CanvasRenderingContext2D;
  
    // let rockets: Rocket[] = [];
  
    window.addEventListener("load", handlePageLoad);
    window.addEventListener("resize", handleResize);
  
    function handlePageLoad(): void {
      console.log("page loaded");
  
      //DOM Elements
      canvas = document.getElementById("canvas") as HTMLCanvasElement;
      ctx = <CanvasRenderingContext2D>canvas.getContext("2d");
  
      // Set canvas width and height
      canvas.width = window.innerWidth;
      canvas.height = window.innerWidth;
  
      // Draw to the canvas
      // draw_background();
      draw_particle();
    }
  
    function handleResize(): void {
      // Update canvas sizes
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
  
      draw_particle();
    }
  
    function draw_particle(): void {
      ctx.beginPath();
      ctx.moveTo(canvas.width * 0.5, canvas.height * 0.5);
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.6);
      ctx.strokeStyle = "hsla(20, 95%, 88%, 0.8)";
      ctx.stroke();
    }
}