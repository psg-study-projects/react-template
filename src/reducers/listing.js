import { 
    GET_LISTINGS, 
    LISTING_ERROR
} from '../actions/types';

const initialState = {
    listings: [],
    loading: true, // once we make a request, set to false
    error: { } // store any request errors
}

export default function(state=initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case GET_LISTINGS:
            // fill empty array w/ listings from server
            return {
                ...state,
                listings: payload,
                loading: false
            };
        case LISTING_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
