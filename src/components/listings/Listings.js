import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { getListings }  from '../../actions/listing';
import { getGeolocations }  from '../../actions/geolocation';
import Spinner from '../layout/Spinner';
import ListingItem from './ListingItem';
import 'startbootstrap-landing-page/css/landing-page.css';

const Listings = ({ 
    //dispatch,
    getListings,
    getGeolocations,
    listing: { listings, loading: l_loading },
    geolocation : { geolocations, loading: g_loading },
}) => {

    return <Fragment> 
        { l_loading ?  <div></div> : 
                <Fragment>
                    <p className="d-none">GeoSlug: {listings.results.geoslug} </p>
                    <section className="container mt-3 mb-3">
                        <div className="row">
                            <div className="col-12 col-md-10 mx-auto">
                                <h2 className="large text-primary">Listings</h2>
                                <div className="list-group">
                                    {listings.results.paid_listings.listing.length > 0 
                                            ? ( listings.results.paid_listings.listing.map(l => (<ListingItem key={l.l_id} listing={l} />)) ) 
                                            : <h4>No listings found...</h4>
                                    }
                                </div>
                            </div>
                        </div>
                    </section>
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
