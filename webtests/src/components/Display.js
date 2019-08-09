import React from "react";

function Display(props) {
  return (
    <div>
      <h2>Display here!</h2>
      <p data-testid="balls">Balls: {props.balls}</p>
      <p data-testid="strikes">Strikes: {props.strikes}</p>
    </div>
  );
}

export default Display;
