// racfp (arrow function w/ prop types)
import React, { Fragment, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import Spinner from '../layout/Spinner';
import Listings from '../../components/listings/Listings';
import SearchForm from '../../components/listings/SearchForm';
import MajorNav from '../../components/common/MajorNav';
import { getGeolocation }  from '../../actions/geolocation';
import './Geolocation.css';

const Geolocation = ({ 
    getGeolocation,
    geolocation: { geolocation, loading }, 
    match
}) => {

    useEffect(() => {
        getGeolocation(match.params.id); // get ID from URL
    }, [getGeolocation, match.params.id]);

    return (
        <Fragment> 
            <MajorNav />
            <header className="OFF-masthead text-white text-center">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-10 col-xl-8 mx-auto">
                            <SearchForm />
                        </div>
                    </div>
                </section>
            </header>
            {loading || geolocation === null ? 
                    <Spinner /> 
                    : 
                    <section className="container">
                        <div>
                            <h1>Region Page -- {match.params.id}</h1>
                        </div>
                        <div>
                            <h2>{geolocation.title}</h2>
                            <p>{geolocation.body}</p>
                        </div>
                    </section>
            }
            <Listings />
        </Fragment>
    )

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
