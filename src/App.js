import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Messages from './components/Messages'



class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
            <div className="App">
              <Navbar/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/messages" component={Messages}/>
             </div>
       </HashRouter>

    );
  }
}

export default App;
