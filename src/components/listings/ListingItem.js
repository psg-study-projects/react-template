// racfp (arrow function w/ prop types)
import React from 'react';
import PropTypes from 'prop-types';
import { Link }  from 'react-router-dom';

const ListingItem = ({ 
    listing
    /*
    listing : {
        //user: { _id, name },
        listing
    }
    */
    }) => {
        return <a href="#" class="list-group-item list-group-item-action mb-3">
            <div class="d-flex w-100 justify-content-between">
                <h5 class="mb-1">{listing.name}</h5>
                <small class="text-muted">{listing.fmt_phone}</small>
            </div>
            <p class="mb-1">{listing.s_desc}</p>
            <small class="text-muted">{listing.caption}</small>
        </a>;
    }

ListingItem.propTypes = {
    listing:  PropTypes.object.isRequired
}
export default ListingItem;

