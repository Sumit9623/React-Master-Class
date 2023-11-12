import "./01_Conditional_Rendering.css";

// In this Condition is applied in APP.js for verified channel or not
// For list there is one array of videos in APP.js it will iterate and will form output for multiple videos
function Video({ title, channel = "Sumit Tupe", views, time,verified=false}) {

    let img_url = "https://picsum.photos/id/1/160/90";
    return (
        <div className="Thumbnail">
        <img src= {img_url}alt="Katherine_Johnson" />
        <div className="title">{title}</div>
        <div className="channel">{channel} {(verified)?"✅":null}</div>
        <div className="views_time">
            {views} views <span>.</span> {time}
        </div>
        </div>
    );
}
export default Video;