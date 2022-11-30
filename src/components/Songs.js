import "./Songs.css";

const Songs = (props) => {
  const { songs } = props;

  // update attribute from numerical input
  const updateSong = (e) => {
    e.preventDefault();
    let val = e.target.value;
    if (val) {
      val = parseInt(val);
    }
    const song = e.target.id.replace("pick-", "");

    const newState = { ...songs };
    newState[song].played = val;
    onChange(newState);
  };

  // roll dice on button click
  const rollDice = (e) => {
    e.preventDefault();
    onRoll("1d20");
  };

  return (
    <div className="songs">
      <button
        id="pick-song"
        className="button"
        aria-label="Pick Song"
        onClick={rollDice}
      >
        Pick Song
      </button>
      <br />
      {Object.entries(songs).map(([key, values]) => {
        return (
          <div className="songs-group" key={key}>
            <div className="songs-name">
              <button
                className="button button--secondary"
                id={`pick-${key}`}
                onClick={updateSong}
              >
                {values.name}
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Songs;
