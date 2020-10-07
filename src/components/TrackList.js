import React from "react"

const TrackList = (props) => {
  const artists = props.artists.map((artist) => {
    return <div> <p> {artist.artist.name}</p> <br />
    <img src={artist.artist.avatar} />
    </div>
  })
  return <div> {artists} </div>
};


export default TrackList
