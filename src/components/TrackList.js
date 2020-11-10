import React from "react"
import { Card, Icon, Image, Grid, Container} from 'semantic-ui-react'


const TrackList = (props) => {
  const tracks = props.tracks.map((track) => {
    return (
      <Card>
        <Image src={track.result.header_image_url} wrapped ui={false} />

        <Card.Content>
        <Card.Description>
          {track.result.primary_artist.name}
        </Card.Description>
          <Card.Header>{track.result.title}</Card.Header>
          <Card.Meta>
            <span className='date'>Page Views: {track.result.stats.pageviews}</span>
          </Card.Meta>


        </Card.Content>
        <Card.Content extra>
          <a href={track.result.url}>
            View Lyrics
          </a>
        </Card.Content>
        </Card>

    )
  })
  return  (
    <Container>
    <Grid columns='four' divided centered stackable>
      <Grid.Row>
          {tracks}
       </Grid.Row>
     </Grid>
     </Container>
  )
};


export default TrackList
