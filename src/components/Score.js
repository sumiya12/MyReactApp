import { useState } from "react";
import "../App.css";
export default function Score(props) {
  // let score = ;\

  const [score, setScore] = useState(props.playerScore);
  function handler(e) {
    if (e.target.textContent === "+") {
      // debugger;
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  }

  return (
    <>
      <button onClick={handler} className="aaa">
        +
      </button>
      {score}
      <button onClick={handler}>-</button>
    </>
  );
}
