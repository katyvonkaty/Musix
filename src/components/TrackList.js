import React from "react"
import { Card, Icon, Image, Grid } from 'semantic-ui-react'


const TrackList = (props) => {
  const tracks = props.tracks.map((track) => {
    return (
    <Card>

    <Image src={track.track.images.background} wrapped ui={false} />
      <Card.Content>
    <Card.Header> {track.track.subtitle} </Card.Header>
    <Card.Description>
      {track.track.title}
    </Card.Description>
    </Card.Content>
    <Card.Content extra>
      <a>

        {track.track.url}
      </a>
    </Card.Content>
    </Card>

    )
  })
  return  (
    <>
    <Grid>
    <Grid.Row columns={3}>
          <Grid.Column>
          {tracks}
          </Grid.Column>
          <Grid.Column>
          {tracks}
          </Grid.Column>
          <Grid.Column>
          {tracks}
          </Grid.Column>
        </Grid.Row>
      </Grid>

    </>
  )
};


export default TrackList
