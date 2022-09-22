import { isEqual } from "lodash";
import { columns, mazeRoute, rows, SquareProps } from "./consts";

export const giveFocusTo = (selector: string) => {
  const el = document.querySelector(selector) as HTMLElement;
  el.focus();
};

export const isOnRoute = (square: SquareProps) =>
  mazeRoute.some((val) => isEqual(val, square));

export const getSquareType = ({ r, c }: SquareProps) => {
  if (r < 0 || c < 0 || r >= rows || c >= columns) {
    return null;
  }
  return isOnRoute({ r, c }) ? "free" : "blocked";
};

export const isValidMove = (square: SquareProps) => {
  const { r, c } = square;
  if (
    r < 0 ||
    c < 0 ||
    r >= rows ||
    c >= columns ||
    getSquareType(square) === "blocked"
  ) {
    return false;
  }
  return true;
};
