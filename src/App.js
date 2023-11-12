import './App.css';
import Video from './Chapter_2/01_Video';

function App() {
  let obj = {
    title: 'React JS tutorial',
    views: '999K',
    time: '1 year ago',
    channel: 'Coder Dost',
  };
  return (
    <div className="container">
      <Video {...obj}></Video> {/* Paasing Props from object using destructuring*/ }
      <Video title="Node JS tutorial" views="100K" time="1 month ago"></Video>
      <Video title="Mongo DB tutorial" views="1M" time="1 month ago" channel="Coder Dost"></Video>
    </div>
  );
}
export default App;