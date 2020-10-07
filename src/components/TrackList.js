import React from "react"

const TrackList = (props) => {
  const tracks = props.tracks.map((track) => {
    return <div> <a href ={track.track.url}> {track.track.url}</a>
    </div>
  })
  return <div> {tracks} </div>
};


export default TrackList
