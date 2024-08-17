interface Prototype {
  clone(): Prototype;
}

class Car implements Prototype {
  name: string;
  passengers: string[];
  speed: number;
  color: string;
  constructor(
    name: string,
    passengers: string[],
    speed: number,
    color: string
  ) {
    this.name = name;
    this.passengers = passengers;
    this.speed = speed;
    this.color = color;
  }

  accelerate() {
    this.speed = this.speed + 2;
    console.log(`${this.name} accelerated by ${this.speed} km/h.`);
  }

  drive() {
    console.log(`${this.name} is moving at speed of ${this.speed} km/h.`);
  }

  clone(): Car {
    return new Car(this.name, [...this.passengers], this.speed, this.color);
  }
}


const prototypeCar = new Car("Toyota", ["Ram", "Shyam", "Daisy"], 10, "Purple");

const car1 = prototypeCar.clone();
car1.name = "Toyota 1"
car1.accelerate();