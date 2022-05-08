import { useState } from "react";
import "../App.css";
export default function Score(props) {
  // let score = ;\

  // const [score, setScore] = useState(props.playerScore)
  function inc() {
   props.setscore(props.playerScore + 1)
  }
  function dec() {
   props.setscore(props.playerScore-1)
  }

  // debugger

  return (
    <>
      <button onClick={inc} className="aaa">
        +
      </button>
      {props.playerScore}
      <button onClick={dec}>-</button>
    </>
  );
}
