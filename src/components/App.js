import React from 'react';
import "./styles.css";
import SearchBar from './SearchBar';
import shazam from "../api/shazam"
import ArtistList from "./ArtistList";
import TrackList from "./TrackList";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Copy from "./Copy";
import GridExampleColumnWidth from "./GridExampleColumnWidth";
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
      <Copy
      SmallHeader="Testing"
      LargeHeader="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes."
       />

      <Jumbotron
      img="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=40" />


      <GridExampleColumnWidth
      img= "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=40"
      header=" Hello"
      content= "ying is the duplication of information or an artifact based on an instance of that information or artifact, and not using the process that originally generated it. "
      img2= "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=40" />

      <Jumbotron
      img="https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />



      <SearchBar onSubmit={this.onSearchSubmit} />
      <ArtistList artists={this.state.artists} />

      <TrackList tracks={this.state.tracks} />


    </div>
  }
}

export default App;
