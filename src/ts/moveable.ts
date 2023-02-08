namespace firework {
    // abstract classes cant be instantiated
    // ony extended
    export abstract class Moveable {
      public position: Vector = { x: 0, y: 0 };
      public velocity: Vector = { x: 0, y: 0 };
      public size: number;
      public alpha: number;
      public color_0: number;
      public color_1: number;
  
      constructor(vector: Vector) {
        this.position = vector;
        this.alpha = 1;
      }
  
      // abstract methods have to be implemented by the sub class
      abstract draw(): void;
      abstract update(): void;
      abstract animate(): void;
  
      exists(): boolean {
        return this.alpha >= 0.1 && this.size >= 1;
      }
    }
  }