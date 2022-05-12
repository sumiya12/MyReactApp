import Player from "./Player";
import "../App";
import MyApp from "./MyApp";
import Button from "./Button";
import { useEffect, useState } from "react";
import AddButton from "./AddButton";
// import { useEffect } from "react";
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
    score: 61,
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

function Main(props) {
  const [playerData, setPlayerData] = useState(playerDatas);
  const [max, setMax] = useState(0);
  //   const [mySort, setMySort] = useState(playerData);
  // const [count, setCount] = useState(0);

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
    setPlayerData([...playerData, addData]);
  }

  function remMydata(num) {
    setPlayerData(
      playerData.filter((e, i) => {
        return i !== num;
      })
    );
  }
  // remMydata(2);

  const getHighscore = () => {
    let scores = [];
    playerData.map((person) => {
      scores.push(person.score);
    });
    let highScore = Math.max(...scores);
    // console.log(highScore);
    return highScore;
  };

  function Avg() {
    let total = 0;
    for (let i = 0; i < playerData.length; i++) {
      total += playerData[i].score;
    }
    let avg = total / playerData.length;
    return avg;
  }

  let ava = Avg();
  let highscore = getHighscore();
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
            highscore={highscore}
            remMydata={remMydata}
            max={max}
          />
        );
      })}
      <AddButton addmydata={addmydata} />
    </div>
  );
}

export default Main;
