
import React, {Component } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react'


const Jumbotron = (props) => (
  <Container>
  <Grid stackable>
    <Grid.Column width={9}>
      <Image src='kenny.png' />
    </Grid.Column>
    <Grid.Column width={6}>
      <h5> {props.smallheader} </h5>
      <h1> {props.largeheader}</h1>
      <p> {props.paragraph} </p>
    </Grid.Column>

  </Grid>
  </Container>

)


export default Jumbotron;
