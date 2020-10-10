import React from "react"

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => {
    return (<span className="artist-result">
    <h2 className = "artist-header"> {track.track.title} </h2>
    <hr />
    <img className ="avatar" src= {track.track.images.background} />
    <a href ={track.track.url}> Listen Now</a>
    </span>
    )
  })
  return <div className="row"> {tracks} </div>
};


export default TrackList
