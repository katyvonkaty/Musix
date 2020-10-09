import React, { Component } from 'react';
import SearchBar from './SearchBar';
import shazam from "../api/shazam"
import ArtistList from "./ArtistList";
import "./styles.css";
import TrackList from "./TrackList";
import Jumbotron from "./Jumbotron";
import Copy from "./Copy";
import GridExampleColumnWidth from "./GridExampleColumnWidth";
import 'semantic-ui-css/semantic.min.css'


class Home extends React.Component{

  render(){
    return (
    <React.Fragment>
          <Copy
          SmallHeader="Testing"
          LargeHeader="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes."
           />

          <Jumbotron
          img="https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=40"
          />


          <GridExampleColumnWidth
          img= "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=40"
          header=" Hello"
          content= "ying is the duplication of information or an artifact based on an instance of that information or artifact, and not using the process that originally generated it. "
          img2= "https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=40"
           />



           </React.Fragment>

         )
  }
}

export default Home;
