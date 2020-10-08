import React from "react"

const ArtistList = (props) => {
  const artists = props.artists.map((artist) => {
    return <div> <p> {artist.artist.name}</p> <br />
    <img className="avatar" src={artist.artist.avatar} />
    </div>
  })
  return <div> {artists} </div>
};


export default ArtistList
