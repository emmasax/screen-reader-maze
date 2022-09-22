import styled from "@emotion/styled";
import { isEqual } from "lodash";
import { KeyboardEvent, useEffect, useState } from "react";
import {
  columns,
  finishSquare,
  formatter,
  mazeLabel,
  rows,
  SquareProps,
  squareSize,
  startSquare,
} from "../../consts";
import {
  getSquareType,
  giveFocusTo,
  isOnRoute,
  isValidMove,
} from "../../utilities";
import { Button } from "../button/button";
import { Square } from "../square/square";
import { Typography } from "../typography/typography";

const StyledMaze = styled.div`
  border: 1px solid #333;
  width: calc(${squareSize} * ${columns}px);
  display: flex;
  flex-wrap: wrap;
  opacity: 0.3;
  margin-top: 16px;
  margin-bottom: 32px;

  &:focus,
  &:focus-visible {
    outline: 0;
    opacity: 1;
  }
`;

export const Maze = () => {
  const [isMazeFocused, setIsMazeFocused] = useState(false);
  const [currentSquare, setCurrentSquare] = useState(startSquare);
  const [wasValidMove, setWasValidMove] = useState(true);

  useEffect(() => {
    const updatePlayerStatus = (currentSquare: SquareProps) => {
      const { r, c } = currentSquare;
      giveFocusTo(`[data-square-id="${r}${c}"]`);

      const status = document.getElementById("status") as HTMLElement;

      if (isEqual(currentSquare, finishSquare)) {
        status.innerText = "You did it! Press enter to restart.";
      } else {
        const up = { r: r - 1, c };
        const right = { r, c: c + 1 };
        const down = { r: r + 1, c };
        const left = { r, c: c - 1 };
        const surroundings: { [key: string]: null | string } = {
          up: getSquareType(up),
          right: getSquareType(right),
          down: getSquareType(down),
          left: getSquareType(left),
        };

        const moves = Object.keys(surroundings).filter(
          (position) => surroundings[position] === "free"
        );

        status.innerText = `${
          isEqual(currentSquare, startSquare) ? "You are at the start. " : ""
        }${
          !wasValidMove ? "You did not move. " : ""
        } You can go ${formatter.format(moves)}. (${r + 1}-${c + 1})`;
      }
    };

    isMazeFocused && updatePlayerStatus(currentSquare);
  }, [currentSquare, wasValidMove, isMazeFocused]);

  const move = ({ dir, type }: { dir: 1 | -1; type: "row" | "col" }) => {
    const r = type === "col" ? currentSquare.r + dir : currentSquare.r;
    const c = type === "row" ? currentSquare.c + dir : currentSquare.c;
    const nextSquare = { r, c };

    if (isValidMove(nextSquare)) {
      setWasValidMove(true);
      setCurrentSquare(nextSquare);
      giveFocusTo(`[data-square-id="${r}${c}"]`);
    } else {
      setWasValidMove(false);
    }
  };

  const handleMove = (e: KeyboardEvent) => {
    switch (e.key) {
      case "ArrowDown":
        move({ dir: 1, type: "col" });
        return;
      case "ArrowUp":
        move({ dir: -1, type: "col" });
        return;
      case "ArrowRight":
        move({ dir: 1, type: "row" });
        return;
      case "ArrowLeft":
        move({ dir: -1, type: "row" });
        return;
      case "Enter":
        setCurrentSquare(startSquare);
        return;
      case "Escape":
        giveFocusTo(`[data-button="start"]`);
        setIsMazeFocused(false);
        return;
      default:
        return;
    }
  };

  return (
    <>
      <Button
        onClick={() => {
          giveFocusTo(`[data-area="maze"]`);
          setIsMazeFocused(true);
        }}
        data-button="start"
      >
        Enter the game
      </Button>

      <StyledMaze
        tabIndex={0}
        onKeyDown={(e) => handleMove(e)}
        aria-label={mazeLabel}
        data-area="maze"
      >
        {Array.from(Array(rows).keys()).map((rowIndex) => {
          return Array.from(Array(columns).keys()).map((colIndex) => {
            const squareId = `${rowIndex}${colIndex}`;
            const isStart = `${startSquare.r}${startSquare.c}` === squareId;
            const isCurrent =
              `${currentSquare.r}${currentSquare.c}` === squareId;
            const isFinish = `${finishSquare.r}${finishSquare.c}` === squareId;
            const isWall = !isOnRoute({ r: rowIndex, c: colIndex });

            return (
              <Square
                data-square-id={squareId}
                key={squareId}
                isCurrent={isCurrent}
                isStart={isStart}
                isWall={isWall}
                isFinish={isFinish}
              />
            );
          });
        })}
      </StyledMaze>

      <Typography
        as="p"
        variant="body"
        aria-live="polite"
        role="alert"
        id="status"
      />
    </>
  );
};
