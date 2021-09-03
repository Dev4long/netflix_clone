import axios from "axios";

const instance = axios.create9({
    baseURL: 'http://api.themoviedb.org/3'
})
 instance.get('/')