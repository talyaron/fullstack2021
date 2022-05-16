import { useState, useEffect } from "react";
import useSound from "use-sound";
import { v4 as uuidv4 } from "uuid";

console.log(uuidv4());

function App() {
  const soundUrl = "/audio/jazz.mp3";

  const [playbackRate, setPlaybackRate] = useState(0.75);

  const [play] = useSound(soundUrl, {
    playbackRate,
    volume: 0.5,
  });

  const handleClick = () => {
    play();
  };

  return (
    <button onClick={handleClick}>
      <span role="img" aria-label="Heart">
        💖
      </span>
    </button>
  );
}

export default App;
