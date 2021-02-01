import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncSessionSave } from '../redux/actions/tracking.asyncaction';


const Timer = () => {
    const dispatch = useDispatch();
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [startTimestamp, setStartTimestamp] = useState();
    const user = useSelector(state => state.userReducers.user);


    const startTimer = () => {
        setIsActive(true);
        setStartTimestamp(new Date());
    };

    const pause = () => {
        setIsActive(false);
    };

    const reset = () => {
        setSeconds(0);
        setIsActive(false);
    };

    const save = () => {
        let sessionName = window.prompt('Give your session a name:');
        pause();
        const payload = {
            userid: user._id,
            session: {
                sessionName: sessionName,
                startTime: startTimestamp,
                endTime: new Date(),
                durationInSeconds: seconds
            }
        }
        dispatch(asyncSessionSave(payload))
            .then(() => {
                reset()
            });
    }

    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
            }, 1000);
        } else if (!isActive && seconds !== 0) {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds]);

    return (
        <div className="app">
            <div className="time">
                {seconds}s
            </div>
            <div className="row">
                <button onClick={startTimer}>Start</button>
                <button onClick={pause}>Pause</button>
                <button onClick={reset}>Reset</button>
                <button onClick={save}>Save</button>
            </div>
        </div>
    );
};

export default Timer;