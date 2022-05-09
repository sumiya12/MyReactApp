import "../style/player.css";
export default function Button(props) {
  // debugger;
  return (
    <div className="Button">
      <button onClick={props.sortName}>Names</button>
      <button onClick={props.sortScore}>Score</button>
    </div>
  );
}
