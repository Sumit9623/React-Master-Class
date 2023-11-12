import "./01_PlayButton.css";
function PlayButton({ children, onPlay, onPause }) {
  // children prop will bring all content writen inside button in App.js
  // const handleClick = ()=>{console.log(message)}

  let playing = false; // Don't use this approach
  function handleClick(e) {
    e.stopPropagation();  // To stop parent event handling
    playing ? onPause() : onPlay();
    playing = !playing;
  }
  return <button onClick={handleClick}>{children}</button>;
}
export default PlayButton;
