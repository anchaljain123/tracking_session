import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { asyncGetAllSessions } from '../redux/actions/tracking.asyncaction';

import Timer from './Timer';
import SessionsHistory from './SessionsHistory';
import MainLayout from '../layouts/MainLayout';
import useLogin from '../hooks/useLogin';

import '../styles/dashboard.css';

const Dashboard = props => {
    const dispatch = useDispatch();
    const user = useSelector(state => state.userReducers.user);
    const { signout } = useLogin();

    useEffect(() => {
        const payload = { userid: user._id }
        dispatch(asyncGetAllSessions(payload));
    }, []);

    return (
        <MainLayout>
            <div className="top-section">
                <h2>{`Hello ${user?.uname} !!`}</h2>
                <button onClick={() => signout()}>Sign out</button>
            </div>
            <Timer />
            <SessionsHistory />
        </MainLayout>
    );
}

export default Dashboard;