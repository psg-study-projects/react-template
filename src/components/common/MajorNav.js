import React, { Fragment } from 'react';
import brandLogo from '../../assets/images/GT_symbol_sml_use_blk_rgb_300.png'
import { Link }  from 'react-router-dom';

// Re-use for individual Post by id
const MajorNav = () => {

    return (
        <Fragment> 
            <nav className="navbar navbar-light bg-light static-top">
                <section className="container">
                    <Link to="/" className="navbar-brand"><img src={brandLogo} width="30" alt="GT Search Logo" /> GroundTruth Search</Link>
                    <a className="btn btn-primary" href="#">Sign In</a>
                </section>
            </nav>
        </Fragment> 
    );
}

export default MajorNav;
