//import logo from './logo.svg';
import './App.css';
import Nav from "./class/Nav"
import Movies from './movies';
import Appu from '../src/appu'
import Footer from './footer';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Form from './form.js'
import Collections from './collections';
import Login from './class/log';

function App() {

   return (
     <Router>
      <div className="App">
        <Nav/>
          <Switch>

              <Route exact path='/Apppppu'>
                <Appu />
              </Route>

              <Route exact path='/'>
                <Movies />
              </Route>

              <Route exact path='/form' >
              <Form />
              </Route>

              <Route exact path='/Collections' >
              <Collections/>
              </Route>

         </Switch>
        
        <Footer/>
        <Login/>
      </div>
    </Router>
    
  );
  
}


export default App;
