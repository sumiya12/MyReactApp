import Score from "./Score";
import "../style/player.css";
import { useState } from "react";

export default function Player(props) {
  // const [remove, setRemove] = useState(false);
  // console.log(props);
  const handleRem = () => {
    props.remMydata(props.index);
  };

  console.log(props.highscore);

  return (
    <div
      className={
        props.avarage > props.playerData.score ? "playerscore" : "playerscore1"
      }
    >
      {props.highscore === props.playerData.score ? (
        <span id="h">👑</span>
      ) : (
        <span id="h"></span>
      )}

      <div>
        {props.playerData.name}
        <button onClick={handleRem}>remove</button>
      </div>
      <Score
        modify={props.modify}
        index={props.index}
        avarage={props.avarage}
        playerData={props.playerData.score}
        highNum={props.highNum}
      />
    </div>
  );
}
