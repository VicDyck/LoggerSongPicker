import "./styles.css";
import { useState } from "react";
import { dataSongs } from "./data/songs";
import { Dice } from "./components/diceBox";
import Songs from "./components/Songs";

// initialize the Dice Box outside of the component
Dice.init().then(() => {
  // clear dice on click anywhere on the screen
  document.addEventListener("mousedown", () => {
    const diceBoxCanvas = document.getElementById("dice-canvas");
    if (window.getComputedStyle(diceBoxCanvas).display !== "none") {
      Dice.hide().clear();
    }
  });
});

export default function App() {
  const [song, setPlayed] = useState(dataSongs);

  // This method is triggered whenever dice are finished rolling
  Dice.onRollComplete = (results) => {
    console.log(results);
    const newState = { ...song };
    newState[results[0].value].played = 1;
    setPlayed(newState);
  };

  // update attribute from numerical input
  const clickName = (newState) => {
    console.log("update the attributes");
    setPlayed(newState);
  };

  // trigger dice roll
  const rollDice = (notation) => {
    Dice.show().roll(notation);
  };

  return (
    <div className="App">
      <h1>Logger Song Picker</h1>
      <Songs
        songs={song} // pass in songs from App state
        onClick={clickName} // pass down click function
        onRoll={rollDice} // pass down roll function
      />
    </div>
  );
}
