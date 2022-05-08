import Player from "./components/Player";
import "./App.css";
import MyApp from "./components/MyApp";
import Button from "./components/Button";
import { useState } from "react";

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
  const[myScoreSort,setMyScoreSort] = useState(playerData.score)
  const[mySort,setMySort] = useState(playerData)
  debugger
  const MyScoreSort =(p) =>p.sort(function (a, b) {
    return a.score - b.score;
  });

const Mysort = (p)=> p.sort(function(a, b) {
    const nameA = a.name.toUpperCase(); 
    const nameB = b.name.toUpperCase(); 
    // debugger
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
});
  // debugger
  function Avg() {
    let total = 0;
    for(let i = 0; i < playerData.length; i++) {
        total += playerData[i].score;
    }
    let avg = total / playerData.length;
    return avg
  }
 
  return (
    <div className="">
      <MyApp />
      <Button MyScoreSort={myScoreSort} setMyScoreSort={setMyScoreSort} Mysort={Mysort}/>
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
