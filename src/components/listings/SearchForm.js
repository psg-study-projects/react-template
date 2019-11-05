import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { useHistory } from "react-router-dom";
import { getListings }  from '../../actions/listing';
import { getGeolocations }  from '../../actions/geolocation';

const SearchForm = ({ 
    getListings,
    getGeolocations,
    listing: { listings, loading: l_loading },
    geolocation : { geolocations, loading: g_loading },
}) => {

    let history = useHistory();

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
        getListings({
            i: formData.querystr,
            loc: formData.qgeolocation
        })
            .then(res => {
                history.push(`/region/${res.data.results.geoslug}`);
            });
    };

    return (
        <Fragment>
            <form className="OFF-form" onSubmit={e=> onSubmit(e)} className="mb-5">
                <div className="form-row">
                    <div className="col-12 col-md-6 mb-2 mb-md-0">
                        <input type="text" placeholder="Enter search term..." name="querystr" value={querystr} onChange={e => onChange(e)}  className="form-control form-control-lg" />
                    </div>
                    <div className="col-12 col-md-4 mb-2 mb-md-0">
                        { g_loading ?  '' :
                                <select name="qgeolocation" value={qgeolocation} onChange={e => onChange(e)} className="form-control form-control-lg">
                                    <option value="0">Please choose a city...</option>
                                    { 
                                        geolocations.map( (g, iter)  => (<option key={g.city} value={g.city+', '+g.state}>{g.city+', '+g.state}</option>)) 
                                    }
                                </select> 
                        }
                    </div>
                    <div className="col-12 col-md-2">
                        <button type="submit" className="btn btn-block btn-lg btn-primary">Search</button>
                    </div>
                </div>
            </form>
        </Fragment>
    )

}

SearchForm.propTypes = {
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
)(SearchForm);


    // https://stackoverflow.com/questions/31079081/programmatically-navigate-using-react-router
    // https://medium.com/collaborne-engineering/returning-promises-from-redux-action-creators-3035f34fa74b
    // https://stackoverflow.com/questions/47565389/call-function-after-dispatch-from-redux-has-finished
    // https://redux.js.org/advanced/async-actions
    // https://github.com/reduxjs/redux-thunk
    // https://stackoverflow.com/questions/35069212/return-promise-from-store-after-redux-thunk-dispatch
    // https://stackoverflow.com/questions/39524855/how-to-trigger-off-callback-after-updating-state-in-redux
    // https://stackoverflow.com/questions/52737078/how-can-you-use-axios-interceptors
