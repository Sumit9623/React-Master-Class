// import Video from './Chapter_2/01_Video';

// import PlayButton from "./Chapter_4/01_PlayButton";
// import Video from "./Chapter_3/01_Conditinal_Rendering";
// import Counter from "./Chapter_5/01_Counter";

import VideoList from "./Chapter_6/02_Video_List";
import AddVideo from "./Chapter_6/01_Forms";
import { useState } from "react";
import "./App.css";

const videos_array = [
  {id: 1,title: "React JS tutorial",views: "999K",time: "1 year ago",channel: "Coder Dost",verified: true},
  {id: 2,title: "Node JS tutorial",views: "100K",time: "1 year ago",channel: "Coder Dost",verified: false},
  {id: 3,title: "MongoDB tutorial",views: "1M",time: "1 month ago",channel: "Coder Dost",verified: true},
];

function App() {
  const [videos,setVideos] = useState(videos_array);
  const [editableVideo,setEditableVideo] = useState(null)
  function addVideo(video)
  {
      setVideos([...videos,{...video,id:videos.length+1}])
  }
  function deleteVideo(id)
  {
      setVideos(videos.filter(vid=>vid.id!==id))
  }
  function editVideo(id)
  {
    setEditableVideo(videos.find(vid=>vid.id===id));
  }
  function updateVideo(video)
  {
    const index = videos.findIndex(vid=>vid.id===video.id)
    const newVidoes = [...videos]
    newVidoes.splice(index,1,video);
    setVideos(newVidoes)
  }
  return (
    <>
      <AddVideo addVideo={addVideo} editableVideo={editableVideo} updateVideo={updateVideo}></AddVideo>
      <VideoList deleteVideo={deleteVideo} videos={videos} editVideo={editVideo}></VideoList>
    </>
  );
}
export default App;
