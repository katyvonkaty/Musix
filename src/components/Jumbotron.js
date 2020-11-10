
import React, {Component } from 'react';
import { Grid, Image, Container } from 'semantic-ui-react'


const Jumbotron = () => (
  <Container>
  <Grid>
    <Grid.Column width={9}>
      <Image src='kenny.png' />
    </Grid.Column>
    <Grid.Column width={3}>
      <h5> Welcome </h5>
      <h1> WelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcome </h1>
      <p> loremWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWelcomeWe
      lcomeWelcomeWelcomeWelcomeWelcomeWomeWeelcomeWelcomeWelcomeWelcome </p>
    </Grid.Column>

  </Grid>
  </Container>

)


export default Jumbotron;
