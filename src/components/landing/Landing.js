import React, { Fragment, useState, useEffect } from 'react'; /* useEffect: call get Profiles action from  ...*/
import PropTypes from 'prop-types';
import { connect }  from 'react-redux';
import { getListings }  from '../../actions/listing';
import { getGeolocations }  from '../../actions/geolocation';
import Spinner from '../layout/Spinner';
import SearchForm from '../../components/listings/SearchForm';
import MajorNav from '../../components/common/MajorNav';
import 'startbootstrap-landing-page/css/landing-page.css';
import showcase1 from 'startbootstrap-landing-page/img/bg-showcase-1.jpg';
import showcase2 from 'startbootstrap-landing-page/img/bg-showcase-2.jpg';
import showcase3 from 'startbootstrap-landing-page/img/bg-showcase-3.jpg';

import { useHistory } from "react-router-dom";

// %TODO [ ] Nest a form in this component, that's where 'query' comes from
const Landing = ({ 
    //dispatch,
    getListings,
    getGeolocations,
    listing: { listings, loading: l_loading },
    geolocation : { geolocations, loading: g_loading },
}) => {

    const bgShowcase1 = { backgroundImage: "url(" + { showcase1 } + ")" };
    const bgShowcase2 = { backgroundImage: "url(" + { showcase2 } + ")" };
    const bgShowcase3 = { backgroundImage: "url(" + { showcase3 } + ")" };

    return <Fragment> 
        <MajorNav />
        <header className="masthead text-white text-center">
            <div className="overlay"></div>
            <section className="container">
                <div className="row">
                    <div className="col-xl-9 mx-auto">
                        <h1 className="mb-5">Dolorum Ut In Voluptas Mollitia</h1>
                    </div>
                    <div className="col-md-12 col-lg-10 col-xl-8 mx-auto">
                        <SearchForm />
                    </div>
                </div>
            </section>
        </header>

        <section className="features-icons bg-light text-center">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-screen-desktop m-auto text-primary"></i>
                            </div>
                            <h3>Fully Responsive</h3>
                            <p className="lead mb-0">This theme will look great on any device, no matter the size!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-layers m-auto text-primary"></i>
                            </div>
                            <h3>Bootstrap 4 Ready</h3>
                            <p className="lead mb-0">Featuring the latest build of the new Bootstrap 4 framework!</p>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="features-icons-item mx-auto mb-0 mb-lg-3">
                            <div className="features-icons-icon d-flex">
                                <i className="icon-check m-auto text-primary"></i>
                            </div>
                            <h3>Easy to Use</h3>
                            <p className="lead mb-0">Ready to use with your own content, or customize the source files!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="showcase">
            <div className="container-fluid p-0">
                <div className="row no-gutters">
                    {/*
                    <div className="col-lg-6 order-lg-2 text-white showcase-img"  style={{ backgroundImage: `url(require("startbootstrap-landing-page/img/bg-showcase-1.jpg"))` }}></div>
                    */}
                    <div className="col-lg-6 order-lg-2 text-white showcase-img"  style={{ backgroundImage: "url("+showcase1+")" }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Fully Responsive Design</h2>
                        <p className="lead mb-0">When you use a theme created by Start Bootstrap, you know that the theme will look great on any device, whether it's a phone, tablet, or desktop the page will behave responsively!</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    {/*
                    <div className="col-lg-6 order-lg-2 text-white showcase-img"  style={{ backgroundImage: "url("+showcase2+")" }}></div>
                    */}
                    <div className="col-lg-6 OFF-order-lg-2 text-white showcase-img"  style={{ backgroundImage: "url("+showcase2+")" }}></div>
                    <div className="col-lg-6 my-auto showcase-text">
                        <h2>Updated For Bootstrap 4</h2>
                        <p className="lead mb-0">Newly improved, and full of great utility classes, Bootstrap 4 is leading the way in mobile responsive web development! All of the themes on Start Bootstrap are now using Bootstrap 4!</p>
                    </div>
                </div>
                <div className="row no-gutters">
                    {/*
                    <div className="col-lg-6 order-lg-2 text-white showcase-img" style={{ backgroundImage: "url("+"img/bg-showcase-3.jpg"+")" }}></div>
                    */}
                    <div className="col-lg-6 order-lg-2 text-white showcase-img"  style={{ backgroundImage: "url("+showcase3+")" }}></div>
                    <div className="col-lg-6 order-lg-1 my-auto showcase-text">
                        <h2>Easy to Use &amp; Customize</h2>
                        <p className="lead mb-0">Landing Page is just HTML and CSS with a splash of SCSS for users who demand some deeper customization options. Out of the box, just add your content and images, and your new landing page will be ready to go!</p>
                    </div>
                </div>
            </div>
        </section>
    </Fragment>;
}

Landing.propTypes = {
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
    //mapDispatchToProps
    { getListings, getGeolocations } 
)(Landing);
