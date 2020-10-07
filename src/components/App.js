// import React from 'react';
// import SearchBar from './SearchBar';
// import axios from "axios";
//
//
// class App extends React.Component{
//
//   async onSearchSubmit(term){
//     const response = await axios.get("https://api.adviceslip.com/advice/search/" + term)
//     console.log(response.data.slips)
//   }
//
//   render(){
//     return <div className="ui container" style={{marginTop:"15px"}}>
//       <SearchBar onSubmit={this.onSearchSubmit} />
//     </div>
//   }
// }
//
// export default App;
//


import React from 'react';
import SearchBar from './SearchBar';
import axios from "axios";


class App extends React.Component{

  onSearchSubmit(term) {
    axios
    .get ("https://shazam.p.rapidapi.com/auto-complete?locale=en-US&term=" + term, {
    params: {query: term},
    headers: {
      "x-rapidapi-host": "shazam.p.rapidapi.com",
      "x-rapidapi-key": "70aa9d5184msh24f489409866b23p1ff84cjsn5832992d4f80"
    }
  })
  .then(response => {
  	console.log(response.data);
  })

}

  render(){
    return <div className="ui container" style={{marginTop:"15px"}}>
      <SearchBar onSubmit={this.onSearchSubmit} />
    </div>
  }
}

export default App;
