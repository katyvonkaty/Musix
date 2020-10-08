import React, {Component} from 'react';


const Copy = (props) => {
    return (
      <div class="ui column grid testing">
        <div class="row">
          <div class="column"> <h4> {props.SmallHeader} </h4>  <h1> {props.LargeHeader} </h1></div>
        </div>
        </div>
    )
  }


export default Copy;
