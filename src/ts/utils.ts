namespace firework {
    export class Utils {
      static random_range(min: number, max: number) {
        return Math.random() * (max - min) + min;
      }
    }
}