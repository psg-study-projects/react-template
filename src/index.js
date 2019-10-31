import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = 'http://local.xad.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

axios.interceptors.response.use((response) => {
    // do something with the response data
    console.log('Response was received');
    console.log(response);
    if ( response.hasOwnProperty('config') &&  response.config.hasOwnProperty('url') && (response.config.url==="http://local.xad.com/rest/local") ) {
        response.data.results['geoslug'] = 'los-angeles';
    }
    return response;
}, error => {
    // handle the response error
    return Promise.reject(error);
});

ReactDOM.render(<App />, document.getElementById('root'));
