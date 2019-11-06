import { 
    REQUEST_INFO, 
    REGISTER_ERROR
} from '../actions/types';

const initialState = {
    response_info: null,
    loading: true, // once we make a request, set to false
    error: { } // store any request errors
}

export default function(state=initialState, action) {

    const { type, payload } = action;

    switch (type) {
        case REQUEST_INFO:
            return {
                ...state,
                response_info: payload,
                loading: false
            };
        case REGISTER_ERROR:
            return {
                ...state,
                error: payload,
                loading: false
            };
        default:
            return state;
    }
}
