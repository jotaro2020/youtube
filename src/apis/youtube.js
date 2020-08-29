import axios from 'axios';
const KEY = 'AIzaSyBru3tM17922e6fdDhAnJemsXFD83KAmDo';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        maxResults:5,
        key:KEY
    }
})


