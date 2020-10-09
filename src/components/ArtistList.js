import React from "react";


const ArtistList = props =>{
    const artists = props.artists.map( artist =>{
        return (
          <span className="artist-result">
          <img className="avatar" src= {artist.artist.avatar} />
          <h2 className = "artist-header"> {artist.artist.name} </h2>
          </span>
        );
    })
    return(
        <div className="row">
           {artists}
        </div>
    )
}

export default ArtistList
