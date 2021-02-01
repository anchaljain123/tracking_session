const mongoose = require('mongoose');

const trackingSchema = new mongoose.Schema({
    userid: {
        type: mongoose.ObjectId,
        required: true,
    },
    sessions: {
        type: [{
            sessionName: String,
            durationInSeconds: Number,
            startTime: Date,
            endTime: Date
        }],
        required: false,
    }
});

module.exports = mongoose.model('Tracking', trackingSchema);