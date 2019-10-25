// racfp (arrow function w/ prop types)
import React, { Fragment, useState, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { getListings }  from '../../actions/listing';
import { getGeolocations }  from '../../actions/geolocation';
import Spinner from '../layout/Spinner';
import ListingItem from './ListingItem';

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
        { console.log('Lisings::render() -- g_loading = '+g_loading) }
        <h2>Search Form</h2>
        <form className="form" onSubmit={e=> onSubmit(e)} className="mb-5">
            <div className="form-group">
                <input type="text" placeholder="Enter search term..." name="querystr" value={querystr} onChange={e => onChange(e)}  className="form-control" />
            </div>
            <div className="form-group">
                { g_loading ?  '' :
                <select name="qgeolocation" value={qgeolocation} onChange={e => onChange(e)} className="form-control">
                    <option value="0">Please choose a city...</option>
                    { geolocations.map( (g, iter)  => (<option key={g.city} value={g.city+', '+g.state}>{g.city+', '+g.state}</option>)) }
                </select> }
            </div>
            <input type="submit" className="btn btn-primary my-1" />
        </form>
        { l_loading ? 
                <Spinner /> 
                : 
                <Fragment>
                    <h2 className="large text-primary">Listings</h2>
                    <div className="listings">
                        {listings.results.paid_listings.listing.length > 0 
                                ? ( listings.results.paid_listings.listing.map(l => (<ListingItem key={l.l_id} listing={l} />)) ) 
                                : <h4>No listings found...</h4>}
                    </div>
                </Fragment> }
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
