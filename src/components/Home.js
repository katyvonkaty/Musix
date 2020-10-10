import React, { Component } from 'react';
import shazam from "../api/shazam"
import "./styles.css";
import Jumbotron from "./Jumbotron";
import Copy from "./Copy";
import GridExampleColumnWidth from "./GridExampleColumnWidth";
import 'semantic-ui-css/semantic.min.css'


class Home extends React.Component{

  render(){
    return (
    <React.Fragment>
          <Copy
          SmallHeader="Testing"
          LargeHeader="We just updated our privacy policy here to better service our customers. We recommend reviewing the changes."
           />

          <Jumbotron
          img="https://images.unsplash.com/photo-1458560871784-56d23406c091?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          />


          <GridExampleColumnWidth
          img= "https://images.unsplash.com/photo-1502773860571-211a597d6e4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          header=" Hello, Come here Often?"
          content= "Flannel tote bag twee kitsch, kogi bicycle rights scenester everyday carry lumbersexual hoodie gluten-free affogato schlitz farm-to-table gastropub. Authentic kickstarter fingerstache twee scenester cold-pressed whatever gentrify. Banjo sustainable fam, gluten-free try-hard pork belly raclette marfa mixtape tousled gochujang vice. Cardigan kogi direct trade affogato. Celiac mustache man braid copper mug, paleo sriracha edison bulb ennui bushwick tofu locavore. Knausgaard man bun crucifix, sustainable meh food truck pour-over tousled vaporware franzen affogato hell of meggings. Pinterest disrupt fixie raw denim, williamsburg coloring book poke selvage. "

           />



           </React.Fragment>

         )
  }
}

export default Home;
