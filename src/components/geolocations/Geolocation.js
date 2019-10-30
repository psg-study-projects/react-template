// racfp (arrow function w/ prop types)
import React, { Fragment, useState, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import Spinner from '../layout/Spinner';
import 'startbootstrap-landing-page/css/landing-page.css';
//import { Link }  from 'react-router-dom';
import { getGeolocation }  from '../../actions/geolocation';

const Geolocation = ({ 
    getGeolocation,
    geolocation: { geolocation, loading }, 
    match
}) => {

    useEffect(() => {
        getGeolocation(match.params.id); // get ID from URL
    }, [getGeolocation, match.params.id]);

    return loading || geolocation === null ? 
        <Spinner /> 
        : 
        <Fragment>
            <section className="container">
                <div>
                    <h1>Region Page -- {match.params.id}</h1>
                </div>
                <div>
                    <h2>{geolocation.title}</h2>
                    <p>{geolocation.body}</p>
                </div>
            </section>
        </Fragment>;

}

Geolocation.propTypes = {
    getGeolocation:  PropTypes.func.isRequired,
    geolocation: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    geolocation: state.geolocation // geolocation state
});


export default connect(
    mapStateToProps,
    { getGeolocation }
)(Geolocation);
