// import Video from './Chapter_2/01_Video';

// import PlayButton from "./Chapter_4/01_PlayButton";
// import Video from "./Chapter_3/01_Conditinal_Rendering";
// import Counter from "./Chapter_5/01_Counter";

import VideoList from "./Chapter_6/02_Video_List";
import AddVideo from "./Chapter_6/01_Forms";
import { useReducer, useState } from "react";
import "./App.css";

const videos_array = [
  {id: 1,title: "React JS tutorial",views: "999K",time: "1 year ago",channel: "Coder Dost",verified: true},
  {id: 2,title: "Node JS tutorial",views: "100K",time: "1 year ago",channel: "Coder Dost",verified: false},
  {id: 3,title: "MongoDB tutorial",views: "1M",time: "1 month ago",channel: "Coder Dost",verified: true},
];

function App() {

  // State 1: editable
  const [editableVideo,setEditableVideo] = useState(null)
  function editVideo(id)
  {
    setEditableVideo(videos.find(vid=>vid.id===id));
  }

  // State 2: videos
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
    <>
      <AddVideo dispatch={dispatch} editableVideo={editableVideo} ></AddVideo>
      <VideoList dispatch={dispatch}  videos={videos} editVideo={editVideo}></VideoList>
    </>
  );
}
export default App;
