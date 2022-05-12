import { useState } from "react";
import "../App.css";
import Main from "./Main";
export default function Score(props) {
  // let score = ;\

  // const [score, setScore] = useState(props.playerScore)
  function handler(e) {
    if (e.target.textContent == "+") {
      props.modify("+", props.index);
    } else {
      props.modify("-", props.index);
    }
    // function handleRem() {
    //   props.highNum(playerData);
    // }
  }

  // debugger;

  return (
    <>
      <button onClick={(e) => handler(e)}>+</button>
      {props.playerData}
      <button onClick={(e) => handler(e)}>-</button>
    </>
  );
}
