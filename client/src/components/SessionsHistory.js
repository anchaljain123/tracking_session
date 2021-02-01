import { useEffect, useS } from 'react'
import { useSelector } from 'react-redux';
import moment from 'moment';

import { groupAccordingToDates } from "../utils/momentUtils";

const SessionsHistory = () => {
    const userSessions = useSelector(state => state.trackingReducers.userSessions);

    const groupedSession = groupAccordingToDates(userSessions) || {};
    return ( 
        (Object.keys(groupedSession)).map((groupName, index) => {
            return (
                <div className="table-wrapper" key={index}>
                    <div className="heading">{groupName.replace('-', ' ')}</div>
                    <div className="table-row">
                        <div className="table-col">Session Name</div>
                        <div className="table-col">Session Started On</div>
                        <div className="table-col">Session Ended On</div>
                        <div className="table-col">Session Duration</div>
                    </div>
                    {
                        groupedSession[groupName]?.map((session, index) => {
                            return (
                                <div key={index} className="table-row">
                                    <div className="table-col">{session.sessionName}</div>
                                    <div className="table-col">{moment(session.startTime).format("DD-MM-YYYY HH:mm:ss")}</div>
                                    <div className="table-col">{moment(session.endTime).format("DD-MM-YYYY HH:mm:ss")}</div>
                                    <div className="table-col">{session.durationInSeconds}s</div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
    );
}

export default SessionsHistory;