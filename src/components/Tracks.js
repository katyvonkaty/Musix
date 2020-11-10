import React, {Component} from 'react';
import SearchBar from "./SearchBar";
import TrackList from "./TrackList";
import Jumbotron from "./Jumbotron";
import shazam from "../api/shazam";
import axios from "axios"



class Tracks extends React.Component{

  state = {  tracks:[]}


   onSearchSubmit = async (term)  => {

    const response = await shazam.get ("/search", {
    params: {
      q: term,
      access_token: "4vz9rrIsOwAgBD8rmr0zpEl1Ue1FDitfRpO0fQ6aD622vnpgLcLgUj-RHQ_XfLpR"
    }
  })
  	console.log(response.data.response.hits);
    this.setState({
      tracks: response.data.response.hits}
    )

}

  render(){
    return <div className="container" id="track">
    <Jumbotron
    smallheader= "WELCOME"
    largeheader="Meet our top music lyrical product"
    paragraph="As the requirements for JavaScript single-page applications have become increasingly complicated, our code must manage more state than ever before. This state can include server responses and cached data, as well as locally created data that has not yet been persisted to the server. UI state is also increasing in complexity, as we need to manage active routes, selected tabs, spinners, pagination controls, and so on" />
    <SearchBar onSubmit={this.onSearchSubmit} />

     <TrackList tracks={this.state.tracks} />




    </div>
  }
}

export default Tracks;
