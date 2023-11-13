
// this file is to understand the how we can chnge state of parent by child element
// in this file one video get added in App when we submi form

import { useEffect, useState } from "react"
import './01_Forms.css'
function AddVideo({addVideo,updateVideo,editableVideo})
{
    const initial_video = {title:'',views:'',time: '1 month ago',channel: 'Sumit Tupe',verified: true}
    const [video,setVideo]=useState(initial_video);
    function handleChange(e)
    {
        e.stopPropagation();
        setVideo({...video,[e.target.name]:e.target.value})
    }
    function handleSubmit(e)
    {
        e.preventDefault();
        e.stopPropagation();
        if(editableVideo)
        {
            updateVideo(video)
        }
        else {addVideo(video);}
        setVideo({...initial_video})
    }
    useEffect(()=>{
        if(editableVideo) {setVideo(editableVideo)}
    },[editableVideo])
    return(
        <form>
            <input type="text" name="title" onChange={handleChange} placeholder="Video Title" value={video.title}></input>
            <input type="text" name="views" onChange={handleChange} placeholder="Video Views" value={video.views}></input>
            <button onClick={handleSubmit}>{(editableVideo)?'Edit':'Add'} Video</button>
        </form>
    )
}
export default AddVideo;