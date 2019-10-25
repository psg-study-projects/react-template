import axios from 'axios';
import { setAlert } from './alert'; 

import { 
    GET_GEOLOCATIONS, 
    GEOLOCATION_ERROR
} from '../actions/types';

export const getGeolocations = (query) => async dispatch => {
    console.log('actions/listings::getGeolocations()');
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
