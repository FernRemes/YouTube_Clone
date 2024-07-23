import axios from 'axios';

const BASE_URL = "https://youtube-v31.p.rapidapi.com";


const options = {
    url: BASE_URL,
    params: {
      maxResults: '100'
    },
    headers: {
      'x-rapidapi-key': 'b455db8c2bmsh4ffd2e7832d071fp193878jsn5f1c83cc9e3e',
      'x-rapidapi-host': 'youtube-v31.p.rapidapi.com'
    }
  };

  export const fetchFromAPI = async (url) => {
    const {data} = await axios.get(`${BASE_URL}/${url}`, options);

    return data;
  }