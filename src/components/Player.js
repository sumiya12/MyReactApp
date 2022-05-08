import Score from "./Score";
import "../style/player.css";
import { useState } from "react";

export default function Player(props) {
  // debugger
  const [score ,setscore] = useState (props.playerData.score)
  let styles = {color: `rgb(100, ${score}), 100`}
  // debugger
  return (

    
    <div className={props.avarage < score ? "playerscores" : "playerscore1"}  style={styles} >
      <div>{props.playerData.name}</div>
      <Score playerScore={score} setscore={setscore} avarage={props.avarage}  />
    </div>
    
  );
}
