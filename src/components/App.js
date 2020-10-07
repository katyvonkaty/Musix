import React from 'react';
import SearchBar from './SearchBar';
import shazam from "../api/shazam"
import TrackList from "./TrackList";


class App extends React.Component{

  state = { artists: []}

   onSearchSubmit = async (term)  => {
    const response = await shazam.get ("/search?locale=en-US&offset=0&limit=10&term=" + term, {
    params: {query: term}
  })
  	console.log(this);
    this.setState({artists: response.data.artists.hits})
}

  render(){
    return <div className="ui container" style={{marginTop:"15px"}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
      <TrackList artists={this.state.artists} />
      Found: {this.state.artists.length} artists

    </div>
  }
}

export default App;
