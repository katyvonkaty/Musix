import React from "react";
import { Input, Menu, Button } from 'semantic-ui-react'




class SearchBar extends React.Component {

  state = {term : ""}

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term)
 }



  render(){
    return (

      <div className="ui segment search">
        <form onSubmit = {this.onFormSubmit} className= "ui form">
          <div className = "field">
                <label icon='search'> What are you looking for? </label>


                <input style={{width: "80%"}} value= {this.state.term} onChange={(e) => this.setState({term: e.target.value})} type="text" />
                <Button style={{marginLeft: "15px", width: "15%"}} onSubmit = {this.onFormSubmit}> Search </Button>
            </div>
        </form>
     </div>
   )
  }
}

export default SearchBar
