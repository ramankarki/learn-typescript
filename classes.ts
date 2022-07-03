class Vehicle {
  k = 4;
}

export class Car extends Vehicle {
  make: string;
  year: number;
  color: string;
  readonly read: string = 'herera bas';

  constructor(make: string, year: number, color: string) {
    super();
    this.make = make;
    this.year = year;
    this.color = color;
    this.k = 45;
  }
}

let obj = new Car('helo', 2345, 'red');
obj.read = 'change hani her';

// --------------------------------------------------------------------------------------------

// Schema : getter/setter

class C {
  _length = 0;
  get length() {
    return this._length;
  }
  set length(value) {
    this._length = value;
  }
}

// ------------------------------------------------------------------------------------------------------

// Schema: interface defination

interface Pingable {
  ping(): void;
}

interface Pongable {
  piing(): string;
}

class Sonar implements Pingable {
  ping() {
    console.log('ping!');
  }
}

class Ball implements Pingable, Pongable {
  pong() {
    console.log('pong!');
  }
}

// --------------------------------------------------------------------------------------------------

// Schema: Overwrite fields.

interface Animal {
  dateOfBirth: any;
}

interface Dog extends Animal {
  breed: any;
}

class AnimalHouse {
  resident: Animal;
  constructor(animal: Animal) {
    this.resident = animal;
  }
}

class DogHouse extends AnimalHouse {
  // Does not emit JavaScript code,
  // only ensures the types are correct
  declare resident: Dog;
  constructor(dog: Dog) {
    super(dog);
  }
}

// --------------------------------------------------------------------------------------------------

// Schema: Member visibility

class Greeter {
  public greet() {
    console.log('hi!');
  }
}
const g = new Greeter();
g.greet();

// ----------------------------------------------------------------------------------------

class Greeterr {
  public greet() {
    console.log('Hello, ' + this.getName());
  }
  protected getName() {
    return 'hi';
  }
}

class SpecialGreeter extends Greeterr {
  public howdy() {
    // OK to access protected member here
    console.log('Howdy, ' + this.getName());
  }
}
const h = new SpecialGreeter();
h.greet(); // OK
h.howdy();
h.getName();

// -------------------------------------------------------

class Base {
  protected m = 10;
}
class Derived extends Base {
  // No modifier, so default is 'public'
  m = 15;
}
const d = new Derived();
console.log(d.m); // OK

// -------------------------------------------------------------------

// private is like protected, but doesn’t allow access to the member even from subclasses:

class Base {
  private x = 2;
}
const b = new Base();
// Can't access from outside the class
console.log(b.x);

// --------------------------------

class MySafe {
  private secretKey = 12345;
}

const s = new MySafe();

console.log(s.secretKey);

// OK
console.log(s['secretKey']);

// ------------------------------

// Schema: Hard private

class Dog {
  #barkAmount = 1;
  personality = 'happy';

  constructor() {
    // console.log(this.#barkAmount);
  }
}

const testt = new Dog();
console.log(testt);

// ------------------------------------------------------------------

// Schema: Static methods

class Basee {
  static getGreeting() {
    return 'Hello world';
  }
}
class Derivedd extends Basee {
  myGreeting = Derivedd.getGreeting();
}
