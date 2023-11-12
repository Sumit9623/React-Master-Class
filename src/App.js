// import Video from './Chapter_2/01_Video';
import './App.css';
import Video from './Chapter_3/01_Conditinal_Rendering';

function App() {
  // let obj = {
    //   title: 'React JS tutorial',
    //   views: '999K',
    //   time: '1 year ago',
    //   channel: 'Coder Dost',
    // };
  const videos_array = [{id:1,title: 'React JS tutorial',views: '999K',time: '1 year ago',channel: 'Coder Dost',verified: true},
                    {id:2,title: 'Node JS tutorial',views: '100K',time: '1 year ago',channel: 'Coder Dost',verified: false},
                    { id:3,title: 'React JS tutorial',views: '1M',time: '1 month ago',channel: 'Coder Dost',verified: true}];
  return (
    <div className="container">
      {
        // <Video {...obj}></Video>
        // <Video title="Node JS tutorial" views="100K" time="1 month ago" verified="true"></Video>
        // <Video title="Mongo DB tutorial" views="1M" time="1 month ago" channel="Coder Dost" verified="true"></Video>
      }

      {
        videos_array.map((video)=>{
          //adding one key to video and passing it as props by destructuring
          return <Video {...{...video,key:video.id}}></Video>
        })
      }
    </div>
  );
}
export default App;