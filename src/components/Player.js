import Score from "./Score";
import "../style/player.css";

export default function Player(props) {
  return (
    <div className="playerscore">
      <div>{props.playerData.name} </div>
      <Score playerScore={props.playerData.score} />
    </div>
  );
}
