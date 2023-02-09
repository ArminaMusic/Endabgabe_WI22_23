namespace firework {
  // abstract classes cant be instantiated
  // ony extended
  export abstract class Moveable {
    public position: Vector = { x: 0, y: 0 };
    public velocity: Vector = { x: 0, y: 0 };
    public alpha: number;
    constructor(vector: Vector) {
      this.position = vector;
      this.alpha = 1;
    }
    // abstract methods have to be implemented by the sub class
    abstract draw(): void;
    abstract update(): void;
    abstract animate(): void;
    is_visible(): boolean {
      return this.alpha >= 0.05;
    }
  }
}