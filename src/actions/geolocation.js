import axios from 'axios';
import { setAlert } from './alert'; 

import { 
    GET_GEOLOCATION, 
    GET_GEOLOCATIONS, 
    GEOLOCATION_ERROR
} from '../actions/types';

const geolocations = [
        { slug: 'chicago', city: 'Chicago', state: 'IL' },
        { slug: 'los-angeles', city: 'Los Angeles', state: 'CA' },
        { slug: 'new-york', city: 'New York', state: 'NY' },
        { slug: 'philadelphia', city: 'Philadelphia', state: 'PA' },
        { slug: 'miami', city: 'Miami', state: 'FL' },
        { slug: 'houston', city: 'Houston', state: 'TX' },
        { slug: 'las-vegas', city: 'Las Vegas', state: 'NV' },
        { slug: 'san-francisco', city: 'San Francisco', state: 'CA' },
        { slug: 'seattle', city: 'Seattle', state: 'WA' }
];

export const getGeolocations = (query) => async dispatch => {
    console.log('actions/listings::getGeolocations()');
    /*
    const geolocations = [
        { city: 'Chicago', state: 'IL' },
        { city: 'Los Angeles', state: 'CA' },
        { city: 'New York', state: 'NY' },
        { city: 'Philadelphia', state: 'PA' },
        { city: 'Miami', state: 'FL' },
        { city: 'Houston', state: 'TX' },
        { city: 'Las Vegas', state: 'NV' },
        { city: 'San Francisco', state: 'CA' },
        { city: 'Seattle', state: 'WA' }
    ];
    */
    try {
        dispatch({
            type: GET_GEOLOCATIONS,
            payload: geolocations
        });
    } catch(err) {
        dispatch({
            type: GEOLOCATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}


// Get a single geolocation/region by id
export const getGeolocation = id => async dispatch => {
    console.log('actions/listings::getGeolocation(), '+id);
    const geolocation = geolocations.find( g => g.slug === id );
    console.log(geolocation);
    try {
        //const res = await axios.get(`/api/posts/${id}`);
        const res = await axios.get('https://jsonplaceholder.typicode.com/posts/1');
        dispatch({
            type: GET_GEOLOCATION,
            payload: res.data, // geolocation
        });
    } catch(err) {
        dispatch({
            type: GEOLOCATION_ERROR,
            payload: { msg: err.response.statusText, status: err.response.status }
        });
    }
}
