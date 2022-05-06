import Player from "./components/Player";
import "./App.css";
import MyApp from "./components/MyApp";

const playerData = [
  {
    name: "Erhes",
    age: 19,
    gender: "male",
    score: 15,
  },
  {
    name: "Miigaa",
    age: 26,
    gender: "male",
    score: 20,
  },
  {
    name: "Odko",
    age: 21,
    gender: "female",
    score: 25,
  },
  {
    name: "Burmaa",
    age: 25,
    gender: "female",
    score: 30,
  },
];

function App(props) {
  function Avg() {
    let sum = playerData.score;
    let total;
    for (var i = 0; i < sum.length; i++) {
      sum += sum[i];
      total = sum / sum.length;
      console.log(total);
    }
  }
  return (
    <div className="">
      <MyApp />
      {playerData.map((data, index) => {
        // console.log(data);
        return (
          <Player
            key={index}
            playerData={data}
            recapp={props.rec}
            avarage={Avg}
          />
        );
      })}
    </div>
  );
}

export default App;
