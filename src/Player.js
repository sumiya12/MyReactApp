import Score from "./Score";
const player = "This is player score ";
export default function Player() {
  return (
    <div className="App">
      <h1 className="App">{player} </h1>
      <Score />
    </div>
  );
}
