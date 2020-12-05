import axios from 'axios';

const api = axios.create({
    baseURL: 'https://l9lzh9x21k.execute-api.sa-east-1.amazonaws.com/dev/get-info/{login}',
})

export default api;
