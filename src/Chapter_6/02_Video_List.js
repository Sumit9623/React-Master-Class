
// This file is to understand the statepassing between siblings
// in App.js There are 2 siblings Add_video and Video_List

import Video  from '../Chapter_3/01_Conditinal_Rendering'
function VideoList({dispatch,videos,editVideo})
{
    return(
        <div className="container">
          {
              videos.map((video) => {
                // console.log(video);
                // video = {...{ ...video, key:video.id}}
                return <Video {...{ ...video, key:video.id}} editVideo={editVideo} dispatch={dispatch}></Video>}
            )
          }
        </div>
    )
}
export default VideoList