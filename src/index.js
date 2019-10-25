import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import axios from 'axios';

//axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
axios.defaults.baseURL = 'http://local.xad.com';
axios.defaults.headers.post['Content-Type'] = 'application/json';
//axios.defaults.headers.common['Authorization'] = 'AUTH TOKEN';

ReactDOM.render(<App />, document.getElementById('root'));
