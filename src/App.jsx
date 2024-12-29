import { useState } from "react";
import SqaureBox from "./components/Square";
import { boxNames, winningPossiblites } from "./constants";

function App() {
  const [boxValues, setBoxValues] = useState(Array(9).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const winnerCheck = (arr) => {
    for (const possibilities of winningPossiblites) {
      const [x, y, z] = possibilities;
      if (arr[x] !== "" && arr[x] === arr[y] && arr[x] === arr[z]) {
        setWinner(arr[x]);
        return arr[x];
      }
    }
    return null;
  };
  const onClickBox = (index) => {
    if (boxValues[index] !== "" || winner) return;
    let arr = [...boxValues];
    if (currentPlayer === "X") {
      arr[index] = "X";
      setCurrentPlayer("O");
    } else {
      arr[index] = "O";
      setCurrentPlayer("X");
    }
    setBoxValues(arr);
    const winnerFound = winnerCheck(arr);
    if (!winnerFound) {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };
  const handleReset = () => {
    setWinner(null);
    setBoxValues(Array(9).fill(""));
    setCurrentPlayer("X");
  };
  return (
    <div className="w-screen h-screen flex flex-col gap-8 items-center bg-black text-white">
      {winner ? (
        <h1 className="font-semibold text-xl mt-8">Winner is {winner} <span className="text-sm">( To Restart click below )</span></h1>
      ) : (
        <h1 className="font-semibold text-xl ">
          Next Player is {currentPlayer}
        </h1>
      )}
      <div className="w-[60%] h-[60%] bg-white  rounded-lg mx-auto gap-1 p-1 grid grid-cols-3">
        {boxNames.map((boxName, index) => (
          <SqaureBox
            key={boxName}
            index={index}
            value={boxValues[index]}
            onClick={onClickBox}
          />
        ))}
      </div>
      <button
        className="w-[8%] mt-8 p-2 rounded-md bg-blue-900"
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
}

export default App;
