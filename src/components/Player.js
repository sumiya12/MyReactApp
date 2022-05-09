import Score from "./Score";
import "../style/player.css";
// import { useState } from "react";

export default function Player(props) {
  // console.log(props);
  // debugger

  // let styles = {color: `rgb(100, ${score}), 100`}
  // debugger;
  return (
    <div
      className={
        props.avarage > props.playerData.score ? "playerscore" : "playerscore1"
      }
    >
      <div>{props.playerData.name}</div>
      <Score
        modify={props.modify}
        index={props.index}
        avarage={props.avarage}
        playerData={props.playerData.score}
      />
    </div>
  );
}
