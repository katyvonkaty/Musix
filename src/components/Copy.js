import React, {Component} from 'react';


const Copy = (props) => {
    return (
      <div class="ui column testing">
        <div class="row">
          <div class="column"> <h4> {props.SmallHeader} </h4> <hr />  <h1> {props.LargeHeader} </h1></div>
        </div>
        </div>
    )
  }


export default Copy;
