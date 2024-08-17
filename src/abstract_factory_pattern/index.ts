interface Chair {
  hasLegs(): boolean;
  sitOn(): string;
}

interface Table {
  hasLegs(): boolean;
  putOn(): string;
}

class ModernChair implements Chair {
  hasLegs(): boolean {
    return false;
  }
  sitOn(): string {
    return 'Sitting on a Modern Charr';
  }
}

class OldChair implements Chair {
  hasLegs(): boolean {
    return true;
  }
  sitOn(): string {
    return 'Sitting on a Old Chair';
  }
}

class ModernTable implements Table {
  hasLegs(): boolean {
    return false;
  }
  putOn(): string {
    return 'Sitting on a Modern Charr';
  }
}

class OldTable implements Table {
  hasLegs(): boolean {
    return true;
  }
  putOn(): string {
    return 'Sitting on a Old Table';
  }
}

interface FurnitureFactory {
  createChair(): Chair;
  createTable(): Table;
}

class ModernFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new ModernChair();
  }
  createTable(): Table {
    return new ModernTable();
  }
}

class OldFurnitureFactory implements FurnitureFactory {
  createChair(): Chair {
    return new OldChair();
  }
  createTable(): Table {
    return new OldTable();
  }
}

function clientCode(factory: FurnitureFactory) {
  const chair = factory.createChair();
  const table = factory.createTable();

  console.log(chair.sitOn());
  console.log(`Chair has legs: ${chair.hasLegs()}`);
  console.log(table.putOn());
  console.log(`Table has legs: ${table.hasLegs()}`);
}

// Usage
console.log('Creating Modern Furniture:');
clientCode(new ModernFurnitureFactory());

console.log('\nCreating Old Furniture:');
clientCode(new OldFurnitureFactory());
