//import logo from './logo.svg';
import './App.css';

function App() {
  var a=10;
  var handel=()=>{
    a++;
    document.getElementById('count').innerHTML="value is:"+a
    
  }
  var m="madhu"
  var b="https://www.youtube.com/"
  return (
    <div className="App">
  
      <h1 id="count" style={{color:'red'}}>value is:{a}</h1>
      <h1>{Math.random()*100}</h1>
      <h1>{a-b/* it will display Nan*/}</h1>
      <a href={b}>click</a>


      <button onClick={handel}>click</button>
    </div>
  );
}

export default App;
