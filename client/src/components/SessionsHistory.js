import { useSelector } from 'react-redux';
import moment from 'moment';

const SessionsHistory = props => {
    const userSessions = useSelector(state => state.trackingReducers.userSessions);

    return (
        <div>
            <div className="table-row">
                <div className="table-col">Session Name</div>
                <div className="table-col">Session Started On</div>
                <div className="table-col">Session Ended On</div>
                <div className="table-col">Session Duration</div>
            </div>
            {
                userSessions?.map((session, index) => {
                    return (
                        <div key={index} className="table-row">
                            <div className="table-col">{session.sessionName}</div>
                            <div className="table-col">{moment(session.startTime).format("DD-MM-YYYY hh:mm:ss")}</div>
                            <div className="table-col">{moment(session.endTime).format("DD-MM-YYYY hh:mm:ss")}</div>
                            <div className="table-col">{session.durationInSeconds}s</div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default SessionsHistory;