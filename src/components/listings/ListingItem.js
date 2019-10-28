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
        return <div className="listing bg-light"> 
            <div>
                <h4>{listing.name}</h4>
                <p>{listing.s_desc}</p>
                <p><em>{listing.caption}</em></p>
                <p>{listing.fmt_phone}</p>
            </div>
        </div>;
    }

ListingItem.propTypes = {
    listing:  PropTypes.object.isRequired
}
export default ListingItem;

