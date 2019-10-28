// Root Reducer
import { combineReducers } from 'redux';
//import alert from './alert';
//import auth from './auth';
//import post from './post';
//import profile from './profile';
import listing from './listing';
import geolocation from './geolocation';

export default combineReducers({
    //alert,
    //auth,
    //post,
    geolocation,
    listing
});
