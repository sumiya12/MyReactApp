import Player from "./components/Player";
import "./App.css";
import MyApp from "./components/MyApp";
import Button from "./components/Button";
import { useState } from "react";
import AddButton from "./components/AddButton";
// import { Modal, Button } from "bootstrap";

const playerDatas = [
  {
    name: "Erhes",
    age: 19,
    gender: "male",
    score: 45,
  },
  {
    name: "Miigaa",
    age: 26,
    gender: "male",
    score: 60,
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
  {
    name: "baldan",
    age: 25,
    gender: "female",
    score: 30,
  },
  {
    name: "doljin",
    age: 25,
    gender: "female",
    score: 30,
  },
];

function App(props) {
  const [playerData, setPlayerData] = useState(playerDatas);
  //   const [mySort, setMySort] = useState(playerData);
  const [count, setCount] = useState(0);

  const sortName = () => {
    let newData = new Array(...playerData);
    newData.sort((a, b) => {
      return a.name < b.name ? 1 : -1;
    });
    setPlayerData(newData);
  };

  const sortScore = () => {
    let newData = new Array([...playerData]);
    newData.sort((a, b) => {
      return a.score < b.score ? 1 : -1;
    });
    setPlayerData(newData);
  };

  function modify(pm, index) {
    if (pm == "+") {
      playerData[index].score += 1;
    } else {
      playerData[index].score -= 1;
    }
    setPlayerData([...playerData]);
  }
  function addmydata(addData) {
    // const newd = new Array();
    // console.log(newd);
    // newd.push(addData);
    setPlayerData([...playerData, addData]);
  }

  function Avg() {
    let total = 0;
    for (let i = 0; i < playerData.length; i++) {
      total += playerData[i].score;
    }
    let avg = total / playerData.length;
    return avg;
  }

  let ava = Avg();
  // console.log(ava);
  return (
    <div className="">
      <MyApp too={playerDatas.length} />
      <Button sortName={sortName} sortScore={sortScore} />
      {playerData.map((data, index) => {
        return (
          <Player
            key={index}
            playerData={data}
            modify={(pm) => modify(pm, index)}
            index={index}
            avarage={ava}
          />
        );
      })}
      <AddButton addmydata={addmydata} />
    </div>
  );
}

export default App;
