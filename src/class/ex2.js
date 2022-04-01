//import logo from './logo.svg';
import './App.css';
import Navbar from "./navbar";
import Example from './exCompenent';
function App() {

   return (
    <div className="App">
     <Example/> 
      <div className="compo" style={{display:"flex"}}>
      <h1>App coponents</h1>
      <Navbar/>
      </div>
    </div>
  );
}

export default App;
