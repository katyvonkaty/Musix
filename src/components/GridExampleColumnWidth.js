import React from 'react'
import { Grid, Image } from 'semantic-ui-react'

const GridExampleColumnWidth = (props) => (
  <Grid className="test">
    <Grid.Column width={4}>
      <Image src={props.img} />
    </Grid.Column>
    <Grid.Column width={9}>
      <h2> {props.header} </h2>
      <hr />
      <p> {props.content} </p>
    </Grid.Column>
    <Grid.Column width={3}>
      <Image src={props.img2} />
    </Grid.Column>
  </Grid>
)

export default GridExampleColumnWidth
