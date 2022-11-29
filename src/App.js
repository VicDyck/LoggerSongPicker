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
  const [song, setSong] = useState(dataSongs);
  const [pendingRoll, setPendingRoll] = useState();

  // This method is triggered whenever dice are finished rolling
  Dice.onRollComplete = (results) => {
    console.log(results);

    const newState = { ...song };

    if (pendingRoll === "all") {
      Object.keys(newState).forEach((song, i) => {
        newState[song].played = results[i].value;
      });
    } else {
      newState[pendingRoll].total = results[0].value;
    }
    setSong(newState);
  };

  // update attribute from numerical input
  const updateSongs = (newState) => {
    console.log("update the songs");
    setSong(newState);
  };

  // trigger dice roll
  const rollDice = (notation, group) => {
    // save which attribute we're rolling for
    setPendingRoll(group);
    // trigger the dice roll
    Dice.show().roll(notation);
  };

  return (
    <div className="App">
      <h1>Logger Song Picker</h1>
      <Songs
        song={num} // pass in attribute numbers from App state
        onClick={rollDice} // pass down click function
      />
    </div>
  );
}
