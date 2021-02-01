import React from 'react';
import { Field, reduxForm } from 'redux-form';

import MainLayout from '../layouts/MainLayout';

const Login = props => {
    const { handleSubmit } = props;

    return (
        <MainLayout>
            <form onSubmit={handleSubmit}>
                {/* {this.state.err ? <h4> No User Found </h4> : ''} */}
                <h2> Login Form </h2>
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

                <a href="/signup">NewUser ? </a>
            </form>
        </MainLayout>
    );
}

export default reduxForm({
    form: 'loginForm'
})(Login);
