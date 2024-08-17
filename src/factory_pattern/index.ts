interface Shape {
  computeArea(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}
  public computeArea(): number {
    return Math.PI * this.radius ** 2;
  }
}

class Square implements Shape {
  constructor(private sideLength: number) {}
  public computeArea(): number {
    return this.sideLength ** 2;
  }
}

type ShapeType = 'Circle' | 'Square';

class ShapeInstanceFactory {
  static getShapeInstance(type: ShapeType, size: number) {
    switch (type) {
      case 'Circle': {
        return new Circle(size);
      }
      case 'Square': {
        return new Square(size);
      }
      default:
        throw new Error(`Unsupported shape type: ${type}`);
    }
  }
}

(() => {
  const circle = ShapeInstanceFactory.getShapeInstance('Circle', 10);
  console.log('Circle Area: ', circle.computeArea());

  const square = ShapeInstanceFactory.getShapeInstance('Square', 10);
  console.log('Square Area: ', square.computeArea());
})();
