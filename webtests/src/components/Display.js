import React from "react";

export default function Display(props) {
  console.log(props.balls);
  return (
    <div className="display">
      <p>Balls: {props.balls}</p>
      <p>Strikes: {props.strikes}</p>
    </div>
  );
}
