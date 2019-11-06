// racfp (arrow function w/ prop types)
import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import MajorNav from '../../components/common/MajorNav';
import { getDetails }  from '../../actions/listing';

const ListingDetail = ({ 
    listing: { details, loading: l_loading },
    getDetails,
    match
}) => {

    useEffect(() => {
        getDetails({
            l_id: match.params.id // get ID from URL
        }); 
    }, [getDetails, match.params.id]);

    return (
        <Fragment>
            <MajorNav />
            { l_loading ?  <div>Loading...</div> : 
                    <section className="container mt-3">
                        <div className="row">
                            <div className="col">
                                <p>Placeholder content: waiting on CORS to be enabled for API endpoint 'more_info'</p>
                            </div>
                        </div>
                    </section>
            }
        </Fragment>
    )
}

ListingDetail.propTypes = {
    getDetails:  PropTypes.func.isRequired,
    listing:  PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    listing: state.listing
});

export default connect(
    mapStateToProps, 
    { getDetails }
)(ListingDetail);

