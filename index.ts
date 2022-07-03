// Schema: variable defination
let firstName: string = 'hello world';
const age = 45;
const isActive = true;

let x: Array<string>;
let y: string[];

let point = [3, 4] as const;
point.push('hello');

// Schema: Rest parameter
const test3: [string, ...number[]] = ['hello', 3, 4, 5, 6, 7, 88];

// ----------------------------------------------------------------------------------------------------------------------
function test(num: number) {
  return +num;
}

// this is checking
test('hello world');

// -----------------------------------------------------------------------------------------------------------------------

// Schema: object

const you: {
  userName: 'Bobby';
  isReturning: boolean;
  age: number;
  stayedAt: (string | number)[];
} = {
  // this should be literally 'Bobby'
  userName: 'Bobby',
  isReturning: true,

  // we can't add age property if it doesn't exists in typescript schema
  age: 23,

  stayedAt: ['canada', 'australia', 23],
};

// we can't access you.userName if don't define in type schema
console.log(you.userName);

// ------------------------------------------------------------------------------------------------------------------------

// Schema: array of objects

const reviews: {
  name: string;
  stars: number;
  loyaltyUser: boolean;
  date: string;
  services: {
    name: string;
  }[];
  location: {
    streets: string;
    city: string;
    code: number;
    country: string;
  };
}[] = [
  {
    name: 'Sheia',
    stars: 5,
    loyaltyUser: true,
    date: '01-04-2021',
    location: {
      streets: 'string',
      city: 'string',
      code: 3,
      country: 'string',
    },
    services: [{ name: 'hello', world: 'testing' }],
  },
  {
    name: 'Andrzej',
    stars: 3,
    loyaltyUser: false,
    date: '28-03-2021',
    location: {
      streets: 'string',
      city: 'string',
      code: 3,
      country: 'string',
    },
    services: [{ name: 'hello' }],
  },
  {
    name: 'Omar',
    stars: 4,
    loyaltyUser: true,
    date: '27-03-2021',
    location: {
      streets: 'string',
      city: 'string',
      code: 3,
      country: 'string',
    },
    services: [{ name: 'hello' }],
  },
  {
    name: 'hello',
  },
];

// ---------------------------------------------------------------------------------------------------------------------

// Schema: with tuple (fixed sized array)

const properties: {
  image: string;
  contact: [number, string];
  isAvailable: boolean;
}[] = [
  {
    image: 'images/colombia-property.jpg',
    contact: [+1123495082908, 'marywinkle@gmail.com'],
    isAvailable: true,
  },
  {
    image: 'images/poland-property.jpg',
    contact: [+1123495082908, 'garydavis@hotmail.com'],
    isAvailable: false,
  },
  {
    image: 'images/london-property.jpg',
    contact: [+1123495082908, 'andyluger@aol.com'],
    isAvailable: true,
  },
];

// tuple with optional parameter in schema
let currentTime: [string, string, number, boolean?] = [
  'time',
  'time',
  34,
  true,
];

// --------------------------------------------------------------------------------------------------------------

// Schema: enum types (custom types)

enum Permission {
  ADMIN = 'ADMIN',
  READ_ONLY = 'READ_ONLY',
}

const me: {
  firstName: string;
  permissions: Permission;
  isReturning: boolean;
  age: number;
}[] = [
  {
    firstName: 'Bobby',
    permissions: Permission.ADMIN,
    isReturning: true,
    age: 35,
  },
];

function check(permission: Permission, value: string) {
  console.log(permission, value);
  // some operation
}

// ------------------------------------------------------------------------------------------------------------

// Schema: any type

const reviewsss: any[] = [
  {
    name: 'Sheia',
    stars: 5,
    permission: Permission.ADMIN,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    permission: Permission.READ_ONLY,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    permission: Permission.ADMIN,
    date: '27-03-2021',
    description: 'Great hosts, location was a bit further than said',
  },
];

const reviewss: (
  | {
      name: string;
      stars: number;
      permission: Permission;
      date: string;
    }
  | {
      name: string;
      stars: number;
      permission: Permission;
      date: string;
      description: string;
    }
)[] = [
  {
    name: 'Sheia',
    stars: 5,
    permission: Permission.ADMIN,
    date: '01-04-2021',
  },
  {
    name: 'Andrzej',
    stars: 3,
    permission: Permission.READ_ONLY,
    date: '28-03-2021',
  },
  {
    name: 'Omar',
    stars: 4,
    permission: Permission.ADMIN,
    date: '27-03-2021',
    description: 'Great hosts, location was a bit further than said',
  },
];

// ---------------------------------------------------------------------------------------------------------

// Schema: union types

function add(firstValue: number | string, secondValue: number | string) {
  let result;
  if (typeof firstValue === 'number' && typeof secondValue === 'number') {
    result = firstValue + secondValue;
  }
  if (typeof firstValue === 'string' && typeof secondValue === 'string') {
    result = firstValue + ' ' + secondValue;
  }
  if (typeof firstValue === 'number' && typeof secondValue === 'string') {
    console.log('cannot perform this addition');
  }
  if (typeof firstValue === 'string' && typeof secondValue === 'number') {
    console.log('cannot perform this addition');
  }

  return result;
}

// ------------------------------------------------------------------------------------------------------

// Schema: function types + void types

function sub(num1: number, num2: number): number {
  return num1 + num2;
}

function log(value: any): void {
  console.log(value);
}

// -----------------------------------------------------------------------------------------------------------

// Schema: optional properties
function printName(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName({ first: 'Bob' });
printName({ first: 'Alice', last: 'Alisson' });

// ---------------------------------------------------------------------------------------------------

// Schema: read-only types
const args = <const>[4, 5];
args.push(3);

console.log(args);

// --------------------------------------------------------------------------------------------------

// Schema: Parameter destructuring

type ABC = { a: number; b: number; c: number };

function sum({ a, b, c }: ABC): void {
  console.log(a + b + c);
}

// --------------------------------------------------------------------------------------------------

// Schema - read-only array type

function doStuff(values: readonly string[]) {
  // We can read from 'values'...
  const copy = values.slice();
  console.log(`The first value is ${values[0]}`);

  // ...but we can't mutate 'values'.
  values.push('hello!');
  // Property 'push' does not exist on type 'readonly string[]'.
}

// ----------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------------
