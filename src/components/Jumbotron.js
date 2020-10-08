
import React, {Component} from 'react';
import {Container, Grid} from '@material-ui/core';


class Jumbotron extends Component {
  render() {
      return (
        <Grid spacing={12}>
        <img src="https://images.unsplash.com/photo-1508854710579-5cecc3a9ff17?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60" />
        </Grid>
      )
    }
}



export default Jumbotron;
