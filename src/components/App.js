import React, { Component } from 'react';
import { HashRouter, Route, Link } from "react-router-dom";
import Navbar from './Navbar'
import Home from './Home'
import Artists from './Artists'
import Tracks from './Tracks'
import Login from './Login'


class App extends Component {

  render() {
    return (
      <HashRouter basename='/'>
            <div className="App">
              <Navbar/>
                  <Route exact path="/" component={Home}/>
                  <Route path="/artists" component={Artists}/>
                  <Route path="/tracks" component={Tracks}/>
                  <Route path="/login" component={Login}/>
             </div>
       </HashRouter>

    );
  }
}

export default App;
