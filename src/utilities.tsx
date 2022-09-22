import { isEqual } from "lodash";
import { columns, route, rows, SquareProps } from "./consts";

export const isOnRoute = (square: SquareProps) => {
  return route.some((val) => isEqual(val, square));
};

export const getSquareType = ({ r, c }: SquareProps) => {
  if (r < 0 || c < 0 || r >= rows || c >= columns) {
    return null;
  }
  return isOnRoute({ r, c }) ? "free" : "blocked";
};

export const isValidMove = (square: SquareProps) => {
  const { r, c } = square;

  if (r < 0 || c < 0 || r >= rows || c >= columns) {
    return false;
  }
  if (getSquareType(square) === "blocked") {
    return false;
  }

  return true;
};

export const giveFocusTo = (selector: string) => {
  const el = document.querySelector(selector) as HTMLElement;
  el.focus();
};
