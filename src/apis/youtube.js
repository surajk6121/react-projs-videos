import axios from 'axios';

const KEY = 'AIzaSyA3Y5JeUx2ppfGr7_CjM0oN4sBD6-5_PB0';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 5,
    key: KEY
  }
})