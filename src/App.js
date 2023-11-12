
import './App.css';
function App() {
  let name = "Sumit"
  let className = "App-header"
  console.log("I am in App")
  return (
    <div className="App">
      <div className={className}>
          Hii My name  is {name}
      </div>
    </div>
  );
}
export {App};
