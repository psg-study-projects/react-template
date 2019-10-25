// racfp (arrow function w/ prop types)
import React, { Fragment, useState, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { getListings }  from '../../actions/listing';
import Spinner from '../layout/Spinner';
import ListingItem from './ListingItem';

// %TODO [ ] Nest a form in this component, that's where 'query' comes from
const Listings = ({ 
    getListings,
    listing: { profiles, listings, loading }
}) => {

    // https://reactjs.org/docs/hooks-state.html
    const [formData, setFormData] = useState({
        querystr: ''
    });

    // As soon as this runs, we want to run get listings...
    useEffect(() => {
        //getListings();

        // want to set the form data...fill teh form with the curretn profile values
        setFormData({
            //querystr:  loading || !listings.querystr ? '' : listings.querystr
            querystr:  '',
        });

    }, [loading, getListings]); //  // when it loads, that's when we want this to run | need to add as dependency to get rid of warning


    const {
        querystr
    } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = e => {
        e.preventDefault();
        console.log('Form submitted...');
        getListings({
            i: formData.querystr,
            //lat: 40.7364911,
            //long: -73.8779137,
            loc: 'Seattle, WA'
        });
        //createProfile(formData, history, true);
    };

    return <Fragment> 
        <h2>Search Form</h2>
        <form className="form" onSubmit={e=> onSubmit(e)} >
            <div className="form-group">
                <input type="text" placeholder="Enter search term..." name="querystr" value={querystr} onChange={e => onChange(e)} />
            </div>
            <input type="submit" className="btn btn-primary my-1" />
        </form>
        { loading ? 
                <Spinner /> 
                : 
                <Fragment>
                    <h2 className="large text-primary">Listings</h2>
                    <div className="listings">
                        {profiles.results.paid_listings.listing.length > 0 
                                ? ( profiles.results.paid_listings.listing.map(l => (<ListingItem key={l.l_id} listing={l} />)) ) 
                                : <h4>No listings found...</h4>}
                    </div>
                </Fragment> }
            </Fragment>;
}

Listings.propTypes = {
    getListings:  PropTypes.func.isRequired,
    listing:  PropTypes.object.isRequired

}

// so...anything in state/reducer, we'll be able to get in this component
const mapStateToProps = state => ({
    listing: state.listing /* listing state */
});


export default connect(
    mapStateToProps, 
    { getListings } 
)(Listings);
