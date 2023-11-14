// import Video from './Chapter_2/01_Video';

// import PlayButton from "./Chapter_4/01_PlayButton";
// import Video from "./Chapter_3/01_Conditinal_Rendering";
// import Counter from "./Chapter_5/01_Counter";

import VideoList from "./Chapter_6/02_Video_List";
import AddVideo from "./Chapter_6/01_Forms";
import { useReducer, useState} from "react";
import ThemeContext from "./Chapter_9/01_Context";
import VideosContext from "./Chapter_10/01_Video_Context";
import VideoDispatchContext from "./Chapter_10/01_VideoDispatchContext";
import "./App.css";
import Counter from "./Chapter_11/01_useRef";

const videos_array = [
    {id: 1,title: "React JS tutorial",views: "999K",time: "1 year ago",channel: "Coder Dost",verified: true},
    {id: 2,title: "Node JS tutorial",views: "100K",time: "1 year ago",channel: "Coder Dost",verified: false},
    {id: 3,title: "MongoDB tutorial",views: "1M",time: "1 month ago",channel: "Coder Dost",verified: true},
  ];

function App()
{

  const [mode,setMode] = useState('darkMode')

  const [editableVideo,setEditableVideo] = useState(null)
  function editVideo(id)
  {
    setEditableVideo(videos.find(vid=>vid.id===id));
  }

  const [videos,dispatch] = useReducer(videoReducer,videos_array)
  function videoReducer(videos,action){
    switch(action.type){
      case 'ADD':
        return [...videos,{...action.payload,id:videos.length+1}]
      case 'DELETE':
        return videos.filter(vid=>vid.id!==action.payload)
      case 'UPDATE':
        const index = videos.findIndex(vid=>vid.id===action.payload.id)
        const newVidoes = [...videos]
        newVidoes.splice(index,1,action.payload);
        setEditableVideo(null)
        return newVidoes;
      default:
        return videos;
    }
  }

  return (

    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatch}>
          <div className={mode}>
            <Counter>Add</Counter>
            <button onClick={()=>{setMode((mode==='darkMode')?'lightMode':'darkMode')}}>{(mode==='darkMode')?"LightMode":"DarkMode"}</button>
            <AddVideo editableVideo={editableVideo} ></AddVideo>
            <VideoList editVideo={editVideo}></VideoList>
          </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>

  );
}
export default App;
