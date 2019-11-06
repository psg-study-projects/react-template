import axios from 'axios';

import { 
    REQUEST_INFO, 
    REGISTER_ERROR
} from '../actions/types';


export const requestInfo = id => async dispatch => {
    console.log('actions/register::requestInfo()');
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        dispatch({
            type: REQUEST_INFO,
            payload: res.data,
        });
    } catch(err) {
        dispatch({
            type: REGISTER_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}

