import React from 'react';
import { Field, reduxForm } from 'redux-form';

import MainLayout from '../layouts/MainLayout';

const Signup = props => {
    const { handleSubmit } = props;
    
    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                {/* {this.state.err ? <h4> No User Found </h4> : ''} */}
                <h2> Signup Form </h2>
                <div>
                    <label htmlFor="uname">Name: </label>
                    <Field name="uname" component="input" type="text" />
                </div>
                <div>
                    <label htmlFor="email">Email: </label>
                    <Field name="email" component="input" type="email" />
                </div>
                <div>
                    <label htmlFor="pwd">Password: </label>
                    <Field name="pwd" component="input" type="password" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </MainLayout>
    );
}

export default reduxForm({
    form: 'signUpForm'
})(Signup);
