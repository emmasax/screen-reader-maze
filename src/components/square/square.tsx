import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { squareSize } from "../../consts";

export const Square = styled.a<{
  isCurrent: boolean;
  isWall: boolean;
  isStart: boolean;
  isFinish: boolean;
}>`
  border: 1px solid #000;
  width: ${squareSize - 2}px;
  height: ${squareSize - 2}px;
  ${({ isWall }) => isWall && `background-color: brown;`}
  ${({ isStart }) =>
    isStart &&
    css`
      &:before {
        content: "⮂";
        display: flex;
        font-size: ${40}px;
        line-height: ${squareSize}px;
        justify-content: center;
        align-items: center;
        transform: rotate(45deg);
      }
    `}
    ${({ isFinish }) =>
    isFinish &&
    css`
      background-color: gold;
      &:before {
        content: "*";
        display: flex;
        font-size: ${squareSize}px;
        line-height: ${squareSize * 1.25}px;
        justify-content: center;
        align-items: center;
      }
    `}
    ${({ isCurrent }) => isCurrent && `background-color: #ccc;`}

    &:focus, &:focus-visible {
    outline: 1px solid green;
  }
`;
