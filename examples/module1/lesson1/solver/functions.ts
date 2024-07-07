export function adding(a: number, b: number) {
  return a + b;
}

export function subtraction(a: number, b: number) {
  return a - b;
}

export function multiplication(a: number, b: number) {
  return a * b;
}

export function dividing(a: number, b: number) {
  return a / b;
}

export const functionalities = [
  {
    function: adding,
    mark: '+',
  },
  {
    function: subtraction,
    mark: '-',
  },
  {
    function: multiplication,
    mark: '*',
  },
  {
    function: dividing,
    mark: '/',
  },
];
