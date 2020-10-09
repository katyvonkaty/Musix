import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ArtistList from "./ArtistList";
import Jumbotron from "./Jumbotron";
import shazam from "../api/shazam";



class Messages extends React.Component{

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

    <Jumbotron
    img = "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />

      <SearchBar onSubmit={this.onSearchSubmit} />
      <ArtistList artists={this.state.artists} />



    </div>
  }
}

export default Messages;
