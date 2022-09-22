import type { CSSProperties } from "react";

import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const Typography = styled.p<{
  variant?:
    | "displayExtraLarge"
    | "displayLarge"
    | "displayMedium"
    | "displaySmall"
    | "headingLarge"
    | "headingMedium"
    | "headingSmall"
    | "body"
    | "textSmall"
    | "textExtraSmall"
    | "overline"
    | "micro"
    | "small"
    | "extraSmall";
  isStrong?: boolean;
  gutterBottom?: number;
  letterSpacing?: CSSProperties["letterSpacing"];
  textTransform?: CSSProperties["textTransform"];
  textDecoration?: CSSProperties["textDecoration"];
  color?: CSSProperties["color"];
  as: React.ElementType;
}>`
  color: ${({ color }) => (color ? color : "#333333")};
  font-weight: normal;
  font-family: Arial;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 0 0.5rem;
  ${({ color }) => color && `color: ${color};`}
  ${({ letterSpacing }) => letterSpacing && `letter-spacing: ${letterSpacing};`}
  ${({ textTransform }) => textTransform && `text-transform: ${textTransform};`}
  ${({ textDecoration }) =>
    textDecoration && `text-decoration: ${textDecoration};`}
  ${({ variant = "body" }) => {
    switch (variant) {
      case "displayExtraLarge":
        return css`
          font-size: 60px;
          line-height: 1.25;
        `;
      case "displayLarge":
        return css`
          font-size: 40px;
          line-height: 1.214;
        `;
      case "displayMedium":
        return css`
          font-size: 30px;
          line-height: 1.25;
        `;
      case "displaySmall":
        return css`
          font-size: 24px;
          line-height: 1.333;
        `;
      case "headingLarge":
        return css`
          font-size: 28px;
          line-height: 1.222;
        `;
      case "headingMedium":
        return css`
          font-size: 24px;
          line-height: 1.267;
        `;
      case "headingSmall":
        return css`
          font-size: 20px;
          line-height: 1.4;
        `;
      case "body":
        return css`
          font-size: 16px;
          line-height: 1.625;
        `;
      case "textSmall":
        return css`
          font-size: 14px;
          line-height: 1.571;
        `;
      case "textExtraSmall":
        return css`
          font-size: 12px;
          line-height: 1.5;
        `;
      case "micro":
        return css`
          font-size: 10px;
          letter-spacing: 0.25px;
          line-height: 1.4;
        `;
    }
  }}
  ${({ isStrong }) => isStrong && `font-weight: bold;`}
`;
