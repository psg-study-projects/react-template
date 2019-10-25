import axios from 'axios';
import { setAlert } from './alert'; 

import { 
    GET_LISTINGS, 
    LISTING_ERROR
} from '../actions/types';


// Get all listings
export const getListings = (query) => async dispatch => {
    console.log(query);
    /*
    const query = {
        i: 'Tax Consultants',
        lat: 40.7364911,
        long: -73.8779137,
        loc: 'Gallatin,TN'
    };
    */
    const payload = {
        ...query,
        uid: '0717320a6078',
        k: '38zQLicqMz8xQPlCv89KH5WWfjeeoBeQQ9SWV6Jl3J2WnxpoJcBJdg==',
        l: 'ad',
        v: '1.2',
        n_ad: '5',
        ip: '68.168.82.68',
        co: 'us',
        o_fmt: 'JSON'
    };
    console.log('actions/listings::getListings()');
    //dispatch({ type: CLEAR_LISTING }); // prevent flicker of past user's listing
    try {
        const res = await axios.get('/rest/local', {
            params: payload
        });
        dispatch({
            type: GET_LISTINGS,
            payload: res.data
        });
    } catch(err) {
        dispatch({
            type: LISTING_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
