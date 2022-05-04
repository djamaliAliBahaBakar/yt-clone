import axios from 'axios';


const KEY='AIzaSyD4kBLXJCy1Evca17SHb4GlsrVS2z4mt64';

export default axios.create ({
    baseURL: "https://www.googleapis.com/youtube/v3/",
    params: {
        part: "snippet",
        maxResults: 5,
        type: 'video',
        key: KEY
    }

})