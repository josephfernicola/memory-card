import React from "react";

const Score = (props) => {
  const { score, best } = props;

  return (
    <div>
      <h3 className="header">Score: {score}</h3>
      <h3 className="header">Best: {best}</h3>
    </div>
  );
};

export default Score;
