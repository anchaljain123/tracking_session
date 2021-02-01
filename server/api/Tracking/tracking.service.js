const Tracking = require('./tracking.model');

exports.storeSession = (sessionData, res) => {
    Tracking.exists({ userid: sessionData.userid }, (err, doc) => {
        if (err) {
            console.log(err)
        } else if (!doc) {
            //record does not exist
            const trackingObject = new Tracking({ userid: sessionData.userid, sessions: [sessionData.session] });
            trackingObject.save((err, data) => {
                if (err) {
                    res.send({ error: err });
                } else {
                    res.send({ success: true });
                }
            });
        } else {
            console.log("record already exist");
            Tracking.findOne({ userid: sessionData.userid }, (err, trackingObject) => {
                if (err) {
                    res.send({ error: err });
                } else {
                    trackingObject.sessions.push(sessionData.session);
                    trackingObject.save();
                    res.send({ success: true });
                }
            });
        }
    });
};

exports.getUserSession = (payload, res) => {
    Tracking.findOne({ userid: payload.userid }, (err, trackingObject) => {
        if (err) {
            res.send({ error: err });
        } else {
            res.send(trackingObject);
        }
    });
};
