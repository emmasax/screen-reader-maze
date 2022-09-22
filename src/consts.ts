export const squareSize = 80;
export const columns = 7;
export const rows = 7;
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
export const mazeRoute = [
  { r: 2, c: 0 },
  { r: 2, c: 1 },
  { r: 2, c: 2 },
  { r: 2, c: 3 },
  { r: 1, c: 3 },
  { r: 0, c: 3 },
  { r: 2, c: 4 },
  { r: 3, c: 4 },
  { r: 3, c: 5 },
  { r: 4, c: 4 },
  { r: 5, c: 4 },
  { r: 5, c: 3 },
  { r: 5, c: 2 },
  { r: 4, c: 2 },
];
export const startSquare = mazeRoute[0];
export const finishSquare = mazeRoute[mazeRoute.length - 1];

export const formatter = new Intl.ListFormat("en", {
  style: "long",
  type: "disjunction",
});

export type SquareProps = { r: number; c: number };
