import "./01_Conditional_Rendering.css";
import PlayButton from '../Chapter_4/01_PlayButton'
import { useContext } from "react";
import ThemeContext from "../Chapter_9/01_Context";
function Video({title,id,channel="Coder Dost",views,time,verified,dispatch,editVideo})
{
  const themeContext = useContext(ThemeContext);
  let img_url = `https://picsum.photos/id/${id}/160/90`;
  return (
    <div className={`Thumbnail ${themeContext}`}>
      <img src={img_url} alt="Katherine_Johnson" />
      <div className={`title ${themeContext}`}>{title}</div>
      <div className={`channel ${themeContext}`}>{channel} {verified ? "✅" : null}</div>
      <div className={`views_time ${themeContext}`}>{views} views <span>.</span> {time}</div>
      <PlayButton onPlay={() => {console.log("Playing...",title);}} onPause={() => {console.log("Paused...",title);}}></PlayButton>
      <button onClick={()=>{dispatch({type:"DELETE",payload:id})}}>Delete</button>
      <button onClick={()=>{editVideo(id)}}>Edit</button>
    </div>
  );
}
export default Video;
