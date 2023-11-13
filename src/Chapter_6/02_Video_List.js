
// This file is to understand the statepassing between siblings
// in App.js There are 2 siblings Add_video and Video_List

import PlayButton from '../Chapter_4/01_PlayButton'
import Video  from '../Chapter_3/01_Conditinal_Rendering'
function VideoList({videos,deleteVideo,editVideo})
{
    return(
        <div className="container" onClick={()=>{console.log("App Clicked")}}>
        {
          videos.map((video) => {
            return (
              <Video {...{ ...video, key: video.id }} deleteVideo={deleteVideo} editVideo={editVideo}>
                <PlayButton onPlay={() => {console.log("Playing...",video.title);}} onPause={() => {console.log("Paused...",video.title);}}>
                  Play
                </PlayButton>
              </Video>
              )
            })
          }
        </div>
    )
}
export default VideoList