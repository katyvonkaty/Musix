import React from 'react';
import SearchBar from './SearchBar';
import axios from "axios";


class App extends React.Component{

  async onSearchSubmit(term) {
    const response = await axios
    .get ("https://shazam.p.rapidapi.com/auto-complete?locale=en-US&term=" + term, {
    params: {query: term},
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": "70aa9d5184msh24f489409866b23p1ff84cjsn5832992d4f80"
    }
  })
  	console.log(response.data.hints);
}

  render(){
    return <div className="ui container" style={{marginTop:"15px"}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
  }
}

export default App;
