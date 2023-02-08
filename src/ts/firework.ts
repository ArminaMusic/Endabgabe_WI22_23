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
      
      const vector_test: Vector = new Vector(100, 100);
      console.log(vector_test);
      const particle_test: Particle = new Particle(vector_test);
      particle_test.draw();
    } 
  
    function handleResize(): void {
      // Update canvas sizes
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }
  }