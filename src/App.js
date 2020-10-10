import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from './components/Navbar'
import Home from './components/Home'
import Artists from './components/Artists'
import Tracks from './components/Tracks'


class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
            <div className="App">
              <Navbar/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/artists" component={Artists}/>
                  <Route path="/tracks" component={Tracks}/>
             </div>
       </HashRouter>

    );
  }
}

export default App;
