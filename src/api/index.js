import axios from 'axios';

const client = axios.create({ baseURL: 'http://localhost:5000' });
//process.env.REACT_APP_URL
export default client;
