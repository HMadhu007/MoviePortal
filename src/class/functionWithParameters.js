//import logo from './logo.svg';
import './App.css';
import Nav from "./class/Nav"
function App() {
  var a=undefined
   var handelclick=(a)=>{
    alert("hii"+(a+a))
  }
   return (
    <div className="App">
     <Nav/>
     <button onClick={()=>handelclick(10)}>click</button>
    </div>
  );
  
}


export default App;
