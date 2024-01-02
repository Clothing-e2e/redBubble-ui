import Axios from 'axios';

console.log('aaa process', process.env.NODE_ENV);

const baseURL =
  process.env.NODE_ENV === 'production' ? '/api' : 'http://localhost:8080/api';

console.log('aaa baseUrl', baseURL);

const axios = Axios.create({
  baseURL,
});

export default axios;
