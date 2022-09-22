import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { useState } from "react";
import { Button } from "./components/button/button";
import { Maze } from "./components/maze/maze";
import { Typography } from "./components/typography/typography";
import { columns, rows } from "./consts";

const GameArea = styled.main<{ hide: boolean }>`
  ${({ hide }) =>
    hide &&
    css`
      position: absolute;
      left: -9999rem;
    `}
`;

const App = () => {
  const [isHidden, setIsHidden] = useState(true);

  return (
    <>
      <GameArea hide={isHidden}>
        <Typography variant="headingMedium" as="h1">
          Screen-reader maze
        </Typography>

        <Typography variant="headingSmall" as="h2">
          Instructions
        </Typography>
        <Typography variant="body" as="p">
          There is a {columns} by {rows} grid. You will start at one end of a
          route and using the arrow keys, try to make your way to the finish.
        </Typography>

        <Maze />

        <div id="description">
          <Typography variant="body" as="p">
            The start square has a double arrow icon, the wall squares are brown
            and the finish square is gold with an asterisk icon. You will be
            moving a grey square along the route.
          </Typography>
        </div>
      </GameArea>

      <Button onClick={() => setIsHidden(!isHidden)}>
        {isHidden ? "Show maze" : "Hide maze"}
      </Button>
    </>
  );
};

export default App;

/*

how fast can you get through the route
how to speed up screen-reader


*/
