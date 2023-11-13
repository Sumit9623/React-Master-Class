import "./01_Conditional_Rendering.css";
import PlayButton from '../Chapter_4/01_PlayButton'

function Video({title,id,channel="Coder Dost",views,time,verified,dispatch,editVideo})
{
  let img_url = `https://picsum.photos/id/${id}/160/90`;
  return (
    <div className="Thumbnail">
      <img src={img_url} alt="Katherine_Johnson" />
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified ? "✅" : null}</div>
      <div className="views_time">{views} views <span>.</span> {time}</div>
      <PlayButton onPlay={() => {console.log("Playing...",title);}} onPause={() => {console.log("Paused...",title);}}></PlayButton>
      <button onClick={()=>{dispatch({type:"DELETE",payload:id})}}>Delete</button>
      <button onClick={()=>{editVideo(id)}}>Edit</button>
    </div>
  );
}
export default Video;
