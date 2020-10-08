import React from "react"
import { Image } from 'semantic-ui-react'

const ArtistList = (props) => {
  const artists = props.artists.map((artist) => {
    return <div className="artists">
    <Image src={artist.artist.avatar} avatar />
    <span>{artist.artist.name}</span>
    </div>
  })
  return <div> {artists} </div>
};


export default ArtistList
