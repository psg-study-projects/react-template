import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, withRouter  }  from 'react-router-dom';
import MajorNav from '../../components/common/MajorNav';
import { requestInfo } from '../../actions/register.js';

const Register = ({ 
    requestInfo,
    history
}) => {

    const [formData, setFormData] = useState({
        first_name: '',
        last_name: '',
        email: '',
        company: '',
        phone: '',
        comments: ''
    });
    const { first_name, last_name, email, company, phone, comments } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
    const onSubmit = e => {
        e.preventDefault();
        requestInfo(formData, history); // call action
    };

    return (
        <Fragment> 
            <MajorNav />
            <section id="supercrate-register" className="container mt-3">
                <div className="row">
                    <div className="col">
                        <h1 className="large text-primary">Request More Info on GT Search</h1>
                        {/* <p className="lead">Add any developer/programming positions that you have had in the past</p> */}
                        <small>* = required field</small>
                        <form className="" onSubmit={e=> onSubmit(e)} >
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="* First Name" name="first_name" required value={first_name} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="* Last Name" name="last_name" required value={last_name} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group">
                                <input type="email" className="form-control" placeholder="* E-Mail" name="email" required value={email} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Company" name="company" value={company} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Phone" name="phone" value={phone} onChange={e => onChange(e)} />
                            </div>
                            <div className="form-group">
                                <textarea
                                    name="comments"
                                    cols="30"
                                    rows="5"
                                    className="form-control" 
                                    placeholder="Job Description"
                                    value={comments} onChange={e => onChange(e)}
                                ></textarea>
                            </div>
                            <div className="my-1">
                                <input type="submit" className="btn btn-primary mr-3" />
                                <Link to="/" className="btn btn-light">Go Back</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </Fragment> 
    )
}

Register.propTypes = {
    requestInfo: PropTypes.func.isRequired
}

export default connect(
    null, 
    { requestInfo }
)(withRouter(Register));
