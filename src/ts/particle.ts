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

    constructor(position: Vector, hue: number) {
      super(position);

      for (let i = 0; i < this.last_positions_max_count; i++) {
        this.last_positions.push(new Vector(position.x, position.y));
      }

      this.hue = Utils.random_range(hue - 75, hue + 75);
    }

    draw(): void {
      ctx.beginPath();
      let last_position = this.last_positions[this.last_positions.length - 1];
      ctx.moveTo(last_position.x, last_position.y);
      ctx.lineTo(this.position.x, this.position.y);
      ctx.strokeStyle = `hsla(${this.hue}, 100%, ${this.brightness}%, ${this.alpha})`;
      ctx.stroke();
    }
    update(): void {
      this.position.x = this.position.x + Math.cos(this.angle) * this.speed;
      this.position.y =
        this.position.y + Math.sin(this.angle) * this.speed + this.gravity;
      this.last_positions.pop();
      this.last_positions.unshift(new Vector(this.position.x, this.position.y));
      this.speed = this.speed * this.friction;
      this.alpha = this.alpha - this.decay;
    }
    animate(): void {
      this.update();
      this.draw();
    }
  }
}