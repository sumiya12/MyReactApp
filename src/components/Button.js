import "../style/player.css";
export default function Button(props) {
  return (
    <div className="Button">
      <button onClick={props.Mysort()}>Names</button>
      <button onClick={props.setMyScoreSort(myScoreSort)}>Score</button>
    </div>
  );
}
