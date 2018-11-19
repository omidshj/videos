import axios from 'axios';

const KEY = 'AIzaSyDvQsliHCNVbxMOTR9dJnrxteFwIcg6abs';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }

});
