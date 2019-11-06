// racfp (arrow function w/ prop types)
import React from 'react';
import PropTypes from 'prop-types';
//import { Link }  from 'react-router-dom';

const ListingItem = ({ 
    listing
    /*
    listing : {
        //user: { _id, name },
        listing
    }
    */
    }) => {
        return <a href="#" className="list-group-item list-group-item-action mb-3">
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{listing.name}</h5>
                <small className="text-muted">{listing.fmt_phone}</small>
            </div>
            <p className="mb-1">{listing.s_desc}</p>
            <small className="text-muted">{listing.caption}</small>
        </a>;
    }

ListingItem.propTypes = {
    listing:  PropTypes.object.isRequired
}
export default ListingItem;

