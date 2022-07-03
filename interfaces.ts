import { Enums } from './enums';

export interface Review {
  name: string;
  stars: number;
  test: Enums;
  date: string;
}

// TYPE assertion doesn't thow any error. It is just for intellisence and while accessing DOM element.
let test = <Review>{
  name: 'test',
  stars: 34,
  test: Enums.TEST1,
  date: 'string',
  world: 'hello',
};

console.log(test);

// -------------------------------------------------------------------------------------------------

// Schema: Extending types

interface BasicAddress {
  name?: string;
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

interface AddressWithUnit extends BasicAddress {
  unit: string;
}

// ----------------------------------------------------------------------------------------------------------

// Schema: Intersection Types

interface Colorful {
  color: string;
}
interface Circle {
  radius: number;
}

type ColorfulCircle = Colorful & Circle;

function draw(circle: Colorful & Circle) {
  console.log(`Color was ${circle.color}`);
  console.log(`Radius was ${circle.radius}`);
}

// okay
draw({ color: 'blue', radius: 42 });

// --------------------------------------------------------------------------------------------------------------------

// Schema: Tuple with interface

interface StringNumberPair {
  // specialized properties
  length: 2;
  0: string;
  1: number;

  // Other 'Array<string | number>' members...
  slice(start?: number, end?: number): Array<string | number>;
}
