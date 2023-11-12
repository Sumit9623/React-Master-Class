// import Video from './Chapter_2/01_Video';
import "./App.css";
import Video from "./Chapter_3/01_Conditinal_Rendering";
import PlayButton from "./Chapter_4/01_PlayButton";
function App() {
  const videos_array = [
    {id: 1,title: "React JS tutorial",views: "999K",time: "1 year ago",channel: "Coder Dost",verified: true},
    {id: 2,title: "Node JS tutorial",views: "100K",time: "1 year ago",channel: "Coder Dost",verified: false},
    {id: 3,title: "MongoDB tutorial",views: "1M",time: "1 month ago",channel: "Coder Dost",verified: true},
  ];
  return (
    <div className="container"
         onClick={()=>{console.log("App Clicked")}}>

        {
        videos_array.map((video) => {
          return (
              <Video {...{ ...video, key: video.id }}>
                <PlayButton onPlay={() => {console.log("Playing...",video.title);}} onPause={() => {console.log("Paused...",video.title);}}>
                  Play
                </PlayButton>
              </Video>
              )
        })
      }
    </div>
  );
}
export default App;
