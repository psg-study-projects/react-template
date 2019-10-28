// racfp (arrow function w/ prop types)
import React, { Fragment, useState, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { getListings }  from '../../actions/listing';
import { getGeolocations }  from '../../actions/geolocation';
import Spinner from '../layout/Spinner';
import ListingItem from './ListingItem';
import 'startbootstrap-landing-page/css/landing-page.css';

// %TODO [ ] Nest a form in this component, that's where 'query' comes from
const Listings = ({ 
    getListings,
    getGeolocations,
    listing: { listings, loading: l_loading },
    geolocation : { geolocations, loading: g_loading },
}) => {

    // https://reactjs.org/docs/hooks-state.html
    const [formData, setFormData] = useState({
        qgeolocation: '',
        querystr: ''
    });

    // As soon as this runs, we want to run get listings...
    useEffect(() => {
        getGeolocations();

        // want to set the form data...fill teh form with the curretn profile values
        setFormData({
            //querystr:  loading || !listings.querystr ? '' : listings.querystr
            qgeolocation:  '',
            querystr:  ''
        });

    }, [l_loading, getGeolocations]); //  // when it loads, that's when we want this to run | need to add as dependency to get rid of warning


    const {
        qgeolocation,
        querystr
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Form submitted...');
        console.log(formData);
        getListings({
            i: formData.querystr,
            //lat: 40.7364911,
            //long: -73.8779137,
            loc: formData.qgeolocation
        });
        //createProfile(formData, history, true);
    };

    return <Fragment> 
        <nav class="navbar navbar-light bg-light static-top">
            <div class="container">
                <a class="navbar-brand" href="#">GT Search</a>
                <a class="btn btn-primary" href="#">Sign In</a>
            </div>
        </nav>
        <header class="masthead text-white text-center">
            <div class="overlay"></div>
            <div class="container">
                <div class="row">
                    <div class="col-xl-9 mx-auto">
                        <h1 class="mb-5">Build a landing page for your business or project and generate more leads!</h1>
                    </div>
                    <div class="col-md-12 col-lg-10 col-xl-8 mx-auto">
                        <form className="OFF-form" onSubmit={e=> onSubmit(e)} className="mb-5">
                            <div class="form-row">
                                <div class="col-12 col-md-6 mb-2 mb-md-0">
                                    <input type="text" placeholder="Enter search term..." name="querystr" value={querystr} onChange={e => onChange(e)}  className="form-control form-control-lg" />
                                </div>
                                <div class="col-12 col-md-4 mb-2 mb-md-0">
                                    { g_loading ?  '' :
                                            <select name="qgeolocation" value={qgeolocation} onChange={e => onChange(e)} className="form-control form-control-lg">
                                                <option value="0">Please choose a city...</option>
                                                { geolocations.map( (g, iter)  => (<option key={g.city} value={g.city+', '+g.state}>{g.city+', '+g.state}</option>)) }
                                            </select> 
                                    }
                                </div>
                                <div class="col-12 col-md-2">
                                    <button type="submit" class="btn btn-block btn-lg btn-primary">Search</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </header>
        { l_loading ?  <Spinner /> : 
                <Fragment>
                    <h2 className="large text-primary">Listings</h2>
                    <div className="listings">
                        {listings.results.paid_listings.listing.length > 0 
                                ? ( listings.results.paid_listings.listing.map(l => (<ListingItem key={l.l_id} listing={l} />)) ) 
                                : <h4>No listings found...</h4>
                        }
                    </div>
                </Fragment> 
        }
    </Fragment>;
}

Listings.propTypes = {
    getListings:  PropTypes.func.isRequired,
    getGeolocations:  PropTypes.func.isRequired,
    listing:  PropTypes.object.isRequired

}

// so...anything in state/reducer, we'll be able to get in this component
const mapStateToProps = state => ({
    listing: state.listing, /* listing state */
    geolocation: state.geolocation
});


export default connect(
    mapStateToProps, 
    { getListings, getGeolocations } 
)(Listings);
