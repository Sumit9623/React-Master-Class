
// This file is to understand the statepassing between siblings
// in App.js There are 2 siblings Add_video and Video_List

import { useContext } from 'react'
import Video  from '../Chapter_3/01_Conditinal_Rendering'
import VideosContext from '../Chapter_10/01_Video_Context'
function VideoList({editVideo})
{
    const videos = useContext(VideosContext)
    return(
        <div className="container">
          {
              videos.map((video) => {
                return <Video {...{ ...video, key:video.id}} editVideo={editVideo}></Video>}
            )
          }
        </div>
    )
}
export default VideoList