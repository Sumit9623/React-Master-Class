// import Video from './Chapter_2/01_Video';
import { useState } from "react";
import "./App.css";
import Video from "./Chapter_3/01_Conditinal_Rendering";
import PlayButton from "./Chapter_4/01_PlayButton";
import Counter from "./Chapter_5/01_Counter";
const videos_array = [
  {id: 1,title: "React JS tutorial",views: "999K",time: "1 year ago",channel: "Coder Dost",verified: true},
  {id: 2,title: "Node JS tutorial",views: "100K",time: "1 year ago",channel: "Coder Dost",verified: false},
  {id: 3,title: "MongoDB tutorial",views: "1M",time: "1 month ago",channel: "Coder Dost",verified: true},
];
function App() {
  const [videos,setVideos] = useState(videos_array);
  function handleClick(e)
  {
    e.stopPropagation();
    setVideos([...videos,{id: videos.length+1,title: "MongoDB tutorial",views: "1M",time: "1 month ago",channel: "Sumit Tupe",verified: true}]);
    console.log(videos);
  }
  return (
    <>

    <button onClick={handleClick}>Add Video</button>
    <div className="container" onClick={()=>{console.log("App Clicked")}}>
        {
          videos.map((video) => {
            return (
              <Video {...{ ...video, key: video.id }}>
                <PlayButton onPlay={() => {console.log("Playing...",video.title);}} onPause={() => {console.log("Paused...",video.title);}}>
                  Play
                </PlayButton>
              </Video>
              )
            })
          }
        <Counter>Counter</Counter>
    </div>
    </>
  );
}
export default App;
