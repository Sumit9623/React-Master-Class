
// this file is to understand the how we can chnge state of parent by child element
// in this file one video get added in App when we submi form

import { useContext, useEffect, useState,useRef } from "react"
import './01_Forms.css'
import VideoDispatchContext from "../Chapter_10/01_VideoDispatchContext";
function AddVideo({editableVideo})
{

    const inputref = useRef(null);



    const dispatch = useContext(VideoDispatchContext)
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
            dispatch({type:"UPDATE",payload:video})
        }
        else
        {
            dispatch({type:"ADD",payload:video})
        }
        setVideo({...initial_video})
    }

    useEffect(()=>{
        if(editableVideo) {setVideo(editableVideo)}
        
        inputref.current.style.backgroundColor='green';
        inputref.current.value="Using useRef";
        inputref.current.style.color="red";


        },[editableVideo])

    return(
        <form>
            <input ref={inputref} type="text" name="title" onChange={handleChange} placeholder="Video Title" value={video.title}></input>
            <input type="text" name="views" onChange={handleChange} placeholder="Video Views" value={video.views}></input>
            <button onClick={handleSubmit}>{(editableVideo)?'Edit':'Add'} Video</button>
        </form>
    )
}
export default AddVideo;