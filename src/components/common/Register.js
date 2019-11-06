import React, { Fragment } from 'react';
import { Link }  from 'react-router-dom';
import MajorNav from '../../components/common/MajorNav';

const Register = () => {

    return (
        <Fragment> 
            <MajorNav />
            <section id="supercrate-register" className="container mt-3">
                <div class="row">
                    <div class="col">
                        Register
                    </div>
                </div>
            </section>
        </Fragment> 
    )
}

export default Register;
