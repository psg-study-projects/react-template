import { 
    GET_GEOLOCATION, 
    GET_GEOLOCATIONS, 
    GEOLOCATION_ERROR
} from '../actions/types';

const initialState = {
    geolocation: null,
    geolocations: [],
    loading: true, // once we make a request, set to false
    error: { } // store any request errors
}

export default function(state=initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case GET_GEOLOCATIONS:
            return {
                ...state,
                geolocations: payload,
                loading: false
            };
        case GET_GEOLOCATION:
            return {
                ...state,
                geolocation: payload,
                loading: false
            };
        case GEOLOCATION_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
