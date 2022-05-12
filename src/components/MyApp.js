import "../style/player.css";
import Main from "./Main";
export default function MyApp(props) {
  return (
    <div className="div">
      <h1>SCOREBOARD</h1>
      <p>
        PLAYER <span>{props.too}</span>
      </p>
    </div>
  );
}
