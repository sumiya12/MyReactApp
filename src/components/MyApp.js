import "../style/player.css";
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
