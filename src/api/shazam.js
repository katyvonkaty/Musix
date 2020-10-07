import axios from 'axios'

// const searchSongs = (term) => {
//
// }

export default axios.create ({
  baseURL:"https://shazam.p.rapidapi.com",
  headers: {
    "x-rapidapi-host": "shazam.p.rapidapi.com",
    "x-rapidapi-key": "70aa9d5184msh24f489409866b23p1ff84cjsn5832992d4f80"
  }
})
