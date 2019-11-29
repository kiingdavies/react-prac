import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          "Client-ID 20c11a5c0e1aaf24b714524143123b50f963f70012bbb245918b1365abd273ac"
      }
});