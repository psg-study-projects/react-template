// racfp (arrow function w/ prop types)
import React, { Fragment} from 'react';
import PropTypes from 'prop-types';
import MajorNav from '../../components/common/MajorNav';

const ListingDetail = ({ 
    listing_id
}) => {
    return (
        <Fragment>
            <MajorNav />
            <section className="container mt-3">
                <div className="row">
                    <div className="col">
                        <div>Placeholder</div>
                    </div>
                </div>
            </section>
        </Fragment>
    )
}

ListingDetail.propTypes = {
    listing_id:  PropTypes.number.isRequired
}

export default ListingDetail;

