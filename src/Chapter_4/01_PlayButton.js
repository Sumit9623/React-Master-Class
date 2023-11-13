import { useState } from "react";
import "./01_PlayButton.css";

function PlayButton({onPlay, onPause })
{
    const [playing,setPlaying] = useState(false)
    function handleClick(e)
    {
      e.stopPropagation();
      playing ? onPause() : onPlay();
      setPlaying((playing)=>!playing)
    }
    return <button onClick={handleClick}>{(playing)?"Pause":"Play"}</button>;
}
export default PlayButton;
