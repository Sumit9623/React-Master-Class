import { useState } from "react";
import "./01_PlayButton.css";
function PlayButton({ children, onPlay, onPause }) {
  // children prop will bring all content writen inside button in App.js
  // const handleClick = ()=>{console.log(message)}
  // let playing = false; // Don't use this approach

    const [playing,setPlaying] = useState(false)
    function handleClick(e) {
      e.stopPropagation();  // To stop parent event handling
      playing ? onPause() : onPlay();
      setPlaying((playing)=>!playing)
    }
    return <button onClick={handleClick}>{(playing)?"Pause":"Play"}</button>;
}
export default PlayButton;
