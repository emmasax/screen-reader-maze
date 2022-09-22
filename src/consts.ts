export const squareSize = 80;
export const columns = 6;
export const rows = 6;
export const route = [
  { r: 0, c: 0 },
  { r: 0, c: 1 },
  { r: 1, c: 1 },
  { r: 1, c: 2 },
  { r: 2, c: 2 },
  { r: 3, c: 2 },
  { r: 3, c: 1 },
  { r: 4, c: 1 },
  { r: 5, c: 1 },
  { r: 5, c: 2 },
  { r: 5, c: 3 },
  { r: 5, c: 4 },
  { r: 4, c: 4 },
  { r: 3, c: 4 },
];
export const startSquare = route[0];
export const finishSquare = route[route.length - 1];

export type SquareProps = { r: number; c: number };
