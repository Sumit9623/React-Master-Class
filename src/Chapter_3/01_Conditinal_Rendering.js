import "./01_Conditional_Rendering.css";

function Video({id,title,children,channel = "Sumit Tupe",views,time,verified = false,deleteVideo,editVideo})
{
  let img_url = `https://picsum.photos/id/${id}/160/90`;
  function del(e)
  {
      e.stopPropagation();
      deleteVideo(id);
  }
  function edit(e)
  {
    e.stopPropagation();
    editVideo(id)
  }
  return (
    <div className="Thumbnail">
      <img src={img_url} alt="Katherine_Johnson" />
      <div className="title">{title}</div>
      <div className="channel">{channel} {verified ? "✅" : null}</div>
      <div className="views_time">{views} views <span>.</span> {time}</div>
      {children}
      <button onClick={del}>Delete</button>
      <button onClick={edit}>Edit</button>
    </div>
  );
}
export default Video;
