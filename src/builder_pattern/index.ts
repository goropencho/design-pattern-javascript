class Student {
  constructor(
    public name: string,
    public age: number,
    public id: string,
    public grade?: number,
    public major?: string,
    public email?: string,
    public address?: string,
    public phoneNumber?: string
  ) {}

  toString(): string {
    return `Student: ${this.name}, Age: ${this.age}, ID:${this.id}` + this.grade
      ? `, Grade: ${this.grade}`
      : '' + this.major
        ? `, major: ${this.major}`
        : '' + this.email
          ? `, email: ${this.email}`
          : '' + this.address
            ? `, address: ${this.address}`
            : '' + this.phoneNumber
              ? `, phoneNumber: ${this.phoneNumber}`
              : '';
  }
}

interface StudentBuilder {
  setName(name: string): this;
  setAge(age: number): this;
  setId(id: string): this;
  setGrade(grade: number): this;
  setMajor(major: string): this;
  setEmail(email: string): this;
  setAddress(address: string): this;
  setPhoneNumber(phoneNumber: string): this;
  build(): Student;
}
class ConcreteStudentBuilder implements StudentBuilder {
  private name!: string;
  private age!: number;
  private id!: string;
  private grade?: number;
  private major?: string;
  private email?: string;
  private address?: string;
  private phoneNumber?: string;

  setName(name: string): this {
    this.name = name;
    return this;
  }

  setAge(age: number): this {
    this.age = age;
    return this;
  }

  setId(id: string): this {
    this.id = id;
    return this;
  }

  setGrade(grade: number): this {
    this.grade = grade;
    return this;
  }

  setMajor(major: string): this {
    this.major = major;
    return this;
  }

  setEmail(email: string): this {
    this.email = email;
    return this;
  }

  setAddress(address: string): this {
    this.address = address;
    return this;
  }

  setPhoneNumber(phoneNumber: string): this {
    this.phoneNumber = phoneNumber;
    return this;
  }

  build(): Student {
    if (!this.name || !this.age || !this.id) {
      throw new Error('Name, age, and id are required fields');
    }
    return new Student(
      this.name,
      this.age,
      this.id,
      this.grade,
      this.major,
      this.email,
      this.address,
      this.phoneNumber
    );
  }
}

class StudentDirector {
  constructor(private builder: StudentBuilder) {
    this.builder = builder;
  }

  createMinimalStudent(name: string, age: number, id: string): Student {
    return this.builder.setName(name).setAge(age).setId(id).build();
  }

  createFullTimeStudent(
    name: string,
    age: number,
    id: string,
    major: string,
    email: string
  ): Student {
    return this.builder
      .setName(name)
      .setAge(age)
      .setId(id)
      .setMajor(major)
      .setEmail(email)
      .build();
  }
}
const builder = new ConcreteStudentBuilder();
const director = new StudentDirector(builder);

const minimalStudent = director.createMinimalStudent('Goro Panch', 20, '1001');
console.log(minimalStudent.toString());

const fullTimeStudent = director.createFullTimeStudent(
  'Sourav Loha',
  22,
  '1002',
  'Computer Science',
  'lohar@example.com'
);
console.log(fullTimeStudent.toString());

const customStudent = builder
  .setName('Patrick Hing')
  .setAge(21)
  .setId('1003')
  .setGrade(3.8)
  .setMajor('Maths')
  .setPhoneNumber('123-456-7890')
  .build();
console.log(customStudent.toString());
