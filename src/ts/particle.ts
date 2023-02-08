namespace firework {
    export class Particle extends Moveable {
      public last_positions: Vector[] = [];
      public last_positions_max_count: number = 5;
      public angle: number = Utils.random_range(0, Math.PI * 2);
      public speed: number = Utils.random_range(1, 10);
      public friction: number = 0.95;
      public gravity: number = 1;
      // Color hue
      public hue: number;
      //Color brightness
      public brightness: number = Utils.random_range(60, 90);
      public decay: number = Utils.random_range(0.05, 0.025);
  
      constructor(position: Vector) {
        super(position);
      }
  
      draw(): void {
        console.log("drawing particle");
        ctx.beginPath();
        ctx.moveTo(this.position.x, this.position.y);
        ctx.lineTo(this.position.x + 100, this.position.y + 100);
        ctx.strokeStyle = "hsla(20, 95%, 88%, 0.8)";
        ctx.stroke();
      }
  
      update(): void {}
  
      animate(): void {}
    }
}