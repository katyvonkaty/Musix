import React from 'react';
import SearchBar from './SearchBar';
import shazam from "../api/shazam"
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import 'semantic-ui-css/semantic.min.css'


class App extends React.Component{

  state = { artists: [], tracks:[]}

   onSearchSubmit = async (term)  => {
    const response = await shazam.get ("/search?locale=en-US&offset=0&limit=10&term=" + term, {
    params: {query: term}
  })
  	console.log(this);
    this.setState({
      artists: response.data.artists.hits,
      tracks: response.data.tracks.hits}
    )
}

  render(){
    return <div className="container" style={{marginTop:"15px"}}>
    <Navbar />
      <SearchBar onSubmit={this.onSearchSubmit} />
      <ArtistList artists={this.state.artists} />
      Found: {this.state.artists.length} artists

      <TrackList tracks={this.state.tracks} />
          <Jumbotron />

    </div>
  }
}

export default App;
