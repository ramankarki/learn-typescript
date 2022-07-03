// Schema: Literal types (type Alias)

export type Price = 45 | 30 | 10 | '20';
export type Country = 'Australia' | 'Canada';
export type test = number | string;
export type Obj = {
  x: number;
  y: string;
};

const propertie: { price: Price }[] = [
  {
    price: 10,
  },
];

const prop: { test1: test } = {
  test1: 'hello',
};
