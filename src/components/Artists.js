import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import ArtistList from "./ArtistList";
import Jumbotron from "./Jumbotron";
import Copy from "./Copy";
import shazam from "../api/shazam";



class Artists extends React.Component{

  state = { artists: []}

   onSearchSubmit = async (term)  => {
    const response = await shazam.get ("/search?locale=en-US&offset=0&limit=10&term=" + term, {
    params: {query: term}
  })
  	console.log(this);
    this.setState({
      artists: response.data.artists.hits
    }
    )
}

  render(){
    return <div className="container" style={{marginTop:"15px"}}>

    <Jumbotron
    img = "https://images.unsplash.com/photo-1489641493513-ba4ee84ccea9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60" />
    <Copy
    SmallHeader="Testing"
    LargeHeader="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes."
     />

      <SearchBar onSubmit={this.onSearchSubmit} />
      <ArtistList artists={this.state.artists} />



    </div>
  }
}

export default Artists;
