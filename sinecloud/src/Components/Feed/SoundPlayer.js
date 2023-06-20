import React, { useState } from "react";

const SoundPlayer = ({ soundUrl }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = React.createRef();

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div>
      <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
      <audio ref={audioRef} src={soundUrl} />
    </div>
  );
};

export default SoundPlayer;
