interface Shape {
  computeArea(): void;
}

class Circle implements Shape {
  public computeArea(): void {
    console.log('I compute stuff');
  }
}

class Square implements Shape {
  public computeArea(): void {
    console.log('I compute stuff');
  }
}

class ShapeInstanceFactory {
  getShapeInstance(value: String) {
    if (value === 'Cicle') {
      return new Circle();
    } else if (value === 'Square') {
      return new Square();
    }
    return null;
  }
}

(() => {
  const shapeInstance = new ShapeInstanceFactory();
  const circleInstance = shapeInstance.getShapeInstance('Circle');
  circleInstance?.computeArea();
})();
