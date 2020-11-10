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
    <Jumbotron />
    <SearchBar onSubmit={this.onSearchSubmit} />

     <TrackList tracks={this.state.tracks} />




    </div>
  }
}

export default Tracks;
