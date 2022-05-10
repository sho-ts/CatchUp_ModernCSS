import { css } from "@emotion/react";

const App = () => {
  return (
    <div className="App">
      <h1
        css={css`
          font-size: 20px;
          font-weight: bold;
        `}
      >
        Hello World
      </h1>
    </div>
  );
};

export default App;
